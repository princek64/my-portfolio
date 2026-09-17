import React from "react";
import type { ReactNode } from "react";

interface FindingProps {
  children: ReactNode;
  from?: string;
}

export function Finding({ children, from }: FindingProps) {
  return (
    <div className="my-8 pl-4 border-l-2 border-neutral-200 dark:border-neutral-800">
      <div className="text-[#333333] dark:text-[#D4D4D4] leading-relaxed [&>p]:m-0">
        {children}
      </div>
      {from && (
        <span className="block mt-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-500">
          {from}
        </span>
      )}
    </div>
  );
}
