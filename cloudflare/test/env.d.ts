import type { D1Migration } from "cloudflare:test";
import type { SubStoreEnv } from "../src/types";

declare global {
  namespace Cloudflare {
    interface Env extends SubStoreEnv {
      TEST_MIGRATIONS: D1Migration[];
    }

    interface GlobalProps {
      mainModule: typeof import("../src/index");
    }
  }
}

export {};
