import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { caseStudyItems, getWorkSlug, otherItems } from "./work-data";
import { AbstractArt } from "../components/AbstractArt";

export const metadata: Metadata = {
  title: "Work",
  description: "My Work",
};

function ExternalLink({ href, label, title }: { href: string; label: string; title: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="inline-flex items-center gap-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
    >
      <span>{label}</span>
      <span className="text-xs" aria-hidden="true">↗</span>
      <span className="sr-only">for {title} (opens in a new tab)</span>
    </a>
  );
}

export default function Work() {
  return (
    <section className="animate-page-enter">
      <h1 className="mb-8 text-2xl font-medium tracking-tight gradient-text">work.</h1>

      <h2 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-6 tracking-tight">
        case studies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
        {caseStudyItems.map((project, index) => {
          const slug = getWorkSlug(project);
          const isLead = index === 0;

          return (
            <article key={slug} className={`flex flex-col ${isLead ? "md:col-span-2" : ""}`}>
              <Link
                href={`/work/${slug}`}
                aria-hidden="true"
                tabIndex={-1}
                className={`relative block w-full overflow-hidden rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 group/image mb-4 ${isLead ? "h-48 sm:h-56" : "h-44"} ${project.logo ? project.logo.background : "bg-neutral-50 dark:bg-[#151515]"}`}
              >
                {project.logo ? (
                  <Image
                    src={project.logo.src}
                    alt=""
                    fill
                    sizes={isLead ? "(max-width: 768px) 100vw, 640px" : "(max-width: 768px) 100vw, 320px"}
                    className={`${project.logo.className} transition-transform duration-500 group-hover/image:scale-[1.03]`}
                  />
                ) : (
                  <AbstractArt index={index} />
                )}
              </Link>

              <div className="flex justify-between items-start gap-3 mb-2">
                <Link
                  href={`/work/${slug}`}
                  className="text-black dark:text-white font-semibold tracking-tight text-lg leading-tight hover:text-[#47a3f3] dark:hover:text-[#4c97f8] transition-colors duration-200"
                >
                  {project.title}
                </Link>
                <span className="text-neutral-400 dark:text-neutral-500 tabular-nums text-xs font-mono bg-neutral-200/50 dark:bg-neutral-800/50 px-2 py-1 rounded-md shrink-0">
                  {project.year}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-[#333333] dark:text-[#D4D4D4]">
                {project.description}
              </p>

              <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2">
                {[project.role, ...project.capabilities].filter(Boolean).join(" · ")}
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3 text-sm">
                <Link
                  href={`/work/${slug}`}
                  className="font-medium text-neutral-900 dark:text-neutral-100 hover:text-[#47a3f3] dark:hover:text-[#4c97f8] transition-colors"
                >
                  Read case study →
                </Link>
                {project.url && (
                  <ExternalLink href={project.url} label={project.linkLabel || "Live site"} title={project.title} />
                )}
              </div>
            </article>
          );
        })}
      </div>

      <hr className="section-divider mt-14" />

      <h2 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mt-10 mb-2 tracking-tight">
        other experience
      </h2>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
        Frontend and full stack work for clients and companies, 2020 to 2026.
      </p>

      <ul className="divide-y divide-neutral-200 dark:divide-neutral-800 border-y border-neutral-200 dark:border-neutral-800">
        {otherItems.map((project) => (
          <li
            key={getWorkSlug(project)}
            className="py-4 grid grid-cols-[3rem_minmax(0,1fr)] sm:grid-cols-[3rem_minmax(0,1fr)_auto] gap-x-4 gap-y-1 items-baseline"
          >
            <span className="text-xs font-mono tabular-nums text-neutral-400 dark:text-neutral-500">
              {project.year}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                {project.title}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mt-0.5">
                {project.summary}
              </p>
            </div>
            {project.url && (
              <div className="col-start-2 sm:col-start-3 text-sm">
                <ExternalLink href={project.url} label={project.linkLabel || "Live site"} title={project.title} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
