"use client";

import { useState } from "react";
import { ImageGrid } from "app/components/image-grid";
import type { PexelsPhoto } from "app/lib/pexels";

const PAGE_SIZE = 12;

export function PexelsGrid({ photos }: { photos: PexelsPhoto[] }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visiblePhotos = photos.slice(0, visibleCount);
  const hasMore = visibleCount < photos.length;

  return (
    <>
      <ImageGrid
        columns={3}
        images={visiblePhotos.map((photo) => ({
          src: photo.url,
          alt: photo.alt,
          href: photo.pexelsUrl,
        }))}
      />

      {hasMore && (
        <button
          type="button"
          onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
          className="block mx-auto text-xs font-medium px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-200"
        >
          Load more
        </button>
      )}
    </>
  );
}
