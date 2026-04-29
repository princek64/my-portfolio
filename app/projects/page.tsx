import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";
import { AbstractArt } from "../components/AbstractArt";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section className="animate-page-enter">
      <h1 className="mb-8 text-2xl font-medium tracking-tight gradient-text">projects.</h1>

      {/* 
        Bento Grid styling:
        - 3 columns on desktop, 1 on mobile
        - dense packing so different sized items fill gaps
        - removed row-spans to keep card heights uniform and crisp
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px] grid-flow-dense">
        {[...projects].sort((a, b) => b.year - a.year).map((project, index) => {
          // Make the first project (latest by year) a full-width hero card, others default to 1 column
          let spanClasses = "col-span-1"; 
          
          if (index === 0) {
            spanClasses = "md:col-span-2 lg:col-span-3"; // Full width hero card
          }

          // Use a dummy slug if none provided just to ensure the link works for the demo
          const detailsSlug = project.slug || project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          
          return (
            <div key={index} className={`bento-card flex flex-col gap-4 ${spanClasses}`}>

              {/* 1. Abstract Generative CSS Art */}
              <div aria-hidden="true" className="w-full flex-1 min-h-[100px] rounded-2xl flex items-center justify-center shrink-0 relative overflow-hidden group/image border border-neutral-200/50 dark:border-neutral-800/50 bg-neutral-50 dark:bg-[#151515]">
                <AbstractArt index={index} />
              </div>

              {/* Text Wrapper groups header and description together */}
              <div className="flex flex-col shrink-0">
                {/* 2. Header Content (Links out externally) */}
                <div className="flex justify-between items-start mb-2 group/header">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-black dark:text-white font-semibold tracking-tight text-lg leading-tight flex items-start gap-1.5 hover:text-[#47a3f3] dark:hover:text-[#4c97f8] transition-colors duration-200">
                      <span className="border-b border-transparent hover:border-current pb-0.5">
                        {project.title}
                      </span>
                      <span className="text-neutral-400 dark:text-neutral-500 text-sm font-normal mt-0.5 opacity-50 pointer-events-none group-hover/header:opacity-100 group-hover/header:-translate-y-0.5 group-hover/header:translate-x-0.5 transition-all duration-200">
                        ↗
                      </span>
                    </a>
                  ) : (
                    <span className="text-black dark:text-white font-semibold tracking-tight text-lg leading-tight">
                      {project.title}
                    </span>
                  )}

                  <span className="text-neutral-400 dark:text-neutral-500 tabular-nums text-xs font-mono bg-neutral-200/50 dark:bg-neutral-800/50 px-2 py-1 rounded-md shrink-0 ml-2">
                    {project.year}
                  </span>
                </div>

                {/* 3. Description Content (Links to detail page) */}
                <Link href={`/projects/${detailsSlug}`} className="group/desc block">
                  <p className={`prose prose-neutral dark:prose-invert text-sm leading-relaxed overflow-hidden ${spanClasses.includes("row-span-2") ? "line-clamp-4" : "line-clamp-2"
                    }`}>
                    {project.description}
                  </p>
                  <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500 mt-2 inline-block opacity-0 translate-y-1 group-hover/desc:opacity-100 group-hover/desc:translate-y-0 transition-all duration-200">
                    Read details →
                  </span>
                </Link>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
