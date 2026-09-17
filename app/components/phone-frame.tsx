import React from "react";
import Image from "next/image";

interface PhoneFrameProps {
  src: string;
  alt: string;
  caption?: string;
}

export function PhoneFrame({ src, alt, caption }: PhoneFrameProps) {
  return (
    <figure className="my-8 flex flex-col items-center">
      <div className="w-full max-w-[280px] rounded-[1.75rem] border border-neutral-300 dark:border-neutral-700 p-1.5">
        <div className="relative overflow-hidden rounded-[1.25rem]">
          <Image
            src={src}
            alt={alt}
            width={750}
            height={1624}
            sizes="280px"
            className="w-full h-auto"
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-xs font-mono text-neutral-500 dark:text-neutral-500 text-center leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
