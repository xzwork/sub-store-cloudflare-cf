import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const args = process.argv.slice(2).filter((arg) => arg !== "--");
const required = args.includes("--required");
const [configPath = "cloudflare/wrangler.deploy.local.jsonc"] = args.filter((arg) => arg !== "--required");

if (!existsSync(configPath)) {
  if (!required) {
    console.log(`${configPath}: skipped local deployment config scan.`);
    process.exit(0);
  }
  console.error(`${configPath}: missing local deployment config. Run pnpm run deploy:config first.`);
  process.exit(1);
}

const config = parseJsonc(readFileSync(configPath, "utf8"), configPath);
const assets = config.assets;
const expectedAssetDirectory = resolve(configPath) === resolve("wrangler.jsonc") ? "frontend/dist" : "../frontend/dist";
const findings = [];
const rootConfig = readConfig("wrangler.jsonc");
const workerConfig = readConfig("cloudflare/wrangler.jsonc");

if (rootConfig.compatibility_date !== workerConfig.compatibility_date) {
  findings.push("root and cloudflare compatibility_date values must match");
}
if (!sameStrings(rootConfig.compatibility_flags, workerConfig.compatibility_flags)) {
  findings.push("root and cloudflare compatibility_flags values must match");
}
if (config.compatibility_date !== rootConfig.compatibility_date) {
  findings.push(`compatibility_date must be "${rootConfig.compatibility_date}"`);
}
if (!sameStrings(config.compatibility_flags, rootConfig.compatibility_flags)) {
  findings.push(`compatibility_flags must match root config (${stringList(rootConfig.compatibility_flags).join(", ")})`);
}
if (!stringList(config.compatibility_flags).includes("nodejs_compat")) {
  findings.push('compatibility_flags must include "nodejs_compat"');
}

if (!assets || typeof assets !== "object") {
  findings.push("assets config is missing");
} else {
  if (assets.directory !== expectedAssetDirectory) {
    findings.push(`assets.directory must be "${expectedAssetDirectory}"`);
  }
  if (assets.binding !== "ASSETS") {
    findings.push('assets.binding must be "ASSETS"');
  }
  if (assets.not_found_handling !== "single-page-application") {
    findings.push('assets.not_found_handling must be "single-page-application"');
  }
  if (assets.run_worker_first !== true) {
    findings.push("assets.run_worker_first must be true");
  }
}

if (findings.length > 0) {
  console.error(`${configPath}: invalid deployment config`);
  console.error(findings.map((finding) => `- ${finding}`).join("\n"));
  process.exit(1);
}

console.log(`${configPath}: deployment config scan passed.`);

function parseJsonc(text, file) {
  try {
    return JSON.parse(stripJsonComments(text));
  } catch (error) {
    console.error(`${file}: invalid JSONC: ${error.message}`);
    process.exit(1);
  }
}

function readConfig(path) {
  if (!existsSync(path)) {
    console.error(`${path}: missing canonical Wrangler config`);
    process.exit(1);
  }
  return parseJsonc(readFileSync(path, "utf8"), path);
}

function stringList(input) {
  return Array.isArray(input) ? input.map(String).sort() : [];
}

function sameStrings(left, right) {
  return JSON.stringify(stringList(left)) === JSON.stringify(stringList(right));
}

function stripJsonComments(input) {
  let output = "";
  let inString = false;
  let quote = "";
  let escaped = false;

  for (let index = 0; index < input.length; index += 1) {
    const char = input[index];
    const next = input[index + 1];

    if (inString) {
      output += char;
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        inString = false;
      }
      continue;
    }

    if (char === "\"" || char === "'") {
      inString = true;
      quote = char;
      output += char;
      continue;
    }

    if (char === "/" && next === "/") {
      while (index < input.length && input[index] !== "\n") index += 1;
      output += "\n";
      continue;
    }

    if (char === "/" && next === "*") {
      index += 2;
      while (index < input.length && !(input[index] === "*" && input[index + 1] === "/")) index += 1;
      index += 1;
      continue;
    }

    output += char;
  }

  return output;
}
