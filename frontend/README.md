# Frontend

This directory contains the Vue admin UI used by Sub-Store Cloudflare.

The production build is generated into `frontend/dist` and served by the Worker through Cloudflare Workers Static Assets. It is not a separate deployment target.

## Development

```bash
pnpm --dir frontend install
VITE_API_URL=/ pnpm --dir frontend run build
```

For full local development, build the frontend and run the Worker from the repository root:

```bash
pnpm run build:frontend
pnpm run dev
```

## Attribution

The UI is based on the original [sub-store-org/Sub-Store](https://github.com/sub-store-org/Sub-Store) frontend and has been trimmed for this Cloudflare-native edition.
