import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section className="animate-page-enter">
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-2">
        {projects.map((project, index) => {
          const isExternal = !!project.url;
          const isInternal = !project.url && !!project.slug;

          const cardContent = (
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-semibold tracking-tight flex items-center gap-2">
                  {project.title}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-neutral-400 dark:text-neutral-500 text-base font-normal">
                    {isExternal ? "↗" : "→"}
                  </span>
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {project.year}
                </span>
              </div>
              <p className="prose prose-neutral dark:prose-invert pt-3">
                {project.description}
              </p>
            </div>
          );

          if (isExternal) {
            return (
              <a
                key={index}
                href={project.url!}
                target="_blank"
                rel="noopener noreferrer"
                className="block group card-lift"
              >
                {cardContent}
              </a>
            );
          }

          if (isInternal) {
            return (
              <Link
                key={index}
                href={`/projects/${project.slug}`}
                className="block group card-lift"
              >
                {cardContent}
              </Link>
            );
          }

          // No URL, no slug — render without a link
          return (
            <div key={index} className="card-lift">
              {cardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}
