"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface MarkProps {
  variant?: "light" | "dark" | "indigo" | "auto";
  size?: number;
  /** Clips the viewBox to the P letterform only (removes arc + steam).
   *  Use this when pairing the mark inline with text so flex alignment
   *  centres on the glyph, not the full mark bounding box. */
  compact?: boolean;
  className?: string;
}

const vars = {
  light: {
    body: "#111827",
    counter: "white",
    eyes: "#6366f1",
    arc: "#6366f1",
    steam: "#9ca3af",
  },
  dark: {
    body: "white",
    counter: "#111827",
    eyes: "#818cf8",
    arc: "#818cf8",
    steam: "#4b5563",
  },
  indigo: {
    body: "white",
    counter: "#6366f1",
    eyes: "rgba(255,255,255,0.7)",
    arc: "rgba(255,255,255,0.5)",
    steam: "rgba(255,255,255,0.4)",
  },
};

export function PixelPrinceMark({
  variant = "auto",
  size = 52,
  compact = false,
  className,
}: MarkProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // compact clips to the P body (y 0–74), full mark goes to y 88 (arc + steam)
  const viewBoxHeight = compact ? 74 : 88;
  const h = size * (viewBoxHeight / 62);

  // Resolve 'auto' based on the active theme; fall back to light on SSR
  const resolvedVariant =
    variant === "auto"
      ? mounted
        ? resolvedTheme === "dark"
          ? "dark"
          : "light"
        : "light"
      : variant;

  const c = vars[resolvedVariant];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={h}
      viewBox={`0 0 62 ${viewBoxHeight}`}
      role="img"
      aria-label="pixelprince.dev"
      className={className}
    >
      <rect x="0" y="0" width="9" height="72" rx="4" fill={c.body} />
      <path
        d="M 9 4 L 9 40 Q 9 4 44 4 Q 62 4 62 22 Q 62 40 44 40 L 9 40"
        fill={c.body}
      />
      <path
        d="M 16 12 Q 16 34 40 34 Q 54 34 54 22 Q 54 12 40 12 Z"
        fill={c.counter}
      />
      <polygon points="42,4 62,4 42,20" fill={c.counter} />
      <polygon points="38,12 50,12 38,22" fill={c.body} />
      <circle cx="28" cy="26" r="2" fill={c.eyes} />
      <circle cx="38" cy="26" r="2" fill={c.eyes} />
      <path
        d="M 0 80 Q 30 66 62 80"
        fill="none"
        stroke={c.arc}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 48 0 Q 44 -8 48 -16"
        fill="none"
        stroke={c.steam}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M 56 0 Q 52 -9 56 -18"
        fill="none"
        stroke={c.steam}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default PixelPrinceMark;
