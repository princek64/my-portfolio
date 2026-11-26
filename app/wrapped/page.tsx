import type { Metadata } from "next";
import { wrapFonts } from "./fonts";
import { Wrapped } from "./wrapped";

export const metadata: Metadata = {
  title: "My 2026 in London events",
  description: "A year of London talks, meetups and hackathons, told as a Tube journey.",
  alternates: { canonical: "/wrapped" },
};

export default function WrappedPage() {
  return <Wrapped fonts={wrapFonts} />;
}
