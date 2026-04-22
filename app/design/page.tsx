import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { designs } from "./design-data";

export const metadata: Metadata = {
  title: "Design",
  description: "My Design Work",
};

export default function Design() {
  return (
    <section className="animate-page-enter">
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Design</h1>
      <div className="space-y-2">
        {designs.map((design, index) => {
          const isExternal = !!design.url;
          const isInternal = !design.url && !!design.slug;

          const cardContent = (
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-semibold tracking-tight flex items-center gap-2">
                  {design.title}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-neutral-400 dark:text-neutral-500 text-base font-normal">
                    {isExternal ? "↗" : "→"}
                  </span>
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {design.year}
                </span>
              </div>
              <span className="text-neutral-500 dark:text-neutral-500 text-sm pt-1">
                {design.tools}
              </span>
              {design.status && (
                <span className="text-neutral-400 dark:text-neutral-500 text-xs pt-1 italic">
                  {design.status}
                </span>
              )}
              <p className="prose prose-neutral dark:prose-invert pt-3">
                {design.description}
              </p>
            </div>
          );

          if (isExternal) {
            return (
              <a
                key={index}
                href={design.url!}
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
                href={`/design/${design.slug}`}
                className="block group card-lift"
              >
                {cardContent}
              </Link>
            );
          }

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