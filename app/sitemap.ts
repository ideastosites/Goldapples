import type { MetadataRoute } from "next";
import { SITE_URL, seo } from "@/content/seo";
import { getPublishedPosts } from "@/lib/insights-cms";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = Object.values(seo).map((entry) => ({
    url: `${SITE_URL}${entry.path === "/" ? "" : entry.path}`,
    lastModified: new Date(),
    changeFrequency:
      entry.path === "/" || entry.path === "/insights"
        ? ("weekly" as const)
        : ("monthly" as const),
    priority: entry.path === "/" ? 1 : 0.8,
  }));

  const articleRoutes = getPublishedPosts().map((post) => ({
    url: `${SITE_URL}/insights/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes];
}
