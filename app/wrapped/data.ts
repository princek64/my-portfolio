// Everything a wrap is made from. Nothing here is saved anywhere: the form
// builds a WrapData in the browser and the slides read it.

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
  /** Optional: only shown when filled in. */
  gap?: { from: Month; to: Month; count: number };
  /** Optional: only shown when filled in. */
  built?: string[];
};

/** Prince's own wrap. Busiest month, gap and communities still to confirm against the cleaned list. */
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

export function possessive(name: string): string {
  const clean = name.trim() || "Your";
  if (clean.toLowerCase() === "your") return "YOUR";
  return `${clean}${/s$/i.test(clean) ? "’" : "’s"}`.toUpperCase();
}

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

type Traveller = { name: string; line: string };

const TRAVELLERS: Record<EventType | "all", Traveller> = {
  all: { name: "The All-Lines Explorer", line: "A bit of everything, every week. Every line, no favourites." },
  hackathons: { name: "The Hackathon Hopper", line: "Laptop charged, weekend booked. Ships something by Sunday." },
  socials: { name: "The Night Tube Regular", line: "Last one out. The after-party is where it happens." },
  meetups: { name: "The Season Ticket Holder", line: "Same communities, every month. They save you a seat." },
  talks: { name: "The Front-Row Asker", line: "Front row, hand up first at every Q&A." },
  conferences: { name: "The Peak-Hour Commuter", line: "Big days, long queues, a lanyard for every season." },
  workshops: { name: "The Workshop Regular", line: "Came to make things, not just to listen." },
};

/** The traveller type is worked out from the event mix, never picked. */
export function traveller(data: WrapData): Traveller & { issued: string } {
  const mix = sortedMix(data);
  const total = mixTotal(data.mix) || 1;
  const top = mix[0];
  const second = mix[1];
  const hackShare = (data.mix.hackathons || 0) / total;
  const key: EventType | "all" =
    hackShare >= 0.25 ? "hackathons" : !top || top[1] / total < 0.3 ? "all" : top[0];
  const issued = top
    ? `ISSUED FOR ${top[1]} ${top[0].toUpperCase()}${second ? ` + ${second[1]} ${second[0].toUpperCase()}` : ""}`
    : "ISSUED FOR 2026";
  return { ...TRAVELLERS[key], issued };
}

export function numberWord(n: number): string {
  const words = ["No", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
  return words[n] ?? String(n);
}
