# Sub-Store Cloudflare v1.1 Deployment Experience Design

## Goal

Make a safe first deployment understandable and achievable without prior Wrangler or D1 knowledge, while preserving the existing Cloudflare-native architecture and the Agent/CLI seeded-install path.

The release must improve the complete path from the repository landing page to a working client subscription:

1. choose an install path;
2. deploy the Worker and D1 database;
3. open the admin UI safely;
4. create or import a source and collection;
5. copy a client download URL;
6. understand how to upgrade later.

## Non-goals

- No second backend, external installer service, Pages project, KV, R2, Durable Objects, Queues, or Cron.
- No browser-side secret generation service or third-party token generator.
- No automatic upstream code mutation inside deployed Workers.
- No replacement of the existing JSON seed contract used by local AI Agents.

## Install paths

### Deploy to Cloudflare

This remains the default for ordinary users. The repository continues to expose the official Cloudflare deployment button, root `wrangler.jsonc`, root `build` and `deploy` scripts, automatic D1 provisioning, and two required Worker Secrets.

The repository root must not contain a `.dev.vars.example` that gives the Cloudflare form public placeholder values for required secrets. Local development keeps `cloudflare/.dev.vars.example`; the Deploy form must show required secret fields without a usable public default.

The README will describe the path as three steps: generate two tokens, open the Deploy button, then use Cloudflare's resulting Worker URL. It will also state that Cloudflare imports a repository copy and that upstream releases are not automatically merged into that copy.

### Human CLI quick install

`pnpm run install:cloudflare` remains the main command. When the private setup file already exists, behavior stays compatible.

When the setup file is missing:

- an interactive terminal runs a small built-in setup wizard;
- a non-interactive Agent run creates the example file and stops with exact instructions, preventing an accidental empty production deployment;
- `--quick` creates a safe empty configuration and continues, for users who want to configure everything in the web UI.

The wizard asks only for deployment names/domains and optional remote subscription URLs. It creates a default `daily` collection when sources are supplied, applies conservative cleanup/dedupe/sort presets, and generates tokens locally when they are absent.

### Agent seeded install

Agents continue to write `config/agent-setup.local.json` and run the same installer. Existing schema, presets, personal build-time scripts, D1 reuse, secret persistence, migrations, seed import, HTTP verification, privacy checks, and resume behavior remain supported.

## Cross-platform tokens

Add `pnpm run tokens:generate`, backed by Node.js `crypto.randomBytes`, so Windows, macOS, and Linux users receive both required secret assignments without depending on OpenSSL. Documentation may retain OpenSSL as an alternative, but the project-owned command is primary.

The generated values are printed once and are never written to tracked files. The CLI installer continues to save generated deployment tokens only in the ignored local setup file for safe resume.

## Admin onboarding

When the admin API reports zero sources, the main management page shows a compact first-run card:

1. add the first Source;
2. create a Collection;
3. copy a subscription link.

The card uses existing source and collection actions rather than introducing a separate data flow. It disappears after a source exists and does not block experienced users or restored configurations.

## Documentation structure

The root README becomes a landing page rather than the complete manual:

- product sentence and compatibility/free-plan positioning;
- Deploy button;
- three-step quickest install;
- install-path decision table;
- first five minutes after deployment;
- concise capability summary;
- links to detailed documentation.

Detailed material moves to or is consolidated in:

- `docs/quick-start.md` for first deployment and first subscription;
- `docs/deployment.md` for all deployment paths and custom domains;
- `docs/upgrading.md` for Deploy Button copies, CLI installs, D1 migrations, backup, and rollback;
- `docs/troubleshooting.md` for path-specific failures;
- `docs/ai-agent-install.md`, `AGENTS.md`, and `agent/SKILL.md` for Agent behavior.

Chinese remains the primary documentation. README English receives equivalent installation, security, and upgrade information.

## Upgrade contract

The documentation must distinguish code upgrades from D1 data:

- D1 data and Worker Secrets are retained when the same Worker configuration and database are reused.
- CLI installs update code with `git pull`, then rerun `pnpm run install:cloudflare` or the documented migration/deploy commands.
- Deploy Button repository copies do not automatically receive upstream commits. Users add the upstream remote or merge a release in their repository, then let Workers Builds redeploy.
- Back up configuration before major upgrades.
- Never advise creating a second Worker/D1 deployment as the default upgrade path.

## Automated checks

Add a deployment-experience check to the release gate. It verifies:

- no root `.dev.vars.example` can prefill public secret placeholders;
- root Wrangler declares both required secrets and D1;
- package scripts include build, deploy, installer, token generation, and deployment-experience checks;
- README contains the official Deploy button, quick-start link, upgrade link, and cross-platform token command;
- the installer exposes quick, interactive, and non-interactive missing-config behavior.

Installer helper logic receives direct Node tests for quick setup generation, URL parsing, default collection creation, and non-secret output structure.

## Error handling and privacy

- A missing Cloudflare login still stops with the exact Wrangler login and resume commands.
- A non-interactive install without private setup never deploys example subscription URLs.
- Public docs and examples never contain usable admin/download tokens, private D1 IDs, subscription URLs, or node URIs.
- Generated tokens are not included in automated test output, release logs, or committed fixtures.
- HTTP verification remains mandatory before the installer reports success.

## Release validation

The v1.1.0 release requires:

- installer helper tests;
- existing Worker/D1 and frontend checks;
- locale checks and production frontend build;
- deploy-experience and documentation checks;
- `check:release` and deployment dry-run;
- live Deploy form verification that required secrets are blank;
- production deployment and public-domain isolation checks;
- clean worktree with `main == origin/main` before tagging.
