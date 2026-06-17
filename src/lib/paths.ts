const BASE = import.meta.env.BASE_URL;

export function withBase(path = ""): string {
  // Normalize BASE_URL to always end with exactly one trailing slash
  const base = BASE.endsWith("/") ? BASE : BASE + "/";
  // Strip leading slash from path to avoid double slash
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return base + normalizedPath;
}