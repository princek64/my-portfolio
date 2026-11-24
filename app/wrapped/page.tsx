import type { Metadata } from "next";
import { wrapFonts } from "./fonts";
import { Wrapped } from "./wrapped";

export const metadata: Metadata = {
  title: "2026 Wrap",
  description: "Turn your year of London meetups, talks and hackathons into Tube-style slides for LinkedIn and X.",
  alternates: { canonical: "/wrapped" },
};

export default function WrappedPage() {
  return <Wrapped fonts={wrapFonts} />;
}
