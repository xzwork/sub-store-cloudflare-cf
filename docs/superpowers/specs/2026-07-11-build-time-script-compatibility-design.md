# Build-time JavaScript compatibility design

Status: implemented in v0.3.0.

Date: 2026-07-11

## Decision

Sub-Store Cloudflare will pursue JavaScript compatibility through build-time bundled scripts, not by evaluating script text stored in D1 at request time.

The Worker will continue to use the existing action/filter pipeline for ordinary browser-managed transformations. Advanced scripts will be JavaScript modules included in the Worker bundle by Wrangler. D1 will store only a script identifier, arguments, and its position in the processing pipeline.

This preserves the current Workers Static Assets + Worker API + D1 + Worker Secrets architecture and keeps the default deployment viable on the Cloudflare Workers Free plan.

## Why this belongs in the product

Sub-Store Cloudflare is intentionally smaller than upstream Sub-Store, but a smaller product is still valuable when it gives users a reliable, serverless way to aggregate, transform, preview, and download subscriptions.

Script filters and operators directly improve the existing node-processing loop. They are different from file hosting, sharing, archives, sync providers, or a script marketplace. A bounded script compatibility layer therefore fits the product, as long as it does not turn the Worker into a general-purpose code-execution platform.

## Cloudflare constraints

The design treats the Workers Free limits as product requirements rather than deployment trivia:

- 10 ms CPU time per invocation.
- 128 MB memory per isolate.
- 3 MB compressed Worker size.
- 50 external subrequests per invocation.

Cloudflare Workers also disallow runtime `eval()` and `new Function()`. A startup-only compatibility flag does not make D1-backed, browser-edited scripts executable during requests.

Wrangler-bundled JavaScript modules execute as normal Worker code, so build-time inclusion avoids runtime evaluation and avoids shipping an additional JavaScript interpreter. The design must still leave headroom for subscription parsing, existing filters, rendering, and D1 access.

References:

