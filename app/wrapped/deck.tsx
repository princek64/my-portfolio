"use client";

import type { ComponentType } from "react";
import { possessive, type WrapData } from "./data";
import { BigNumber, Busiest, Cover, Gap, Mix } from "./slides/journey";
import { Built, Communities, End, Ticket, Wildcard } from "./slides/people";
import type { SlideProps } from "./slides/parts";

type SlideComponent = ComponentType<SlideProps & { data: WrapData }>;
type Entry = { id: string; stop: string; Slide: SlideComponent; when?: (data: WrapData) => boolean };

/** Slide order. A slide with `when` is left out unless its answers are filled in. */
const ORDER: Entry[] = [
  { id: "cover", stop: "COVER", Slide: Cover },
  { id: "number", stop: "THE BIG NUMBER", Slide: BigNumber },
  { id: "lines", stop: "YOUR LINES", Slide: Mix },
  { id: "gap", stop: "MIND THE GAP", Slide: Gap, when: (d) => Boolean(d.gap) },
  { id: "busiest", stop: "BUSIEST MONTH", Slide: Busiest },
  { id: "communities", stop: "TOP COMMUNITIES", Slide: Communities },
  { id: "wildcard", stop: "THE WILDCARD", Slide: Wildcard, when: (d) => Boolean(d.wildcard.trim()) },
  { id: "ticket", stop: "YOUR TRAVELLER TYPE", Slide: Ticket },
  { id: "built", stop: "WHAT IT TURNED INTO", Slide: Built, when: (d) => Boolean(d.built?.some((b) => b.trim())) },
  { id: "end", stop: "END OF THE LINE", Slide: End },
];

export type DeckSlide = { id: string; render: () => JSX.Element };

export function buildDeck(data: WrapData): DeckSlide[] {
  const entries = ORDER.filter((entry) => !entry.when || entry.when(data));
  const owner = possessive(data.name);
  return entries.map(({ id, Slide }, i) => ({
    id,
    render: () => <Slide data={data} owner={owner} page={i + 1} pages={entries.length} next={entries[i + 1]?.stop} />,
  }));
}
