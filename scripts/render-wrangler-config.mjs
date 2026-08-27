import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const args = process.argv.slice(2).filter((arg) => arg !== "--");
const options = parseOptions(args);
const [inputArg = "config/agent-setup.local.json", outputArg = "cloudflare/wrangler.deploy.local.jsonc"] = options.positionals;
const existingConfig = readJsonFile(outputArg);
const input = readSetupInput(inputArg, existingConfig);
const deployment = input.deployment && typeof input.deployment === "object" ? input.deployment : {};

const databaseId = options.databaseId
  || process.env.CLOUDFLARE_D1_DATABASE_ID
  || deployment.d1DatabaseId
  || existingConfig?.d1_databases?.[0]?.database_id;
if (!databaseId) {
  throw new Error("D1 database id is required. Pass --database-id <id> or set CLOUDFLARE_D1_DATABASE_ID.");
}

const workerName = stringValue(deployment.workerName, "sub-store-cloudflare");
const databaseName = stringValue(deployment.d1DatabaseName, "sub-store-cloudflare");
const downloadHostname = stringValue(deployment.downloadHostname, "");
const adminHostname = stringValue(deployment.adminHostname, "");
const appName = stringValue(existingConfig?.vars?.SUB_STORE_APP_NAME, "Sub-Store Cloudflare");
const routes = [];

if (adminHostname && !adminHostname.endsWith(".workers.dev")) {
  routes.push({ pattern: adminHostname, custom_domain: true });
}
if (downloadHostname && downloadHostname !== adminHostname && !downloadHostname.endsWith(".workers.dev")) {
  routes.push({ pattern: downloadHostname, custom_domain: true });
}

const config = {
  $schema: "./node_modules/wrangler/config-schema.json",
  name: workerName,
  main: "src/index.ts",
  workers_dev: routes.length === 0,
  compatibility_date: "2026-07-08",
  compatibility_flags: ["nodejs_compat"],
  assets: {
    directory: "../frontend/dist",
    binding: "ASSETS",
    not_found_handling: "single-page-application",
    run_worker_first: true,
  },
  observability: {
    enabled: true,
    head_sampling_rate: 1,
  },
  secrets: {
    required: ["SUB_STORE_ADMIN_TOKEN", "SUB_STORE_PUBLIC_DOWNLOAD_TOKEN"],
  },
  d1_databases: [
    {
      binding: "DB",
      database_name: databaseName,
      database_id: databaseId,
      migrations_dir: "./migrations",
    },
  ],
  vars: {
    SUB_STORE_APP_NAME: appName,
    SUB_STORE_PUBLIC_DOWNLOAD_HOSTS: downloadHostname,
  },
  ...(routes.length > 0 ? { routes } : {}),
};

const outputPath = resolve(outputArg);
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(config, null, 2)}\n`);

console.log(
  JSON.stringify(
    {
      output: outputArg,
      workerName,
      databaseName,
      routes: routes.length,
    },
    null,
    2,
  ),
);

function parseOptions(input) {
  const positionals = [];
  const parsed = {};
  for (let index = 0; index < input.length; index += 1) {
    const item = input[index];
    if (item === "--database-id") {
      parsed.databaseId = input[index + 1];
      index += 1;
      continue;
    }
    positionals.push(item);
  }
  return { ...parsed, positionals };
}

function stringValue(value, fallback) {
  if (typeof value === "string" && value.trim()) return value.trim();
  return fallback;
}

function readJsonFile(path) {
  try {
    return JSON.parse(readFileSync(resolve(path), "utf8"));
  } catch {
    return undefined;
  }
}

function readSetupInput(path, existing) {
  if (existsSync(resolve(path))) return JSON.parse(readFileSync(resolve(path), "utf8"));
  if (!existing) throw new Error(`Setup input is missing: ${path}`);

  const downloadHostname = stringValue(existing?.vars?.SUB_STORE_PUBLIC_DOWNLOAD_HOSTS, "")
    .split(",")
    .map((host) => host.trim())
    .find(Boolean) || "";
  const routeHostnames = Array.isArray(existing.routes)
    ? existing.routes.map((route) => stringValue(route?.pattern, "")).filter(Boolean)
    : [];
  const adminHostname = routeHostnames.find((hostname) => hostname !== downloadHostname) || "";

  console.log(`${path}: missing; preserving deployment values from the existing ignored Wrangler config.`);
  return {
    deployment: {
      workerName: stringValue(existing.name, "sub-store-cloudflare"),
      d1DatabaseName: stringValue(existing?.d1_databases?.[0]?.database_name, "sub-store-cloudflare"),
      adminHostname,
      downloadHostname,
    },
  };
}
