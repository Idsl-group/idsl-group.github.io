/** Public file path when the app is hosted under a subpath (GitHub Pages project site). */
export function publicFile(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${normalized}` : normalized;
}

export function siteMetadataBase(): URL {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const origin = process.env.NEXT_PUBLIC_SITE_ORIGIN || "";
  if (origin && base) return new URL(`${origin}${base}`);
  if (origin) return new URL(`${origin}/`);
  return new URL("http://localhost:3000");
}
