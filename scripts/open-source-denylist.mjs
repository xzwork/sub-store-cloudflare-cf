import { existsSync, readFileSync } from "node:fs";

export const skippedCurrentFiles = new Set([
  "scripts/check-open-source.mjs",
  "scripts/check-git-history.mjs",
  "scripts/open-source-denylist.mjs",
  "cloudflare/pnpm-lock.yaml",
]);

export const skippedHistoryPaths = [
  "scripts/check-open-source.mjs",
  "scripts/check-git-history.mjs",
  "scripts/open-source-denylist.mjs",
  "cloudflare/pnpm-lock.yaml",
];

export const denyPatterns = [
  [/\/Users\/[^/ \t"'`]+/g, "local absolute path"],
  [/BEGIN (RSA |OPENSSH |EC |DSA |)PRIVATE KEY/gi, "private key"],
  [/github_pat_[A-Za-z0-9_]+/g, "GitHub fine-grained token"],
  [/ghp_[A-Za-z0-9_]+/g, "GitHub token"],
  [/sk-[A-Za-z0-9]{20,}/g, "API token-like value"],
  [/AKIA[0-9A-Z]{16}/g, "AWS access key"],
  [/ASIA[0-9A-Z]{16}/g, "AWS temporary access key"],
  ...loadLocalDenyPatterns(),
];

function loadLocalDenyPatterns() {
  const rawValues = [
    ...readDenylistFile(".open-source-denylist.local"),
    ...(process.env.OPEN_SOURCE_DENYLIST || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
  ];

  return rawValues.map((value) => [new RegExp(escapeRegExp(value), "gi"), "local denylist value"]);
}

function readDenylistFile(path) {
  if (!existsSync(path)) return [];
  return readFileSync(path, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
