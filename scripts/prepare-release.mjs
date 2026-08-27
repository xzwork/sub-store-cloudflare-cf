import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";

const version = process.argv.slice(2).filter((arg) => arg !== "--")[0];

if (!version || !/^v?\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/.test(version)) {
  console.error("Usage: node scripts/prepare-release.mjs <version>");
  console.error("Example: node scripts/prepare-release.mjs v0.3.0");
  process.exit(1);
}

const tag = version.startsWith("v") ? version : `v${version}`;
const plainVersion = tag.slice(1);

assertCleanEnough();
assertPackageVersion("package.json", plainVersion);
assertPackageVersion("cloudflare/package.json", plainVersion);
assertChangelog(plainVersion);
assertReleaseNotes();
assertNoTag(tag);

console.log(
  JSON.stringify(
    {
      tag,
      version: plainVersion,
      package: "ok",
      changelog: "ok",
      releaseNotes: "ok",
    },
    null,
    2,
  ),
);

function assertCleanEnough() {
  const status = execFileSync("git", ["status", "--short"], { encoding: "utf8" })
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const privateFindings = status.filter((line) => {
    const isDocumentedExample = /\.(?:local|private)\.example\./.test(line);
    return (!isDocumentedExample && /\.(local|private)\./.test(line)) || line.includes(".dev.vars") || line.includes("agent.seed.local.sql");
  });
  if (privateFindings.length > 0) {
    fail(`Private local files appear in git status:\n${privateFindings.join("\n")}`);
  }
}

function assertPackageVersion(path, expected) {
  const pkg = JSON.parse(readFileSync(path, "utf8"));
  if (pkg.version !== expected) {
    fail(`${path} version is ${pkg.version}, expected ${expected}`);
  }
}

function assertChangelog(expected) {
  const text = readFileSync("CHANGELOG.md", "utf8");
  if (!text.includes(`## [${expected}]`)) {
    fail(`CHANGELOG.md is missing ## [${expected}]`);
  }
}

function assertReleaseNotes() {
  if (!existsSync("RELEASE_NOTES.md")) fail("RELEASE_NOTES.md is missing");
  const text = readFileSync("RELEASE_NOTES.md", "utf8");
  if (!/^# v\d+\.\d+\.\d+/m.test(text)) fail("RELEASE_NOTES.md must start with a version heading");
}

function assertNoTag(tag) {
  const tags = execFileSync("git", ["tag", "--list", tag], { encoding: "utf8" }).trim();
  if (tags) fail(`Tag already exists: ${tag}`);
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
