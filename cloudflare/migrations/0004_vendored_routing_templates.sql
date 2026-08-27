-- Move only known historical defaults to the current code-owned default.
-- User-selected custom templates remain unchanged.
UPDATE collections
SET template_id = 'aethersailor-standard',
    updated_at = CAST(strftime('%s', 'now') AS INTEGER) * 1000
WHERE id = 'daily'
  AND template_id IN ('acl4ssr-mihomo', 'powerfullz-override-rules');

-- Built-in templates are code-owned and must not be shadowed by D1 rows.
DELETE FROM templates WHERE id = 'powerfullz-override-rules';
