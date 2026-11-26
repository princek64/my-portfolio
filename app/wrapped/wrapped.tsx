"use client";

import { useMemo, useState } from "react";
import { PRINCE } from "./data";
import { buildDeck } from "./deck";
import { Viewer } from "./viewer";
import "./wrapped.css";

export function Wrapped({ fonts }: { fonts: string }) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const slides = useMemo(() => buildDeck(PRINCE), []);

  return (
    <section className={fonts}>
      <h1 className="mb-3 text-3xl font-medium tracking-tight">My 2026 in London events</h1>
      <p className="mb-8 text-lg text-neutral-700 dark:text-neutral-300">
        A year of talks, meetups and hackathons, told as a Tube journey. Tap through the slides, or download them.
      </p>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex min-h-11 items-center rounded-full bg-neutral-900 px-5 text-base font-medium text-white outline-none hover:bg-neutral-700 focus-visible:ring-2 focus-visible:ring-[#0098D4] dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
      >
        Start the journey
      </button>
      {open && (
        <Viewer slides={slides} name={PRINCE.name} theme={theme} onTheme={setTheme} onClose={() => setOpen(false)} fonts={fonts} />
      )}
    </section>
  );
}
