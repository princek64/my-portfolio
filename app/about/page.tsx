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
        prince kukreja
      </h1>

      <div className="prose prose-neutral dark:prose-invert mb-8 text-[15px] leading-relaxed">
        <p>
          i build interfaces and care about how things look and how they work. that question shaped my career as a frontend engineer and pulled me toward design.
        </p>

        <p className="mt-8 mb-2 font-medium text-neutral-800 dark:text-neutral-200">
          stack & how i work:
        </p>
        <ul className="list-none pl-0 space-y-3 m-0 border-l border-neutral-200 dark:border-neutral-800 ml-2">
          <li className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-neutral-300 dark:before:bg-neutral-700 before:left-0 before:top-3">
            <span className="font-medium text-neutral-800 dark:text-neutral-200">the code:</span> JS/TS, Vue, React, Tailwind. comfortable enough backend to not be blocked.
          </li>
          <li className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-neutral-300 dark:before:bg-neutral-700 before:left-0 before:top-3">
            <span className="font-medium text-neutral-800 dark:text-neutral-200">the design:</span> practically live in Figma. knock out mockups, prototypes, and design systems.
          </li>
          <li className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-neutral-300 dark:before:bg-neutral-700 before:left-0 before:top-3">
            <span className="font-medium text-neutral-800 dark:text-neutral-200">the ethos:</span> accessibility from the start, not bolted on at the end. navigating where human judgment still matters most in an AI-heavy world.
          </li>
        </ul>

        <p className="mt-8 mb-2 font-medium text-neutral-800 dark:text-neutral-200">
          community & events:
        </p>
        <ul className="list-none pl-0 space-y-2 m-0 border-l border-neutral-200 dark:border-neutral-800 ml-2">
          <li className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-neutral-300 dark:before:bg-neutral-700 before:left-0 before:top-3">
            i love showing up for the community that gave me so much. i've volunteered at:
          </li>
          <li className="pl-4 mt-2">
            → Droidcon London
          </li>
          <li className="pl-4">
            → React Native London
          </li>
          <li className="pl-4">
            → React Advanced London
          </li>
          <li className="pl-4">
            → Devoxx UK
          </li>
          <li className="pl-4">
            → AI Dev Con
          </li>
        </ul>

        <p className="mt-8 mb-2 font-medium text-neutral-800 dark:text-neutral-200">
          education history:
        </p>
        <ul className="list-none pl-0 space-y-4 m-0 border-l border-neutral-200 dark:border-neutral-800 ml-2">
          <li className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-neutral-300 dark:before:bg-neutral-700 before:left-0 before:top-3">
            <span className="font-medium text-neutral-800 dark:text-neutral-200">MA Digital Media Design</span><br />
            <span className="text-neutral-500 dark:text-neutral-400">Birkbeck, University of London · 2025–2026</span>
          </li>
          <li className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-neutral-300 dark:before:bg-neutral-700 before:left-0 before:top-3">
            <span className="font-medium text-neutral-800 dark:text-neutral-200">Bachelor of Technology with Specialization in Banking, Finance Services & Insurance</span><br />

            <span className="text-neutral-500 dark:text-neutral-400">UPES, India · 2014–2018</span>
          </li>
        </ul>

        <p className="mt-8 mb-2 font-medium text-neutral-800 dark:text-neutral-200">
          off-screen fun facts:
        </p>
        <ul className="list-none pl-0 space-y-2 m-0 border-l border-neutral-200 dark:border-neutral-800 ml-2">
          <li className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-neutral-300 dark:before:bg-neutral-700 before:left-0 before:top-3">
            i shoot photography & videography while exploring new places 📷
          </li>
          <li className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-neutral-300 dark:before:bg-neutral-700 before:left-0 before:top-3">
            always up for adventure & snowboarding 🏂
          </li>
          <li className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-neutral-300 dark:before:bg-neutral-700 before:left-0 before:top-3">
            calm session of pottery 🏺
          </li>
          <li className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-neutral-300 dark:before:bg-neutral-700 before:left-0 before:top-3">
            love brewing coffee at home and trying new cafes ☕
          </li>
        </ul>
      </div>
    </section>
  );
}