const DEFAULT_WORKER_NAME = "sub-store-cloudflare";
const DEFAULT_D1_NAME = "sub-store-cloudflare";

export function parseRemoteSourceUrls(input) {
  const urls = String(input || "")
    .split(/[\s,]+/)
    .map((value) => value.trim())
    .filter(Boolean);

  const unique = [];
  const seen = new Set();
  for (const value of urls) {
    let url;
    try {
      url = new URL(value);
    } catch {
      throw new Error(`Invalid subscription URL: ${value}`);
    }
    if (!['http:', 'https:'].includes(url.protocol)) {
      throw new Error(`Subscription URL must use HTTP or HTTPS: ${value}`);
    }
    if (!seen.has(url.toString())) {
      seen.add(url.toString());
      unique.push(url.toString());
    }
  }
  return unique;
}

export function createQuickSetup(input = {}) {
  const sourceUrls = Array.isArray(input.sourceUrls) ? input.sourceUrls : parseRemoteSourceUrls(input.sourceUrls);
  const sources = sourceUrls.map((url, index) => {
    const hostname = new URL(url).hostname.replace(/^www\./, "");
    return {
      id: uniqueSourceId(hostname, index),
      name: hostname || `Source ${index + 1}`,
      type: "remote",
      url,
      enabled: true,
      filterPresetIds: ["clean-provider-nodes"],
      filters: [],
      meta: { tag: ["provider"] },
    };
  });

  return {
    deployment: {
      workerName: cleanName(input.workerName, DEFAULT_WORKER_NAME),
      d1DatabaseName: cleanName(input.d1DatabaseName, DEFAULT_D1_NAME),
      adminHostname: cleanHostname(input.adminHostname),
      downloadHostname: cleanHostname(input.downloadHostname),
      downloadTargets: ["mihomo", "sing-box", "uri"],
    },
    sources,
    collections: sources.length > 0 ? [{
      id: "daily",
      name: "Daily",
      sourceIds: [],
      templateId: "acl4ssr-mihomo",
      ignoreFailed: true,
      filterPresetIds: ["dedupe-by-endpoint", "sort-by-name"],
      filters: [],
      meta: { tag: ["default"] },
    }] : [],
    templates: [],
  };
}

function uniqueSourceId(hostname, index) {
  const base = String(hostname || "source")
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 54) || "source";
  return `${base}-${index + 1}`.slice(0, 64);
}

function cleanName(value, fallback) {
  const text = String(value || "").trim();
  return text || fallback;
}

function cleanHostname(value) {
  return String(value || "")
    .trim()
    .replace(/^https?:\/\//i, "")
    .replace(/\/.*$/, "");
}
