"use client";

import type { ComponentType } from "react";
import type { WrapData } from "./data";
import { BigNumber, Busiest, Cover, Gap, Mix } from "./slides/journey";
import { Built, Communities, End, Ticket, Wildcard } from "./slides/people";
import type { SlideProps } from "./slides/parts";

type SlideComponent = ComponentType<SlideProps & { data: WrapData }>;
type Entry = { id: string; stop: string; Slide: SlideComponent };

/** Slide order. */
const ORDER: Entry[] = [
  { id: "cover", stop: "COVER", Slide: Cover },
  { id: "number", stop: "THE BIG NUMBER", Slide: BigNumber },
  { id: "lines", stop: "YOUR LINES", Slide: Mix },
  { id: "gap", stop: "MIND THE GAP", Slide: Gap },
  { id: "busiest", stop: "BUSIEST MONTH", Slide: Busiest },
  { id: "communities", stop: "TOP COMMUNITIES", Slide: Communities },
  { id: "wildcard", stop: "THE WILDCARD", Slide: Wildcard },
  { id: "ticket", stop: "YOUR TRAVELLER TYPE", Slide: Ticket },
  { id: "built", stop: "WHAT IT TURNED INTO", Slide: Built },
  { id: "end", stop: "END OF THE LINE", Slide: End },
];

export type DeckSlide = { id: string; render: () => JSX.Element };

export function buildDeck(data: WrapData): DeckSlide[] {
  const entries = ORDER;
  const owner = "PRINCE’S";
  return entries.map(({ id, Slide }, i) => ({
    id,
    render: () => <Slide data={data} owner={owner} page={i + 1} pages={entries.length} next={entries[i + 1]?.stop} />,
  }));
}
