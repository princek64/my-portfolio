export interface Design {
  title: string;
  year: number;
  tools: string;
  description: string;
  /** Single-line summary for compact cards (e.g. homepage featured list). */
  summary: string;
  status?: string;
  url?: string | null;
  /** Internal slug for design case study page. */
  slug?: string;
}

export const designs: Design[] = [
  {
    title: "Community Christmas Map",
    year: 2026,
    tools: "Product Design · Figma · Leaflet",
    description:
      "A map app for Marmalade Trust, built with Scottish Tech Army, to help people find community Christmas events near them. Leading a small team of three, handling design, PM, and client conversations. Working through map UI, event cards, and how people filter events on a small screen. Launching October 2026.",
    summary: "Map app for community Christmas events — leading design.",
    url: null,
    slug: "community-christmas-map",
  },
  {
    title: "Ichie",
    year: 2026,
    tools: "Product Design · Design Systems · React",
    description:
      "A personal event memory and network logging app based on the Japanese philosophy of ichigo ichie. Designed and built a comprehensive design system, translating it into a functional React application with a focus on intentional networking.",
    summary: "Event memory app — designed the system, built it in React.",
    url: "https://ichie-web.vercel.app/",
    slug: "ichie",
  },
  {
    title: "London Coffee Roasters",
    year: 2026,
    tools: "Visual Design · Figma",
    description:
      "A complete design system for a specialty coffee mobile app, built from scratch. Pastel palette, three-typeface system, 8pt grid, reusable components, and three high-fidelity screens grounded in a Wes Anderson-inspired aesthetic direction.",
    summary: "Coffee app design system — built from scratch in Figma.",
    url: "https://v0-wes-anderson-coffee.vercel.app/",
    slug: "london-coffee-roasters",
  },
  {
    title: "Cafe Immersive Experience",
    year: 2026,
    tools: "Interaction Design · Figma · Miro · Shapes XR · Thinglink · Insta 360 · Meta Quest 3",
    description:
      "A 360-degree immersive video experience set inside a specialty cafe with an in-house roastery. A Birkbeck project exploring spatial interaction and immersive media — part learning, part play, built with some interesting tools along the way.",
    summary: "360° cafe experience — an immersive spatial design project.",
    url: null,
    slug: "cafe-immersive-experience",
  },
];