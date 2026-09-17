import React from "react";
import Image from "next/image";

interface ComparisonSide {
  src: string;
  alt: string;
  label: string;
  caption?: string;
}

interface ComparisonProps {
  left: ComparisonSide;
  right: ComparisonSide;
  plain?: boolean;
}

function Side({ side, plain }: { side: ComparisonSide; plain?: boolean }) {
  return (
    <div className="flex-1">
      <span className="block text-[11px] font-mono uppercase tracking-wide text-neutral-400 dark:text-neutral-500 mb-2">
        {side.label}
      </span>
      <div
        className={
          plain
            ? "relative overflow-hidden rounded-lg"
            : "relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
        }
      >
        <Image
          src={side.src}
          alt={side.alt}
          width={1200}
          height={1200}
          sizes="(max-width: 768px) 100vw, 350px"
          className="w-full h-auto"
        />
      </div>
      {side.caption && (
        <span className="block mt-2 text-xs font-mono text-neutral-500 dark:text-neutral-500 leading-relaxed">
          {side.caption}
        </span>
      )}
    </div>
  );
}

export function Comparison({ left, right, plain }: ComparisonProps) {
  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-5">
      <Side side={left} plain={plain} />
      <Side side={right} plain={plain} />
    </div>
  );
}
