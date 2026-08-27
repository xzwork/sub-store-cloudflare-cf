# Governance

Sub-Store Cloudflare is maintainer-led. The project optimizes for a small Cloudflare-native deployment that ordinary users can run quickly.

## Decision Rules

Product decisions start from [docs/product-scope.md](docs/product-scope.md). A change is likely to fit when it improves one of these workflows:

- sources
- collections
- filters
- templates
- preview
- backup / restore
- download output
- deployment and agent installation

Changes that require new platform systems such as R2, KV, Durable Objects, Queues, Cron, file hosting, sync providers, sharing, archive/history, script runtime, log panels, or artifact management are outside the default scope.

## Maintainer Workflow

- `main` is the release branch.
- Maintainer releases are committed directly to `main`.
- The upstream repository does not use GitHub Actions, Dependabot, or GitHub-hosted CI/CD.
- Release validation is local: `pnpm run check:release` and `pnpm run deploy:dry-run`.
- Security reports use private vulnerability reporting when available. Do not disclose secrets or private deployment data in public issues.

## Contribution Workflow

Contributors may open pull requests, but maintainers decide whether a change fits the product boundary. Pull requests should include:

- what changed
- why it changed
- how it was tested locally
- any product-scope tradeoff

If a proposal is outside the current product scope, it can still be discussed, but it should not be implemented until the project boundary is explicitly changed.

## Language

Chinese is the primary documentation language. English is maintained for the public landing surface, contributor intake, release-critical guidance, and deployment-critical guidance. See [docs/language-policy.md](docs/language-policy.md).
