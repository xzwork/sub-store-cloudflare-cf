import assert from "node:assert/strict";
import test from "node:test";

import { createQuickSetup, parseRemoteSourceUrls } from "../lib/install-setup.mjs";

test("parseRemoteSourceUrls accepts HTTP URLs and removes duplicates", () => {
  assert.deepEqual(
    parseRemoteSourceUrls("https://one.example/sub\nhttps://two.example/sub,https://one.example/sub"),
    ["https://one.example/sub", "https://two.example/sub"],
  );
});

test("parseRemoteSourceUrls rejects unsupported protocols", () => {
  assert.throws(() => parseRemoteSourceUrls("file:///tmp/sub"), /HTTP or HTTPS/);
});

test("createQuickSetup creates a conservative daily collection", () => {
  const setup = createQuickSetup({
    workerName: "my-sub-store",
    adminHostname: "https://admin.example.com/path",
    sourceUrls: ["https://airport.example/sub"],
  });

  assert.equal(setup.deployment.workerName, "my-sub-store");
  assert.equal(setup.deployment.adminHostname, "admin.example.com");
  assert.equal(setup.sources.length, 1);
  assert.deepEqual(setup.sources[0].filterPresetIds, ["clean-provider-nodes"]);
  assert.deepEqual(setup.collections[0].sourceIds, []);
  assert.deepEqual(setup.collections[0].filterPresetIds, ["dedupe-by-endpoint", "sort-by-name"]);
});

test("createQuickSetup can produce an empty web-configured install", () => {
  const setup = createQuickSetup();
  assert.deepEqual(setup.sources, []);
  assert.deepEqual(setup.collections, []);
  assert.equal(setup.deployment.workerName, "sub-store-cloudflare");
});
