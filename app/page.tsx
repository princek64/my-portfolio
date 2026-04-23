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

      <h1 className="mb-6 text-xl font-medium tracking-tight gradient-text">
        hi, i'm prince.
      </h1>


      <div className="prose prose-neutral dark:prose-invert mb-8 text-[15px] leading-relaxed">
        <p>
          i'm a frontend engineer and digital designer based in 📍 London. <br />
          i care about how things look and how they work, in equal measure.
        </p>

        <p className="mt-6 mb-2 font-medium text-neutral-800 dark:text-neutral-200">
          currently:
        </p>
        <ul className="list-none pl-0 space-y-2 m-0 border-l border-neutral-200 dark:border-neutral-800 ml-2">
          <li className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-neutral-300 dark:before:bg-neutral-700 before:left-0 before:top-3">
            finishing an MA in Digital Media Design at Birkbeck 📚
          </li>
          <li className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-neutral-300 dark:before:bg-neutral-700 before:left-0 before:top-3">
            looking for roles where design and engineering overlap 🤝
          </li>
          <li className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-neutral-300 dark:before:bg-neutral-700 before:left-0 before:top-3">
            drinking highly caffeinated, non-negotiable good coffee ☕
          </li>
        </ul>
      </div>

      {/* <div className="prose prose-neutral dark:prose-invert text-[15px]">
        <p className="flex items-center gap-2">
          <FiLink className="text-neutral-400" />
          <a href="https://docs.google.com/document/d/1zVr5vU1dkqRabsqREk4xeS86bGxcRPuf9drZXnPp3n0/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4">
            view resume
          </a>
        </p>
      </div> */}
    </section>
  );
}
