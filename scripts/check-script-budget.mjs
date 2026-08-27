import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { gzipSync } from "node:zlib";

const FREE_LIMIT_BYTES = 3 * 1024 * 1024;
const RELEASE_BUDGET_BYTES = Math.floor(2.5 * 1024 * 1024);
const outdir = mkdtempSync(join(tmpdir(), "sub-store-script-budget-"));

try {
  const generated = spawnSync("pnpm", ["run", "scripts:generate"], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
  if (generated.status !== 0) fail(generated.stderr || generated.stdout);

  const bundled = spawnSync(
    "pnpm",
    ["--dir", "cloudflare", "exec", "wrangler", "deploy", "--dry-run", "--outdir", outdir, "--config", "../wrangler.jsonc"],
    { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
  );
  if (bundled.status !== 0) fail(bundled.stderr || bundled.stdout);

  const worker = readFileSync(join(outdir, "index.js"));
  const compressedBytes = gzipSync(worker).byteLength;
  if (compressedBytes > RELEASE_BUDGET_BYTES) {
    fail(`Worker gzip size ${compressedBytes} exceeds the ${RELEASE_BUDGET_BYTES} byte release budget`);
  }

  console.log(JSON.stringify({
    compressedBytes,
    releaseBudgetBytes: RELEASE_BUDGET_BYTES,
    freeLimitBytes: FREE_LIMIT_BYTES,
    headroomBytes: FREE_LIMIT_BYTES - compressedBytes,
  }, null, 2));
} finally {
  rmSync(outdir, { recursive: true, force: true });
}

function fail(message) {
  console.error(String(message).trim());
  process.exit(1);
}
