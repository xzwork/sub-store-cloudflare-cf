-- Keep the code-owned default collection on the vendored powerfullz rules.
-- Only migrate the untouched historical default; custom template choices remain unchanged.
UPDATE collections
SET template_id = 'powerfullz-override-rules',
    updated_at = CAST(strftime('%s', 'now') AS INTEGER) * 1000
WHERE id = 'daily'
  AND template_id = 'acl4ssr-mihomo';

-- Built-in templates are code-owned and must not be shadowed by old D1 rows.
DELETE FROM templates WHERE id = 'powerfullz-override-rules';
