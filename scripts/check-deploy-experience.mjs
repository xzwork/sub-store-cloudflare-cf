import { existsSync, readFileSync } from "node:fs";

const findings = [];
const read = (path) => readFileSync(path, "utf8");
const parse = (path) => JSON.parse(read(path));

if (existsSync(".dev.vars.example")) {
  findings.push("root .dev.vars.example must not exist because Deploy to Cloudflare may prefill public secret values");
}
if (!existsSync("cloudflare/.dev.vars.example")) {
  findings.push("cloudflare/.dev.vars.example is required for local development");
}

const wrangler = parse("wrangler.jsonc");
const requiredSecrets = new Set(wrangler?.secrets?.required || []);
for (const secret of ["SUB_STORE_ADMIN_TOKEN", "SUB_STORE_PUBLIC_DOWNLOAD_TOKEN"]) {
  if (!requiredSecrets.has(secret)) findings.push(`wrangler.jsonc must require ${secret}`);
}
if (!Array.isArray(wrangler.d1_databases) || !wrangler.d1_databases.some((binding) => binding.binding === "DB")) {
  findings.push("wrangler.jsonc must declare the DB D1 binding");
}

const pkg = parse("package.json");
for (const script of [
  "build",
  "deploy",
  "install:cloudflare",
  "install:quick",
  "tokens:generate",
  "check:installer",
  "check:deploy-experience",
]) {
  if (!pkg.scripts?.[script]) findings.push(`package.json is missing script ${script}`);
}

const installer = read("scripts/install-cloudflare.mjs");
for (const marker of ["--quick", "--non-interactive", "process.stdin.isTTY", "createQuickSetup"]) {
  if (!installer.includes(marker)) findings.push(`installer is missing ${marker} behavior`);
}

for (const path of ["README.md", "README.en.md"]) {
  const content = read(path);
  for (const marker of [
    "https://deploy.workers.cloudflare.com/",
    "tokens:generate",
    "docs/quick-start.md",
    "docs/upgrading.md",
  ]) {
    if (!content.includes(marker)) findings.push(`${path} is missing ${marker}`);
  }
}

if (findings.length > 0) {
  console.error(findings.map((finding) => `- ${finding}`).join("\n"));
  process.exit(1);
}

console.log("Deployment experience scan passed.");
