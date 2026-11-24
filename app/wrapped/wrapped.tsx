"use client";

import { useMemo, useState } from "react";
import { PRINCE, type WrapData } from "./data";
import { buildDeck } from "./deck";
import { WrapForm } from "./form";
import { Viewer } from "./viewer";
import "./wrapped.css";

export function Wrapped({ fonts }: { fonts: string }) {
  const [data, setData] = useState<WrapData | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const slides = useMemo(() => (data ? buildDeck(data) : []), [data]);

  return (
    <section className={fonts}>
      <h1 className="mb-3 text-3xl font-medium tracking-tight">Your 2026 in London events</h1>
      <p className="mb-6 text-lg text-neutral-700 dark:text-neutral-300">
        Turn your year of meetups, talks and hackathons into Tube-style slides for LinkedIn and X. Answer six questions; the
        slides are made on your device and nothing is saved.
      </p>
      <button
        type="button"
        onClick={() => setData(PRINCE)}
        className="mb-10 inline-flex min-h-11 items-center rounded-full border border-neutral-400 px-5 text-base font-medium outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-[#0098D4] dark:border-neutral-600 dark:hover:bg-neutral-800"
      >
        See Prince’s wrap
      </button>
      <h2 className="mb-6 text-xl font-medium">Make your own</h2>
      <WrapForm onDone={setData} />
      {data && (
        <Viewer slides={slides} name={data.name} theme={theme} onTheme={setTheme} onClose={() => setData(null)} fonts={fonts} />
      )}
    </section>
  );
}
