import { cloudflareTest, readD1Migrations } from "@cloudflare/vitest-pool-workers";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [
    cloudflareTest(async () => ({
      main: "./src/index.ts",
      wrangler: { configPath: "./wrangler.jsonc" },
      miniflare: {
        bindings: {
          TEST_MIGRATIONS: await readD1Migrations(`${projectRoot}migrations`),
          SUB_STORE_ADMIN_TOKEN: "test-admin-token",
          SUB_STORE_PUBLIC_DOWNLOAD_TOKEN: "test-download-token",
          SUB_STORE_APP_NAME: "Sub-Store Cloudflare Test",
          SUB_STORE_PUBLIC_DOWNLOAD_HOSTS: "downloads.example.com",
        },
      },
    })),
  ],
  test: {
    setupFiles: ["./test/setup.ts"],
    testTimeout: 15000,
  },
});
