# Security Policy

## Supported Versions

The latest release is supported. Older releases may receive fixes only when the fix is low-risk and easy to backport.

## Reporting a Vulnerability

Do not open a public issue for secrets, auth bypasses, data exposure, or deployment credential problems.

Use GitHub private vulnerability reporting if it is available on the repository. If it is not available, contact the maintainer through the GitHub profile for `realchendahuang` and include:

- affected version or commit
- impact
- reproduction steps
- whether any subscription URL, token, D1 database, or deployment hostname may be exposed

Please redact live subscription URLs, node URIs, admin tokens, download tokens, and private Cloudflare identifiers.

## Deployment Secrets

The app uses:

- `SUB_STORE_ADMIN_TOKEN` for the admin UI and `/api/*`.
- `SUB_STORE_PUBLIC_DOWNLOAD_TOKEN` for `/download/*`.

Use long random values, for example:

```bash
openssl rand -base64 32
```

Rotate both tokens if they appear in logs, screenshots, issues, commits, or chat transcripts.
