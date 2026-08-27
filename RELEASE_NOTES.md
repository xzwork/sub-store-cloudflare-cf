# v1.1.0

Safer and faster first deployment for Sub-Store Cloudflare.

## Highlights

- Fixes a Deploy to Cloudflare security footgun where public placeholder values from the root `.dev.vars.example` could appear as already-filled required secrets.
- Rebuilds the Chinese and English README files around a three-step Deploy Button path and a clear install-method decision table.
- Adds `pnpm run tokens:generate` for cross-platform admin and download token generation.
- Adds a guided `pnpm run install:cloudflare` flow for human terminals.
- Adds `pnpm run install:quick` for an intentional empty deployment configured later in the browser.
- Keeps Agent installs safe: a missing private setup in a non-interactive environment stops before example URLs can be deployed.
- Adds a first-run admin checklist for Source → Collection → client link.
- Adds dedicated quick-start and upgrade guides covering repository copies, Workers Builds, D1 migrations, backup, verification, and rollback.
- Adds installer helper tests and a deployment-experience release gate.

## Upgrade

Keep the existing Worker, D1 database, and Worker Secrets. Update the repository and deploy normally:

```bash
git pull --ff-only
pnpm run install:cloudflare
```

Deploy Button repository copies do not receive upstream releases automatically. See `docs/upgrading.md` before merging upstream into a deployed copy.

No new D1 migration is required for v1.1.0.
