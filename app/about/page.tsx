import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Me",
};

export default function About() {
  return (
    <section className="animate-page-enter">
      <h1 className="mb-6 text-xl font-medium tracking-tight gradient-text">
        i build it and i design it.
      </h1>

      <div className="prose prose-neutral dark:prose-invert mb-8 text-[15px] leading-relaxed">
        <p>
          i've spent six years building frontend interfaces, and over time, i found myself caring just as much about the design decisions behind them as the code.
        </p>
        <p>
          that's what led me to design engineering: working somewhere between the two, where a Figma frame can become a real interface, and where writing the code can expose problems the mockup didn't.
        </p>
        <p>
          i'm currently finishing an MA in Digital Media Design at Birkbeck, where i've been digging deeper into interaction, design systems, accessibility, and what happens when AI starts changing the interface itself.
        </p>

        <p className="mt-8 mb-2 font-medium text-neutral-800 dark:text-neutral-200">
          how i work:
        </p>
        <ul className="list-none pl-0 space-y-3 m-0 border-l border-neutral-200 dark:border-neutral-800 ml-2">
          <li className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-neutral-300 dark:before:bg-neutral-700 before:left-0 before:top-3">
            <span className="font-medium text-neutral-800 dark:text-neutral-200">the code →</span> JS/TS, React, Vue, Tailwind. comfortable taking a frontend from idea to shipped product.
          </li>
          <li className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-neutral-300 dark:before:bg-neutral-700 before:left-0 before:top-3">
            <span className="font-medium text-neutral-800 dark:text-neutral-200">the design →</span> Figma, design systems, components, tokens, patterns. i care about making designs clear enough to build, not just nice enough to present.
          </li>
          <li className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-neutral-300 dark:before:bg-neutral-700 before:left-0 before:top-3">
            <span className="font-medium text-neutral-800 dark:text-neutral-200">the thinking →</span> accessibility early, systems over one-off screens, and AI as a tool for exploring ideas—not a substitute for having them.
          </li>
        </ul>

        <p className="mt-8 mb-2 font-medium text-neutral-800 dark:text-neutral-200">
          community & events:
        </p>
        <ul className="list-none pl-0 space-y-2 m-0 border-l border-neutral-200 dark:border-neutral-800 ml-2">
          <li className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-neutral-300 dark:before:bg-neutral-700 before:left-0 before:top-3">
            i like giving back to the communities i've learned from. i've volunteered at:
          </li>
          <li className="pl-4">
            → React Native London
          </li>
          <li className="pl-4">
            → React Advanced London
          </li>
          <li className="pl-4">
            → AI Dev Con
          </li>
          <li className="pl-4">
            → AI Coding Summit London
          </li>
          <li className="pl-4 mt-2">
            → Droidcon London
          </li>
          <li className="pl-4">
            → Devoxx UK
          </li>
        </ul>

        <p className="mt-8 mb-2 font-medium text-neutral-800 dark:text-neutral-200">
          education history:
        </p>
        <ul className="list-none pl-0 space-y-4 m-0 border-l border-neutral-200 dark:border-neutral-800 ml-2">
          <li className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-neutral-300 dark:before:bg-neutral-700 before:left-0 before:top-3">
            <span className="font-medium text-neutral-800 dark:text-neutral-200">MA Digital Media Design</span><br />
            <span className="text-neutral-500 dark:text-neutral-400">Birkbeck, University of London · 2025–2026</span><br />
          </li>
          <li className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-neutral-300 dark:before:bg-neutral-700 before:left-0 before:top-3">
            <span className="font-medium text-neutral-800 dark:text-neutral-200">Bachelor of Technology</span><br />
            <span className="text-neutral-500 dark:text-neutral-400">UPES, India · 2014–2018</span><br />
          </li>
        </ul>

        <p className="mt-8 mb-2 font-medium text-neutral-800 dark:text-neutral-200">
          outside of work:
        </p>
        <ul className="list-none pl-0 space-y-2 m-0 border-l border-neutral-200 dark:border-neutral-800 ml-2">
          <li className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-neutral-300 dark:before:bg-neutral-700 before:left-0 before:top-3">
            i shoot photos when i travel. pottery when i need quiet. snowboarding
            when i can get to the mountains. always on a mission for a better cup of coffee.
          </li>
        </ul>
      </div>
    </section>
  );
}
