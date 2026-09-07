export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL ?? "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (base === "/") return normalized;
  return `${base.replace(/\/$/, "")}${normalized}`;
}
