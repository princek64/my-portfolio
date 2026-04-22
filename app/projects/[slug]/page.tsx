import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CustomMDX } from "app/components/mdx";
import { getProjectCaseStudies } from "app/lib/case-studies";

export async function generateStaticParams() {
  return getProjectCaseStudies().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const study = getProjectCaseStudies().find((s) => s.slug === params.slug);
  if (!study) return;
  return {
    title: study.metadata.title,
    description: study.metadata.description,
  };
}

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const study = getProjectCaseStudies().find((s) => s.slug === params.slug);
  if (!study) notFound();

  const { metadata, content } = study!;
  const techTags = metadata.tech?.split(",").map((t) => t.trim()) ?? [];

  return (
    <section className="animate-page-enter">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-10 group"
      >
        <span className="inline-block transition-transform group-hover:-translate-x-0.5 duration-150">
          ←
        </span>
        Projects
      </Link>

      {/* Case study header */}
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

        {techTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {techTags.map((tag) => (
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

      {/* MDX body */}
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={content} />
      </article>

      {/* Footer back link */}
      <hr className="section-divider mt-12" />
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mt-6 group"
      >
        <span className="inline-block transition-transform group-hover:-translate-x-0.5 duration-150">
          ←
        </span>
        Back to Projects
      </Link>
    </section>
  );
}
