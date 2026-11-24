"use client";

import { useState, type FormEvent } from "react";
import { EVENT_TYPES, MONTHS, TYPE_LABELS, mixTotal, type EventType, type Month, type WrapData } from "./data";

const field =
  "min-h-11 w-full rounded-md border border-neutral-400 bg-white px-3 text-base text-neutral-900 outline-none focus-visible:ring-2 focus-visible:ring-[#0098D4] dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100";
const label = "text-sm font-medium text-neutral-900 dark:text-neutral-100";
const hint = "text-sm text-neutral-600 dark:text-neutral-400";

type Draft = {
  name: string;
  total: string;
  mix: Record<EventType, string>;
  month: Month;
  monthCount: string;
  highlights: string;
  communities: { name: string; count: string }[];
  wildcard: string;
};

const EMPTY: Draft = {
  name: "",
  total: "",
  mix: { socials: "", meetups: "", talks: "", hackathons: "", conferences: "", workshops: "" },
  month: "November",
  monthCount: "",
  highlights: "",
  communities: Array.from({ length: 5 }, () => ({ name: "", count: "" })),
  wildcard: "",
};

const num = (value: string) => Math.max(0, Math.floor(Number(value) || 0));

/** The six questions. Nothing typed here leaves the browser. */
export function WrapForm({ onDone }: { onDone: (data: WrapData) => void }) {
  const [draft, setDraft] = useState<Draft>(EMPTY);
  const [error, setError] = useState("");
  const mix = Object.fromEntries(EVENT_TYPES.map((t) => [t, num(draft.mix[t])])) as Record<EventType, number>;
  const typed = mixTotal(mix);
  const total = num(draft.total);

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!draft.name.trim()) return setError("Add your first name: it goes on every slide.");
    if (total < 1) return setError("Add how many events you went to this year.");
    if (typed > total) return setError(`Your event types add up to ${typed}, more than your total of ${total}. Check the numbers.`);
    if (!draft.communities.some((c) => c.name.trim())) return setError("Add at least one community you went to.");
    setError("");
    onDone({
      name: draft.name.trim(),
      total,
      mix,
      busiest: {
        month: draft.month,
        count: num(draft.monthCount),
        highlights: draft.highlights.split(",").map((h) => h.trim()).filter(Boolean).slice(0, 4),
      },
      communities: draft.communities.filter((c) => c.name.trim()).map((c) => ({ name: c.name.trim(), count: num(c.count) })),
      wildcard: draft.wildcard.trim(),
    });
  }

  const set = (patch: Partial<Draft>) => setDraft((d) => ({ ...d, ...patch }));

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-8">
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="w-name" className={label}>Your first name</label>
        <input id="w-name" className={field} autoComplete="given-name" value={draft.name} onChange={(e) => set({ name: e.target.value })} />
      </fieldset>

      <fieldset className="flex flex-col gap-3">
        <legend className={`${label} mb-1`}>How many events did you go to this year?</legend>
        <label htmlFor="w-total" className={hint}>In London, from January to now. Count each event once.</label>
        <input id="w-total" className={`${field} max-w-[10rem]`} inputMode="numeric" value={draft.total} onChange={(e) => set({ total: e.target.value })} />
      </fieldset>

      <fieldset className="flex flex-col gap-3">
        <legend className={`${label} mb-1`}>What kinds of events were they?</legend>
        <p className={hint}>Rough numbers are fine. Anything left over shows as “Other”.</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {EVENT_TYPES.map((type) => (
            <div key={type} className="flex flex-col gap-1">
              <label htmlFor={`w-${type}`} className={hint}>{TYPE_LABELS[type]}</label>
              <input id={`w-${type}`} className={field} inputMode="numeric" value={draft.mix[type]} onChange={(e) => set({ mix: { ...draft.mix, [type]: e.target.value } })} />
            </div>
          ))}
        </div>
        <p className={hint} aria-live="polite">
          {total > 0 ? `${typed} of ${total} given a type${total - typed > 0 ? `, ${total - typed} will show as Other` : ""}.` : ""}
        </p>
      </fieldset>

      <fieldset className="flex flex-col gap-3">
        <legend className={`${label} mb-1`}>Your busiest month</legend>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="w-month" className={hint}>Month</label>
            <select id="w-month" className={field} value={draft.month} onChange={(e) => set({ month: e.target.value as Month })}>
              {MONTHS.slice(0, 11).map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="w-month-count" className={hint}>Events that month</label>
            <input id="w-month-count" className={field} inputMode="numeric" value={draft.monthCount} onChange={(e) => set({ monthCount: e.target.value })} />
          </div>
        </div>
        <label htmlFor="w-highlights" className={hint}>Highlights that month (optional, separate with commas)</label>
        <input id="w-highlights" className={field} value={draft.highlights} onChange={(e) => set({ highlights: e.target.value })} />
      </fieldset>

      <fieldset className="flex flex-col gap-3">
        <legend className={`${label} mb-1`}>Communities you went back to most</legend>
        <p className={hint}>Up to five, most visits first.</p>
        {draft.communities.map((c, i) => (
          <div key={i} className="grid grid-cols-[minmax(0,1fr)_6rem] gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor={`w-c${i}`} className="sr-only">{`Community ${i + 1}`}</label>
              <input id={`w-c${i}`} className={field} placeholder={`Community ${i + 1}`} value={c.name} onChange={(e) => set({ communities: draft.communities.map((x, j) => (j === i ? { ...x, name: e.target.value } : x)) })} />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor={`w-c${i}-n`} className="sr-only">{`Visits to community ${i + 1}`}</label>
              <input id={`w-c${i}-n`} className={field} inputMode="numeric" placeholder="Visits" value={c.count} onChange={(e) => set({ communities: draft.communities.map((x, j) => (j === i ? { ...x, count: e.target.value } : x)) })} />
            </div>
          </div>
        ))}
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        <label htmlFor="w-wildcard" className={label}>Your oddest event of the year</label>
        <p className={hint}>Optional. One line, like “100 people doing nothing for 3 hours.”</p>
        <input id="w-wildcard" className={field} maxLength={60} value={draft.wildcard} onChange={(e) => set({ wildcard: e.target.value })} />
      </fieldset>

      {error && (
        <p role="alert" className="text-base font-medium text-[#B3141B] dark:text-[#FF6B5E]">
          {error}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="inline-flex min-h-11 items-center rounded-full bg-neutral-900 px-5 text-base font-medium text-white outline-none hover:bg-neutral-700 focus-visible:ring-2 focus-visible:ring-[#0098D4] dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
          Make my wrap
        </button>
        <p className={hint}>Nothing you type is saved or sent anywhere.</p>
      </div>
    </form>
  );
}
