import React from "react";
import Image from "next/image";

interface CaseStudyImageProps {
  src: string;
  alt: string;
  caption?: string;
  plain?: boolean;
  width?: number;
  height?: number;
}

export function CaseStudyImage({
  src,
  alt,
  caption,
  plain = false,
  width = 1600,
  height = 1000,
}: CaseStudyImageProps) {
  return (
    <figure className="my-8">
      <div
        className={
          plain
            ? "relative overflow-hidden rounded-lg"
            : "relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
        }
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 768px) 100vw, 700px"
          className="w-full h-auto"
        />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-xs font-mono text-neutral-500 dark:text-neutral-500 text-center leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
