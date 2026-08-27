# Maintainers

This file is the maintainer operating checklist for Sub-Store Cloudflare.

## Repository Policy

- Work from `main` unless the maintainer explicitly requests a separate branch.
- Do not add GitHub Actions, Dependabot, or GitHub release automation.
- Keep GitHub Actions disabled at the repository level.
- Keep Issues and Discussions enabled.
- Keep Wiki and Projects disabled unless the maintainer changes the support model.

## Before Merging or Pushing

Run:

```bash
git status --short
pnpm run check:release
pnpm run deploy:dry-run
```

For docs-only changes, `pnpm run check:docs` is the focused check. `check:release` still runs it before release.

Check that local-only files are not staged:

- `config/agent-setup.local.json`
- `cloudflare/agent.seed.local.sql`
- `cloudflare/wrangler.deploy.local.jsonc`
- `.dev.vars`
- `cloudflare/.dev.vars`

Never commit subscription URLs, node URIs, admin tokens, download tokens, private D1 database IDs, or generated seed SQL containing user data.

## Release Checklist

1. Confirm the work fits [docs/product-scope.md](docs/product-scope.md).
2. Update `package.json` and `cloudflare/package.json`.
3. Update `CHANGELOG.md`.
4. Update `RELEASE_NOTES.md`.
5. Run `pnpm run release:prepare -- vX.Y.Z`.
6. Run `pnpm run check:release`.
7. Run `pnpm run deploy:dry-run`.
8. Commit directly to `main`.
9. Tag and push:

```bash
git tag -a vX.Y.Z -m "vX.Y.Z"
git push origin main --tags
```

10. Create the GitHub Release:

```bash
gh release create vX.Y.Z --title "vX.Y.Z" --notes-file RELEASE_NOTES.md
```

## Issue Triage

- `deployment`: Cloudflare button, Agent / CLI installer, Wrangler, D1, or secrets problems.
- `bug`: reproducible product behavior.
- `enhancement`: scoped product improvements.
- `documentation`: docs-only changes.
- `needs-info`: missing reproduction, version, logs, or sanitized diagnostics.
- `scope`: proposal needs a product-boundary decision.
- `maintenance`: repository hygiene, release process, dependency, or tooling work.

Close public issues that contain live subscription URLs, node URIs, tokens, private D1 IDs, or generated seed SQL after asking the author to rotate exposed secrets where needed.
