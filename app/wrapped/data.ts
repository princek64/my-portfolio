// Everything the wrap is made from. The slides read the PRINCE object below.

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;
export type Month = (typeof MONTHS)[number];

export const EVENT_TYPES = [
  "socials",
  "meetups",
  "talks",
  "hackathons",
  "conferences",
  "workshops",
] as const;
export type EventType = (typeof EVENT_TYPES)[number];

export const TYPE_LABELS: Record<EventType, string> = {
  socials: "Socials",
  meetups: "Meetups",
  talks: "Talks",
  hackathons: "Hackathons",
  conferences: "Conferences",
  workshops: "Workshops",
};

export type Community = { name: string; count: number };

export type WrapData = {
  name: string;
  total: number;
  mix: Record<EventType, number>;
  mixNote?: string;
  busiest: { month: Month; count: number; highlights: string[] };
  communities: Community[];
  wildcard: string;
  /** The ticket on the traveller slide, written by hand. */
  traveller: { name: string; line: string; issued: string };
  gap: { from: Month; to: Month; count: number };
  built: string[];
};

/** Prince's wrap. Busiest month, gap and communities still to confirm against the cleaned list. */
export const PRINCE: WrapData = {
  name: "Prince",
  total: 308,
  mix: { socials: 115, meetups: 60, talks: 48, hackathons: 34, conferences: 23, workshops: 17 },
  mixNote: "34 hackathons. Not all of them on purpose.",
  gap: { from: "January", to: "February", count: 6 },
  busiest: {
    month: "November",
    count: 52,
    highlights: ["Hacker House", "Solana Breakpoint", "DDX Conference"],
  },
  communities: [
    { name: "Geo Meetup", count: 8 },
    { name: "AI Native Dev", count: 7 },
    { name: "Notion London", count: 6 },
    { name: "React Native", count: 6 },
    { name: "Codex", count: 5 },
  ],
  wildcard: "100 people doing nothing for 3 hours.",
  traveller: {
    name: "The Night Tube Regular",
    line: "Last one out. The after-party is where it happens.",
    issued: "ISSUED FOR 115 SOCIALS + 60 MEETUPS",
  },
  built: [
    "Ichie",
    "Champion Brew",
    "MA Digital Media Design",
    "Community Christmas",
    "GetSociable",
    "London Design Guide",
  ],
};

export const TUBE_STATIONS = 272;

export function mixTotal(mix: Record<EventType, number>): number {
  return EVENT_TYPES.reduce((sum, type) => sum + (mix[type] || 0), 0);
}

/** Events the person counted but did not give a type: shown as "Other" so the lines add up. */
export function otherCount(data: WrapData): number {
  return Math.max(0, data.total - mixTotal(data.mix));
}

export function sortedMix(data: WrapData): [EventType, number][] {
  return EVENT_TYPES.map((type) => [type, data.mix[type] || 0] as [EventType, number])
    .filter(([, count]) => count > 0)
    .sort((a, b) => b[1] - a[1]);
}

export function compareLine(total: number): string {
  return total >= TUBE_STATIONS
    ? `The Tube has ${TUBE_STATIONS} stations. You out-stopped it.`
    : `Nearly one for every Tube station. There are ${TUBE_STATIONS}.`;
}

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export function daysIn(month: Month): number {
  return DAYS_IN_MONTH[MONTHS.indexOf(month)] ?? 30;
}

export function numberWord(n: number): string {
  const words = ["No", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
  return words[n] ?? String(n);
}
