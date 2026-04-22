import React from "react";
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
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url || "javascript:void(0)"}
            target={project.url ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="block group card-lift"
          >
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-semibold tracking-tight flex items-center gap-2">
                  {project.title}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-neutral-400 dark:text-neutral-500 text-base font-normal">
                    →
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
          </a>
        ))}
      </div>
    </section>
  );
}
