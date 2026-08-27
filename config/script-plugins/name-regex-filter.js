function filter(proxies) {
  const { pattern = "", keep = true } = $arguments;
  const expression = new RegExp(String(pattern));
  return proxies.map((proxy) => keep ? expression.test(proxy.name) : !expression.test(proxy.name));
}