- [Cloudflare Workers limits](https://developers.cloudflare.com/workers/platform/limits/)
- [Cloudflare Workers JavaScript standards](https://developers.cloudflare.com/workers/runtime-apis/web-standards/)
- [Wrangler bundling](https://developers.cloudflare.com/workers/wrangler/bundling/)

## Supported deployment paths

### Built-in scripts

Built-in scripts live in the public repository, are reviewed like application code, and are included in ordinary Deploy to Cloudflare and CLI installs. The admin UI may list them after the Worker exposes their code-owned metadata.

Every built-in script must pass compatibility, bundle-size, Worker integration, and deployed Free-plan performance checks before release.

### Personal scripts

Personal scripts live under a gitignored local path such as `config/scripts.local/`. The Agent/CLI installer generates a static script registry before building and deploying the Worker.

Changing a personal script requires redeployment. This is intentional: arbitrary script text will not be pasted into the admin UI, stored in D1, or fetched from a remote URL for execution.

The Deploy to Cloudflare button cannot import private local scripts. Users who need personal scripts use the Agent/CLI installer or maintain their own repository copy.

## Script contract

The first compatibility target is upstream Sub-Store's two node-processing contracts:

```js
function filter(proxies, targetPlatform, context) {
  return proxies.map((proxy) => proxy.name.includes("HK"));
}
```

```js
function operator(proxies, targetPlatform, context) {
  const { fingerprint } = $arguments;
  return proxies.map((proxy) => ({
    ...proxy,
    "tls-fingerprint": fingerprint,
  }));
}
```

The build step wraps a compatible source file in a generated module. The wrapper supplies approved compatibility values and invokes the declared `filter` or `operator` directly. It does not use `eval()` or `new Function()`.

The initial context includes:

- `proxies`: cloned normalized proxy objects.
- `targetPlatform`: the normalized output target.
- `context`: source/collection identifiers and request-safe metadata.
- `$arguments`: JSON-compatible parameters saved with the action.
- `$options`: bounded request options already supported by the download route.
- `ProxyUtils`: a documented, deliberately small compatibility subset.

The return contract is strict:

- A filter returns a boolean array with the same length as `proxies`.
- An operator returns a valid proxy array.
- `undefined`, malformed arrays, invalid proxy objects, and unexpected mutations fail validation with the script ID in the error.

## Compatibility levels

### Level A: Free-verified

Level A is the default promise:

- synchronous filters and operators;
- ordinary JavaScript array/object/string/regex operations;
- `$arguments`, `$options`, target platform, and bounded context;
- a small tested `ProxyUtils` subset;
- no external network request, sleep, file API, module loading, persistence, or artifact generation.

Built-in scripts must be Level A before the UI advertises them as Free-compatible.

### Level B: Build-compatible

Level B personal scripts compile and deploy as native Worker modules but are not covered by the Free-plan performance promise. They may use asynchronous code or bounded network helpers when the generated registry explicitly grants that capability.

The installer and documentation must warn that a personal script is trusted application code, not sandboxed user input. It can increase CPU time, bundle size, and subrequest use.

### Unsupported

The following upstream behaviors are not compatibility goals for this design:

- runtime script URLs or browser-pasted script text;
- `eval()`, `new Function()`, dynamic `require`, or dynamic module loading;
- Node.js filesystem access;
- persistent-store, file, sync, share, archive, or artifact APIs;
- response transformers and arbitrary configuration-file scripts in the first release;
- scripts that require unrestricted network access or an unbounded number of subrequests;
- a script marketplace.

Unsupported scripts must be reported as unsupported, not silently accepted and partially executed.

## Components

### Script source and manifest

Each script has code plus declarative metadata:

- stable lowercase ID;
- display name and description;
- kind: `filter` or `operator`;
- compatibility level;
- parameter schema;
- required compatibility helpers;
- whether bounded network access is requested.

The manifest is code-owned. D1 stores references to manifest entries, not script bodies.

### Registry generator

Before `wrangler deploy`, a generator discovers built-in and local scripts, validates IDs and metadata, rejects duplicate IDs, creates static imports, and emits one generated registry module.

Generated local registry output remains gitignored when it contains personal script paths or code. Release checks generate a public built-in-only registry in a temporary directory and verify reproducibility.

### Compatibility wrapper

The wrapper adapts the upstream function shape to the current `FilterRule` pipeline. It clones inputs, supplies only the approved context, awaits the result when necessary, validates output, and returns normalized proxies or a boolean selection mask.

Compatibility helpers are individually imported so the bundle does not include the full upstream utility surface or all of lodash.

### Worker API and UI

A code-owned read endpoint returns script metadata, never source code. The action editor can select an available script and render fields from its parameter schema.

Until this UI exists, scripts can be referenced through validated Agent/CLI configuration. Documentation must not advertise browser-managed script support before the UI and API ship.

## Data flow

```text
script source + metadata
  -> build-time validation and static registry generation
  -> Wrangler bundles modules into Worker
  -> D1 stores script ID + arguments in source/collection filters
  -> subscription request loads the referenced registry entry
  -> wrapper clones inputs and invokes filter/operator
  -> output validation
  -> remaining filters and target renderer
```

## Free-plan performance gates

The release gate for built-in scripts must enforce all of the following:

- compressed Worker upload remains below 2.5 MB, preserving headroom below Cloudflare's 3 MB Free limit;
- the full subscription request, not only the script function, stays below an 8 ms CPU target in the deployed benchmark fixture;
- fixtures cover 100, 500, and 1,000 normalized nodes;
- no built-in Level A script performs external subrequests;
- no more than two script actions per source and two per collection are allowed initially;
- script output uses bounded cloning and validation and cannot increase the node count above the input count in the initial release.

Local unit timings are diagnostic only. The release decision uses a deployed Worker benchmark because local CPU timings do not reproduce Cloudflare accounting exactly.

If the performance gate cannot be met, the feature remains CLI-only experimental or is removed from the Free-compatible set. The project must not quietly change the default requirement to a paid Workers plan.

## Security and failure behavior

Built-in scripts are trusted repository code. Personal scripts are trusted deployment-owner code. Neither is treated as safe untrusted input.

The product will not claim sandboxing. It reduces exposure by refusing runtime script text and remote script loading, limiting the compatibility surface, validating outputs, and keeping built-in scripts under normal code review.

When a script is missing, disabled, invalid, or throws:

- preview returns a structured error containing the script ID and action position;
- download fails explicitly instead of silently emitting an unprocessed subscription;
- no script source, arguments containing secrets, subscription URL, or node URI is written to logs;
- `ignoreFailed` continues to apply to failed subscription sources, not to a failed transformation step.

## Testing

The implementation requires:

- generator tests for manifests, duplicate IDs, invalid metadata, and deterministic output;
- compatibility fixtures based on representative upstream filters and operators;
- wrapper tests for `$arguments`, `$options`, target platform, cloning, async results, and invalid output;
- Worker integration tests using D1 records that reference built-in scripts;
- frontend tests for metadata-driven parameter forms once the UI is added;
- bundle-size checks and deployed Free-plan CPU benchmarks;
- privacy checks confirming personal script files and generated local registries are untracked.

## Delivery slices

1. Build-time registry, strict wrapper, one simple built-in operator, CLI configuration, tests, and performance proof.
2. Upstream compatibility fixtures, bounded `ProxyUtils`, script metadata API, and additional Free-verified built-ins.
3. Admin UI selector and parameter editor.
4. Optional Level B capability grants only after Level A remains comfortably within Free-plan limits.

Each slice must leave the normal no-script deployment working. Script support is additive and must not become required to use sources, collections, filters, templates, previews, or downloads.

## Documentation promise

Until implementation is complete, public documentation describes this as an accepted design or planned capability. After release, documentation must state exactly which compatibility level, helpers, and deployment paths are available.

The project should describe itself as a Cloudflare-native core edition rather than a full upstream replacement. Missing platform features do not erase the value of a small, free, serverless subscription pipeline, but the feature boundary must be visible before users deploy it.
