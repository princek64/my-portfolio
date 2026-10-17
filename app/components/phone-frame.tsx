import React from "react";
import Image from "next/image";

interface PhoneFrameProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export function PhoneFrame({
  src,
  alt,
  caption,
  width = 802,
  height = 1626,
}: PhoneFrameProps) {
  return (
    <figure className="my-8 flex flex-col items-center">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 640px) 72vw, 280px"
        className="h-auto w-full max-w-[280px]"
      />
      {caption && (
        <figcaption className="mt-2.5 text-center font-mono text-xs leading-relaxed text-neutral-500 dark:text-neutral-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
