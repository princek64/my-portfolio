"use client";

import React, { useEffect, useRef, useState } from "react";

interface LiveSiteProps {
  src: string;
  title: string;
  caption?: string;
}

/** A real iPhone's screen (iPhone 15 / 16), in CSS pixels. */
const SCREEN = { width: 393, height: 852 };
/** The phone's widest, and its bezel. Screen fits inside: 360 - 2 × 8. */
const PHONE_MAX = 360;
const BEZEL = 8;
const DEFAULT_SCALE = (PHONE_MAX - 2 * BEZEL) / SCREEN.width;

/**
 * A working copy of a live site inside a phone, so readers can try it in the
 * case study. The site runs at a real iPhone's size and the whole screen is
 * scaled down to fit, so it lays out exactly as on a phone. The site must
 * allow this one to frame it (CSP frame-ancestors).
 * Props are plain strings: MDX here drops {expressions}.
 */
export function LiveSite({ src, title, caption }: LiveSiteProps) {
  const screen = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(DEFAULT_SCALE);

  useEffect(() => {
    const element = screen.current;
    if (!element) return;
    const fit = () => setScale(element.clientWidth / SCREEN.width);
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="my-8 flex flex-col items-center">
      <div
        className="w-full rounded-[3rem] bg-[#1b1d20] shadow-[inset_0_0_0_2px_#3a3d42]"
        style={{ maxWidth: PHONE_MAX, padding: BEZEL }}
      >
        <div
          ref={screen}
          className="relative w-full overflow-hidden rounded-[2.5rem] bg-white"
          style={{ aspectRatio: `${SCREEN.width} / ${SCREEN.height}` }}
        >
          <iframe
            src={src}
            title={title}
            className="absolute left-0 top-0 block border-0"
            style={{
              width: SCREEN.width,
              height: SCREEN.height,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
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
