# Vendored routing templates

These files are local snapshots fetched on 2026-08-27. Every configuration is
exposed as a separate built-in template; the projects' rules are not merged.

- `aethersailor-*` comes from
  [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules)
  and is distributed under CC BY-SA 4.0. See `CC-BY-SA-4.0.txt`.
- `hulter-mihomo` comes from [huLter/Mihomo](https://github.com/huLter/Mihomo)
  and is distributed under GPL-3.0. See `GPL-3.0.txt`.

The snapshots are adapted for Sub-Store Cloudflare: upstream `proxies` and
`proxy-providers` are removed, `use` selectors consume nodes already fetched by
this application, and helper anchors are expanded. Aethersailor's self-hosted
groups select app-provided nodes whose names contain `自建`, `家宽`, `home`,
`private`, `selfhost`, or `🏴‍☠️`.

## Source files

- Aethersailor: all eight regular `Custom_Clash*.yaml` variants plus
  `Custom_Clash_Selfhosted_Manual_Fallback.yaml` and
  `Custom_Clash_Selfhosted_Provider_Fallback.yaml`. The complete reference
  template is documentation, not a selectable distribution variant.
- huLter: `config.yaml` from the repository root.
