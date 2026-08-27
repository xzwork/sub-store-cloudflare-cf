import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";

const localeFiles = {
  zh: "src/locales/zh.ts",
  en: "src/locales/en.ts",
};

const loadLocale = async (filePath) => {
  const code = fs.readFileSync(filePath, "utf8");
  const sourceUrl = pathToFileURL(filePath).href;
  const dataUrl = `data:text/javascript;base64,${Buffer.from(`${code}\n//# sourceURL=${sourceUrl}`).toString("base64")}`;
  const localeModule = await import(dataUrl);
  return localeModule.default;
};

const flatten = (value, prefix = "", result = new Map()) => {
  if (Array.isArray(value)) {
    value.forEach((item, index) =>
      flatten(item, `${prefix}[${index}]`, result),
    );
    return result;
  }

  if (value && typeof value === "object") {
    Object.keys(value).forEach((key) => {
      flatten(value[key], prefix ? `${prefix}.${key}` : key, result);
    });
    return result;
  }

  result.set(prefix, value);
  return result;
};

const getPlaceholders = (value) => {
  if (typeof value !== "string") return [];
  return [...value.matchAll(/\{[^}]+\}/g)].map((match) => match[0]).sort();
};

const formatList = (items) => items.map((item) => `  - ${item}`).join("\n");

const listSourceFiles = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listSourceFiles(filePath));
      continue;
    }

    if (/\.(?:vue|ts|js)$/.test(entry.name)) {
      files.push(filePath);
    }
  }

  return files;
};

const normalizeLocaleKey = (key) =>
  key.replace(/\[['"]([^'"]+)['"]\]/g, ".$1");

const stripTemplateComments = (text) =>
  text.replace(/<!--[\s\S]*?-->/g, "");

const collectStaticLocaleUsages = (files) => {
  const usages = [];
  const quotedCallPattern = /(^|[^\w$])(?:\$t|t|i18n\.global\.t)\(\s*(["'])(.*?)\2/gs;
  const templateCallPattern = /(^|[^\w$])(?:\$t|t|i18n\.global\.t)\(\s*`([^`]*)`/gs;

  for (const filePath of files) {
    const text = stripTemplateComments(fs.readFileSync(filePath, "utf8"));
    const collect = (pattern, keyIndex) => {
      pattern.lastIndex = 0;
      let match;

      while ((match = pattern.exec(text))) {
        const rawKey = match[keyIndex];
        if (!rawKey || rawKey.includes("${")) continue;

        const index = match.index + match[0].lastIndexOf(rawKey);
        const line = text.slice(0, index).split(/\r?\n/).length;
        usages.push({
          file: filePath,
          line,
          rawKey,
          key: normalizeLocaleKey(rawKey),
        });
      }
    };

    collect(quotedCallPattern, 3);
    collect(templateCallPattern, 2);
  }

  return usages;
};

const locales = Object.fromEntries(
  await Promise.all(
    Object.entries(localeFiles).map(async ([locale, filePath]) => [
      locale,
      flatten(await loadLocale(filePath)),
    ]),
  ),
);

let hasError = false;
const baselineLocale = "zh";
const baseline = locales[baselineLocale];
const baselineKeys = [...baseline.keys()].sort();

for (const [locale, entries] of Object.entries(locales)) {
  const keys = [...entries.keys()].sort();
  const missing = baselineKeys.filter((key) => !entries.has(key));
  const extra = keys.filter((key) => !baseline.has(key));

  if (missing.length > 0) {
    hasError = true;
    console.error(
      `${localeFiles[locale]} is missing ${missing.length} locale key(s):\n${formatList(missing)}`,
    );
  }

  if (extra.length > 0) {
    hasError = true;
    console.error(
      `${localeFiles[locale]} has ${extra.length} extra locale key(s):\n${formatList(extra)}`,
    );
  }
}

for (const key of baselineKeys) {
  const expectedPlaceholders = getPlaceholders(baseline.get(key)).join(",");

  for (const [locale, entries] of Object.entries(locales)) {
    if (!entries.has(key)) continue;

    const value = entries.get(key);
    const actualPlaceholders = getPlaceholders(value).join(",");

    if (actualPlaceholders !== expectedPlaceholders) {
      hasError = true;
      console.error(
        `${localeFiles[locale]} has placeholder mismatch at ${key}: expected [${expectedPlaceholders}], got [${actualPlaceholders}]`,
      );
    }
  }
}

const localeUsages = collectStaticLocaleUsages(listSourceFiles("src"));
const missingUsages = localeUsages.filter(({ key }) => !baseline.has(key));

if (missingUsages.length > 0) {
  hasError = true;
  console.error(
    `Source code references ${missingUsages.length} missing locale key(s):\n${formatList(
      missingUsages.map(
        ({ file, line, rawKey }) => `${file}:${line}: ${rawKey}`,
      ),
    )}`,
  );
}

const languagesFile = fs.readFileSync("src/locales/languages.ts", "utf8");
for (const locale of Object.keys(localeFiles)) {
  if (!new RegExp(`key:\\s*["']${locale}["']`).test(languagesFile)) {
    hasError = true;
    console.error(
      `src/locales/languages.ts does not register locale key '${locale}'`,
    );
  }
}

if (hasError) {
  process.exit(1);
}

console.log(
  `Locale check passed for ${Object.keys(localeFiles).join(", ")} (${baselineKeys.length} keys, ${localeUsages.length} static usages).`,
);
