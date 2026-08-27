# Language Policy

Chinese is the primary documentation language for this repository.

The project still keeps English coverage where it materially helps open-source adoption:

- `README.en.md`
- GitHub issue forms
- pull request template
- `CONTRIBUTING.md`
- `SECURITY.md`
- `SUPPORT.md`
- release notes
- deployment-critical summaries

## Translation Priority

Translate docs in this order when English coverage becomes necessary:

1. `docs/deployment.md`
2. `docs/ai-agent-install.md`
3. `docs/testing.md`
4. `docs/troubleshooting.md`
5. `docs/product-scope.md`

Avoid translating every document by default. Stale translated docs are worse than a smaller set of accurate docs.

## Writing Rule

When behavior changes, update the primary Chinese doc first. Then update the English landing or contributor surface only if the change affects installation, deployment, support, security, release, or contribution workflows.
