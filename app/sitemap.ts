import type { MetadataRoute } from "next"
import { getAllBlogPostSlugs } from "@/lib/blog-posts"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dryon.com.br"

  const blogPostUrls = getAllBlogPostSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/home`, changeFrequency: "weekly", priority: 0.9 },
    ...blogPostUrls,
    { url: `${base}/catalogo`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/sobre`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/projetos`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contato`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/quiz`, changeFrequency: "monthly", priority: 0.4 },
  ]
}
