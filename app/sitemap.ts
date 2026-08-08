import { MetadataRoute } from "next";
import { getBlogPosts } from "./lib/posts";
import { getWorkCaseStudies } from "./lib/case-studies";
import { workItems } from "./work/work-data";
import { metaData } from "./config";

const BaseUrl = metaData.baseUrl.endsWith("/")
  ? metaData.baseUrl
  : `${metaData.baseUrl}/`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const today = new Date().toISOString().split("T")[0];

  let blogs = getBlogPosts().map((post) => ({
    url: `${BaseUrl}blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  // Work pages exist for both MDX case studies and work-data entries,
  // mirroring generateStaticParams in work/[slug].
  const workSlugs = Array.from(
    new Set([
      ...getWorkCaseStudies().map((s) => s.slug),
      ...workItems.map(
        (p) => p.slug || p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
      ),
    ])
  );
  let work = workSlugs.map((slug) => ({
    url: `${BaseUrl}work/${slug}`,
    lastModified: today,
  }));

  let routes = ["", "about", "blog", "work", "photos"].map((route) => ({
    url: `${BaseUrl}${route}`,
    lastModified: today,
  }));

  return [...routes, ...blogs, ...work];
}
