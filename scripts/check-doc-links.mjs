import { existsSync, readFileSync } from "node:fs";
import { dirname, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const root = dirname(fileURLToPath(import.meta.url)).replace(/\/scripts$/, "");
const files = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "*.md", ".github/*.md", ".github/ISSUE_TEMPLATE/*.md"], {
  cwd: root,
  encoding: "utf8",
})
  .split(/\r?\n/)
  .map((file) => file.trim())
  .filter(Boolean);

const findings = [];
const linkPattern = /!?\[[^\]]*]\(([^)]+)\)/g;

for (const file of files) {
  const text = readFileSync(resolve(root, file), "utf8");
  for (const [lineIndex, line] of text.split(/\r?\n/).entries()) {
    for (const match of line.matchAll(linkPattern)) {
      const rawTarget = match[1].trim();
      const target = rawTarget.split(/\s+/)[0].replace(/^<|>$/g, "");
      if (!target || shouldSkip(target)) continue;

      const withoutFragment = target.split("#")[0];
      if (!withoutFragment) continue;

      const decoded = decodeURIComponent(withoutFragment);
      const absoluteTarget = normalize(resolve(root, dirname(file), decoded));
      if (!absoluteTarget.startsWith(root)) {
        findings.push(`${file}:${lineIndex + 1}: link escapes repository: ${rawTarget}`);
        continue;
      }
      if (!existsSync(absoluteTarget)) {
        findings.push(`${file}:${lineIndex + 1}: missing local link target: ${rawTarget}`);
      }
    }
  }
}

if (findings.length > 0) {
  console.error(findings.join("\n"));
  process.exit(1);
}

console.log(`Documentation link scan passed (${files.length} markdown files).`);

function shouldSkip(target) {
  return (
    target.startsWith("#") ||
    /^[a-z][a-z0-9+.-]*:/i.test(target) ||
    target.startsWith("//") ||
    target.startsWith("mailto:")
  );
}
