function operator(proxies) {
  const { fingerprint = "chrome" } = $arguments;
  return proxies.map((proxy) => ({
    ...proxy,
    "tls-fingerprint": String(fingerprint),
  }));
}
