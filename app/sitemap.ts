import { MetadataRoute } from "next";
import { getBlogPosts } from "./lib/posts";
import { getWorkCaseStudies } from "./lib/case-studies";
import { caseStudyItems, getWorkSlug } from "./work/work-data";
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

  const mdxSlugs = new Set(getWorkCaseStudies().map((s) => s.slug));
  const workSlugs = caseStudyItems
    .map((p) => getWorkSlug(p))
    .filter((slug) => mdxSlugs.has(slug));
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
