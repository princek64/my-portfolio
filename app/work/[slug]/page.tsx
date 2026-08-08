import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CustomMDX } from "app/components/mdx";
import { getWorkCaseStudies } from "app/lib/case-studies";
import { workItems } from "../work-data";

function getFallbackProject(slug: string) {
  return workItems.find((p) => {
    const pSlug = p.slug || p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return pSlug === slug;
  });
}

export async function generateStaticParams() {
  const mdxSlugs = getWorkCaseStudies().map((s) => ({ slug: s.slug }));
  const dataSlugs = workItems.map((p) => ({
    slug: p.slug || p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  }));
  
  const allSlugs = [...mdxSlugs, ...dataSlugs];
  const uniqueSlugs = Array.from(new Set(allSlugs.map((s) => s.slug))).map((slug) => ({ slug }));
  return uniqueSlugs;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const study = getWorkCaseStudies().find((s) => s.slug === params.slug);
  if (study) {
    return {
      title: study.metadata.title,
      description: study.metadata.description,
    };
  }

  const fallback = getFallbackProject(params.slug);
  if (fallback) {
    return {
      title: fallback.title,
      description: fallback.description,
    };
  }
}

export default function WorkDetail({
  params,
}: {
  params: { slug: string };
}) {
  let study = getWorkCaseStudies().find((s) => s.slug === params.slug);
  const fallback = getFallbackProject(params.slug);
  
  if (!study) {
    if (!fallback) notFound();
    
    study = {
      slug: params.slug,
      metadata: {
        title: fallback.title,
        description: fallback.description,
        year: fallback.year.toString(),
        url: fallback.url || undefined,
        role: fallback.role,
        tech: fallback.capabilities.join(", "),
      },
      content: fallback.description,
    };
  } else if (fallback && !study.metadata.url) {
    study.metadata.url = fallback.url || undefined;
  }

  const { metadata, content } = study;
  const techTags = metadata.tech?.split(",").map((t) => t.trim()) ?? [];
  
  // also merge tools/tags from design case studies if they exist in the metadata
  let additionalTags: string[] = [];
  if ((metadata as any).tools) {
    additionalTags = (metadata as any).tools.split("·").map((t: string) => t.trim());
  } else if ((metadata as any).tags) {
    const cleanTags = (metadata as any).tags.replace(/[\[\]]/g, "");
    additionalTags = cleanTags.split(",").map((t: string) => t.trim()).filter(Boolean);
  }

  const allTags = Array.from(new Set([...techTags, ...additionalTags])).filter(Boolean);

  return (
    <section className="animate-page-enter">
      <Link
        href="/work"
        className="inline-flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-10 group"
      >
        <span className="inline-block transition-transform group-hover:-translate-x-0.5 duration-150">
          ←
        </span>
        Work
      </Link>

      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 p-6 mb-10">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 leading-snug">
            {metadata.title}
          </h1>
          <span className="text-neutral-500 dark:text-neutral-500 tabular-nums text-sm shrink-0 mt-0.5">
            {metadata.year}
          </span>
        </div>

        {(metadata.role || metadata.status) && (
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            {metadata.role}
            {metadata.role && metadata.status && (
              <span className="mx-2 text-neutral-300 dark:text-neutral-700">·</span>
            )}
            {metadata.status && (
              <span className="text-neutral-400 dark:text-neutral-500">
                {metadata.status}
              </span>
            )}
          </p>
        )}

        {metadata.url && (
          <div className="mb-4">
            <a
              href={metadata.url}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <span>{fallback?.linkLabel || "Visit Live Project"}</span>
              <span className="text-xs" aria-hidden="true">↗</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        )}

        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {allTags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={content} />
      </article>

      <hr className="section-divider mt-12" />
      <Link
        href="/work"
        className="inline-flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mt-6 group"
      >
        <span className="inline-block transition-transform group-hover:-translate-x-0.5 duration-150">
          ←
        </span>
        Back to Work
      </Link>
    </section>
  );
}
