import { MetadataRoute } from "next";
import { getBlogPosts } from "./lib/posts";
import {
  getProjectCaseStudies,
  getDesignCaseStudies,
} from "./lib/case-studies";
import { projects as projectData } from "./projects/project-data";
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

  // Project pages exist for both MDX case studies and project-data entries,
  // mirroring generateStaticParams in projects/[slug]
  const projectSlugs = Array.from(
    new Set([
      ...getProjectCaseStudies().map((s) => s.slug),
      ...projectData.map(
        (p) => p.slug || p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
      ),
    ])
  );
  let projects = projectSlugs.map((slug) => ({
    url: `${BaseUrl}projects/${slug}`,
    lastModified: today,
  }));

  let designs = getDesignCaseStudies().map((study) => ({
    url: `${BaseUrl}design/${study.slug}`,
    lastModified: today,
  }));

  let routes = ["", "about", "blog", "projects", "design", "photos"].map((route) => ({
    url: `${BaseUrl}${route}`,
    lastModified: today,
  }));

  return [...routes, ...blogs, ...projects, ...designs];
}
