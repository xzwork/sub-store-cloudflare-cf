import { execFileSync } from "node:child_process";
import { denyPatterns, skippedHistoryPaths } from "./open-source-denylist.mjs";

const revisions = process.argv.slice(2).filter((arg) => arg !== "--");
const revListArgs = revisions.length > 0 ? revisions : ["--all"];
const commits = execFileSync("git", ["rev-list", ...revListArgs], { encoding: "utf8" })
  .trim()
  .split(/\s+/)
  .filter(Boolean);

const skippedArgs = skippedHistoryPaths.flatMap((path) => [`:!${path}`]);
const findings = [];

for (const commit of commits) {
  const files = execFileSync("git", ["ls-tree", "-r", "--name-only", "-z", commit], { encoding: "utf8" })
    .split("\0")
    .filter(Boolean)
    .filter((file) => !skippedHistoryPaths.includes(file));

  for (const file of files) {
    let text;
    try {
      text = execFileSync("git", ["show", `${commit}:${file}`], {
        encoding: "utf8",
        maxBuffer: 10 * 1024 * 1024,
        stdio: ["ignore", "pipe", "ignore"],
      });
    } catch {
      continue;
    }

    const lines = text.split(/\r?\n/);
    for (const [index, line] of lines.entries()) {
      for (const [pattern, label] of denyPatterns) {
        pattern.lastIndex = 0;
        if (pattern.test(line)) {
          findings.push(`${commit.slice(0, 12)}:${file}:${index + 1}: ${label}: ${line.trim()}`);
        }
      }
    }
  }
}

if (findings.length > 0) {
  console.error(findings.join("\n"));
  console.error("\nGit history contains private deployment details. Publish from a new orphan public baseline or rewrite history before making the repository public.");
  process.exit(1);
}

console.log("Git history scan passed.");
