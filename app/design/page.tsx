import React from "react";
import type { Metadata } from "next";
import { designs } from "./design-data";

export const metadata: Metadata = {
    title: "Design",
    description: "My Design Work",
};

export default function Design() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-medium tracking-tight">Design</h1>
            <div className="space-y-6">
                {designs.map((design, index) => (
                    <a
                        key={index}
                        href={design.url || 'javascript:void(0)'}
                        target={design.url ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="block group hover:opacity-80 transition-opacity duration-200"
                    >
                        <div className="flex flex-col">
                            <div className="w-full flex justify-between items-baseline">
                                <span className="text-black dark:text-white font-semibold tracking-tight">
                                    {design.title}
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
                    </a>
                ))}
            </div>
        </section>
    );
}