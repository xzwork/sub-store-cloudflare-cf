import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { denyPatterns, skippedCurrentFiles } from "./open-source-denylist.mjs";

const trackedFiles = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], { encoding: "utf8" })
  .split("\0")
  .filter(Boolean)
  .filter((file) => !skippedCurrentFiles.has(file))
  .filter((file) => existsSync(file));

const findings = [];
const removedFeaturePaths = [
  [/^frontend\/src\/api\/(archive|artifacts|files|logs|share)\//, "removed frontend feature API"],
  [/^frontend\/src\/components\/(Archive|Artifact|Artifacts|File|Logs|MagicPath|Share)/, "removed frontend feature component"],
  [/^frontend\/src\/store\/(archive|artifacts|logsOverlay)\.ts$/, "removed frontend feature store"],
  [/^frontend\/src\/utils\/(archive|artifactIcon|fileType|githubProxy|pwa|share|shareTags|semver)\.ts$/, "removed frontend feature utility"],
  [/^frontend\/src\/views\/(File|FileEditor|Logs|Sync|SyncEditor)\.vue$/, "removed frontend feature view"],
  [/^frontend\/src\/views\/(archive|share|settings)\//, "removed frontend feature view"],
  [/^frontend\/src\/views\/editor\/components\/(AddProxiesFromSubscription|Script|MonacoEditor)\.vue$/, "removed frontend feature editor component"],
  [/^cloudflare\/src\/routes\/(files|share|sync|archive|logs|artifacts)\.ts$/, "removed worker feature route"],
  [/^cloudflare\/src\/lib\/(files|share|sync|archive|logs|artifacts)\.ts$/, "removed worker feature library"],
];
const removedStaticAssetPaths = [
  [/^frontend\/public\/manifests\.json$/, "removed PWA manifest"],
  [/^frontend\/public\/(?:48x48|72x72|96x96|144x144|168x168|192x192|256x256|512x512|apple-touch-icon)\.png$/, "removed PWA icon asset"],
  [/^frontend\/src\/components\/GlobalNotify\.vue$/, "removed unused notify component"],
];
const frontendDebugPatterns = [
  [/\bconsole\.log\s*\(/g, "frontend console.log debug output"],
  [/\bdebugger\b/g, "frontend debugger statement"],
];
const removedFrontendFeaturePatterns = [
  [/\bSplashScreen\b/g, "removed splash screen entry"],
  [/\bGlobalNotify\b/g, "removed unused notify component"],
  [/\bpwa_top_padding\b/g, "removed PWA top padding UI"],
  [/\bnavigator\.standalone\b/g, "removed PWA standalone detection"],
  [/\bsetBottomSafeArea\b/g, "removed JS safe-area state"],
  [/\bbottomSafeArea\b/g, "removed JS safe-area state"],
  [/\bProgressive Web App\b/g, "removed PWA marketing text"],
  [/\bmobile-web-app-capable\b/g, "removed PWA meta tag"],
  [/\bapple-mobile-web-app-capable\b/g, "removed PWA meta tag"],
  [/\brel=["']manifest["']/g, "removed PWA manifest link"],
  [/\bincludeUnsupportedProxy\b/g, "removed preview option"],
  [/\bprettyYaml\b/g, "removed preview option"],
  [/\bhasNewVersion\b/g, "removed upstream release reminder"],
  [/\blatestVersion\b/g, "removed upstream release reminder"],
  [/\buseChangelogs\b/g, "removed upstream changelog UI"],
  [/\bVConsole\b/g, "removed frontend debug console"],
  [/\bvconsole\b/g, "removed frontend debug console"],
  [/\bgithubProxy\b/g, "removed GitHub proxy setting"],
  [/\biconCollection\b/g, "removed icon collection UI"],
];
const localeForbiddenKeys = [
  "filePage",
  "logsPage",
  "syncPage",
  "sharePage",
  "archivePage",
  "themeSettingPage",
  "apiSettingPage",
  "moreSettingPage",
  "aboutUsPage",
  "codePage",
  "magicPath",
];
const localeForbiddenPatterns = [
  [/\bGist\b/gi, "removed Gist sync locale text"],
  [/\bgist(Token|Upload)?\b/gi, "removed Gist sync locale key"],
  [/\bgithub(User|Proxy|Api|Config)\b/gi, "removed GitHub sync locale key"],
  [/更多设置/g, "removed upstream more-settings help text"],
  [/\bMore settings\b/gi, "removed upstream more-settings help text"],
  [/\bMITM\b/gi, "removed proxy-tool deployment help text"],
  [/\bRewrite\b/gi, "removed proxy-tool deployment help text"],
  [/YM Peng/g, "removed upstream personal copy"],
  [/t\.me\/zhetengsha/g, "removed external script recommendation"],
  [/\bhasNewVersion\b/g, "removed upstream release reminder"],
  [/\blatestVersion\b/g, "removed upstream release reminder"],
  [/\biconCollection\b/g, "removed icon collection locale key"],
  [/\bsyncConfig\b/g, "removed sync locale key"],
  [/\bshareManage\b/g, "removed share locale key"],
  [/\bshareEditor\b/g, "removed share locale key"],
  [/\barchive\b/g, "removed archive locale key"],
  [/\blogs\b/g, "removed logs locale key"],
  [/\bapiSetting\b/g, "removed API setting locale key"],
  [/\bmoreSetting\b/g, "removed more setting locale key"],
  [/\bthemeSetting\b/g, "removed theme setting locale key"],
  [/\beditScript\b/g, "removed script editor locale key"],
  [/\bfileEditor\b/g, "removed file editor locale key"],
  [/\bsyncEditor\b/g, "removed sync editor locale key"],
];

for (const file of trackedFiles) {
  for (const [pattern, label] of removedFeaturePaths) {
    if (pattern.test(file)) {
      findings.push(`${file}: ${label}`);
    }
  }
  for (const [pattern, label] of removedStaticAssetPaths) {
    if (pattern.test(file)) {
      findings.push(`${file}: ${label}`);
    }
  }

  let text;
  try {
    text = readFileSync(file, "utf8");
  } catch {
    continue;
  }

  const lines = text.split(/\r?\n/);
  for (const [index, line] of lines.entries()) {
    for (const [pattern, label] of denyPatterns) {
      pattern.lastIndex = 0;
      if (pattern.test(line)) {
        findings.push(`${file}:${index + 1}: ${label}: ${line.trim()}`);
      }
    }
  }

  if (/^frontend\/src\/locales\/(zh|en)\.ts$/.test(file)) {
    const localeKeyPattern = new RegExp(`^\\s{2}(${localeForbiddenKeys.join("|")}):`);
    for (const [index, line] of lines.entries()) {
      if (localeKeyPattern.test(line)) {
        findings.push(`${file}:${index + 1}: removed locale section: ${line.trim()}`);
      }

      for (const [pattern, label] of localeForbiddenPatterns) {
        pattern.lastIndex = 0;
        if (pattern.test(line)) {
          findings.push(`${file}:${index + 1}: ${label}: ${line.trim()}`);
        }
      }
    }
  }

  if (file.startsWith("frontend/src/")) {
    let inBlockComment = false;
    for (const [index, line] of lines.entries()) {
      const codeLine = stripSimpleComments(line, inBlockComment);
      inBlockComment = codeLine.inBlockComment;
      for (const [pattern, label] of frontendDebugPatterns) {
        pattern.lastIndex = 0;
        if (pattern.test(codeLine.text)) {
          findings.push(`${file}:${index + 1}: ${label}: ${line.trim()}`);
        }
      }
    }
  }

  for (const [index, line] of lines.entries()) {
    for (const [pattern, label] of removedFrontendFeaturePatterns) {
      pattern.lastIndex = 0;
      if (pattern.test(line)) {
        findings.push(`${file}:${index + 1}: ${label}: ${line.trim()}`);
      }
    }
  }
}

findUnusedIconAssets();

if (findings.length > 0) {
  console.error(findings.join("\n"));
  process.exit(1);
}

console.log("Open-source scan passed.");

function stripSimpleComments(line, inBlockComment) {
  let text = line;
  let blockCommentOpen = inBlockComment;

  if (blockCommentOpen) {
    const closeIndex = text.indexOf("*/");
    if (closeIndex === -1) return { text: "", inBlockComment: true };
    text = text.slice(closeIndex + 2);
    blockCommentOpen = false;
  }

  while (true) {
    const openIndex = text.indexOf("/*");
    if (openIndex === -1) break;
    const closeIndex = text.indexOf("*/", openIndex + 2);
    if (closeIndex === -1) {
      text = text.slice(0, openIndex);
      blockCommentOpen = true;
      break;
    }
    text = `${text.slice(0, openIndex)}${text.slice(closeIndex + 2)}`;
  }

  const lineCommentIndex = text.indexOf("//");
  if (lineCommentIndex !== -1) text = text.slice(0, lineCommentIndex);

  return { text, inBlockComment: blockCommentOpen };
}

function findUnusedIconAssets() {
  const iconDir = "frontend/src/assets/icons";
  if (!existsSync(iconDir)) return;

  const sourceFiles = trackedFiles
    .filter((file) => file.startsWith("frontend/src/"))
    .filter((file) => !file.startsWith(`${iconDir}/`));
  const sourceText = sourceFiles
    .map((file) => {
      try {
        return readFileSync(file, "utf8");
      } catch {
        return "";
      }
    })
    .join("\n");
  const spriteIconNames = [...sourceText.matchAll(/<svg-icon[^>]*\bname=["']([^"']+)["']/g)]
    .map((match) => match[1]);
  const usedIconNames = new Set(spriteIconNames);

  for (const match of sourceText.matchAll(/@\/assets\/icons\/([^"']+)/g)) {
    usedIconNames.add(match[1].replace(/\.[^.]+$/, ""));
  }

  for (const fileName of readdirSync(iconDir).sort()) {
    const iconPath = `${iconDir}/${fileName}`;
    const iconName = fileName.replace(/\.[^.]+$/, "");
    const directlyImported = sourceText.includes(`@/assets/icons/${fileName}`);
    const spriteUsed = usedIconNames.has(iconName);
    if (!directlyImported && !spriteUsed) {
      findings.push(`${iconPath}: unused frontend icon asset`);
    }
  }
}
