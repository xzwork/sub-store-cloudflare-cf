CREATE TABLE IF NOT EXISTS app_settings (
  id TEXT PRIMARY KEY,
  value_json TEXT NOT NULL DEFAULT '{}',
  updated_at INTEGER NOT NULL
);

INSERT OR IGNORE INTO collections (
  id,
  name,
  source_ids_json,
  filters_json,
  template_id,
  ignore_failed,
  enabled,
  meta_json,
  created_at,
  updated_at
) VALUES (
  'daily',
  'Daily',
  '[]',
  '[]',
  'acl4ssr-mihomo',
  1,
  1,
  '{}',
  CAST(strftime('%s', 'now') AS INTEGER) * 1000,
  CAST(strftime('%s', 'now') AS INTEGER) * 1000
);

-- Built-in templates are code-owned from v0.2.0 onward. Removing their old
-- database copies ensures every deployment receives template fixes immediately.
DELETE FROM templates
WHERE id IN (
  'mihomo-basic',
  'acl4ssr-mihomo',
  'acl4ssr-mihomo-no-emoji',
  'loyalsoldier-whitelist',
  'loyalsoldier-blacklist',
  'ai-streaming-mihomo'
);
