import type { MetadataRoute } from "next";
import { siteMetadataBase } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = siteMetadataBase();
  const local = base.hostname === "localhost";

  if (local) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("sitemap.xml", base).href,
  };
}
