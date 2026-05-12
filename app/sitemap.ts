import type { MetadataRoute } from "next";
import { sitePageUrl } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
  "/",
  "/about-dr-narayan",
  "/opportunities",
  "/publications",
  "/news",
  "/team",
  "/resources",
  "/research-areas",
];

/** Keep in sync with `app/(pages)/news/[id]/page.tsx` `newsData` keys. */
const newsIds = ["1"];

export default function sitemap(): MetadataRoute.Sitemap {
  const main: MetadataRoute.Sitemap = routes.map((path) => ({
    url: sitePageUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));

  const articles: MetadataRoute.Sitemap = newsIds.map((id) => ({
    url: sitePageUrl(`/news/${id}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...main, ...articles];
}
