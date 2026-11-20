import React from "react";

interface LiveSiteProps {
  src: string;
  title: string;
  caption?: string;
}

/**
 * A working copy of a live site inside a phone, so readers can try it in the
 * case study. The site must allow this one to frame it (CSP frame-ancestors).
 * Props are plain strings: MDX here drops {expressions}.
 */
export function LiveSite({ src, title, caption }: LiveSiteProps) {
  return (
    <figure className="my-8 flex flex-col items-center">
      <div className="aspect-[9/19] w-full max-w-[340px] rounded-[2.75rem] bg-[#1b1d20] p-2 shadow-[inset_0_0_0_2px_#3a3d42]">
        <iframe
          src={src}
          title={title}
          className="block h-full w-full rounded-[2.25rem] bg-white"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          allow="clipboard-write"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <figcaption className="mt-3 text-center font-mono text-xs leading-relaxed text-neutral-500 dark:text-neutral-500">
        {caption ? `${caption} · ` : ""}
        <a href={src} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
          Open the live site ↗
        </a>
      </figcaption>
    </figure>
  );
}
