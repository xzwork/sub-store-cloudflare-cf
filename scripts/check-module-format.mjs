import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";

const skippedFiles = new Set([
  "scripts/check-module-format.mjs",
  "frontend/pnpm-lock.yaml",
  "cloudflare/pnpm-lock.yaml",
  "pnpm-lock.yaml",
]);

const skippedExtensions = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".ico",
  ".woff",
  ".woff2",
  ".ttf",
  ".eot",
  ".otf",
]);

const forbidden = [
  [/\brequire\s*\(/g, "CommonJS require()"],
  [/\bmodule\.exports\b/g, "CommonJS module.exports"],
  [/\bexports\.[A-Za-z_$]/g, "CommonJS exports.*"],
  [/\bcreateRequire\b/g, "Node createRequire()"],
  [/"type"\s*:\s*"commonjs"/gi, "CommonJS package type"],
  [/\.cjs\b/g, "CommonJS .cjs file reference"],
];

const files = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], { encoding: "utf8" })
  .split("\0")
  .filter(Boolean)
  .filter((file) => !skippedFiles.has(file))
  .filter((file) => !file.includes("/dist/"))
  .filter((file) => !file.includes("/node_modules/"))
  .filter((file) => !skippedExtensions.has(file.slice(file.lastIndexOf(".")).toLowerCase()))
  .filter((file) => existsSync(file));

const findings = [];

for (const file of files) {
  let text;
  try {
    text = readFileSync(file, "utf8");
  } catch {
    continue;
  }

  const lines = text.split(/\r?\n/);
  for (const [index, line] of lines.entries()) {
    for (const [pattern, label] of forbidden) {
      pattern.lastIndex = 0;
      if (pattern.test(line)) {
        findings.push(`${file}:${index + 1}: ${label}: ${line.trim()}`);
      }
    }
  }
}

if (findings.length > 0) {
  console.error(findings.join("\n"));
  process.exit(1);
}

console.log("Module format scan passed. First-party code is ESM-only.");
