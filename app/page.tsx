import Image from "next/image";
import { socialLinks } from "./config";
import { FiLink } from "react-icons/fi";

export default function Page() {
  return (
    <section className="animate-page-enter">
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 hover:opacity-90 transition-opacity duration-200"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      {/* Status indicator */}
      <div className="flex items-center gap-2 mb-4 text-sm text-neutral-500 dark:text-neutral-400">
        <span className="pulse-dot" aria-hidden="true" />
        <span>Open to new roles</span>
      </div>

      <h1 className="mb-8 text-xl font-medium tracking-tight gradient-text">
        Designer who codes, or developer who designs, depending on the day.
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Six years in frontend engineering, currently finishing an MA in Digital Media Design at Birkbeck. I care about how things look and how they work, in equal measure.
        </p>
        <p>
          Looking for roles where design and engineering overlap. Good coffee is non-negotiable.
        </p>
        <hr className="section-divider" />
        <p className="flex items-center gap-2"><FiLink /><a href="https://docs.google.com/document/d/1zVr5vU1dkqRabsqREk4xeS86bGxcRPuf9drZXnPp3n0/edit?tab=t.0" target="_blank" rel="noopener noreferrer">Resume Link</a></p>
      </div>
    </section>
  );
}
