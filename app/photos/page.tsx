import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";
import { PexelsGrid } from "app/components/pexels-grid";
import { getPexelsPhotos } from "app/lib/pexels";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default async function Photos() {
  const pexelsPhotos = await getPexelsPhotos();

  return (
    <section className="animate-page-enter">
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>

      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/photo4.jpg",
            alt: "Pottery Workshop",
          },
          {
            src: "/photos/photo11.jpg",
            alt: "React Advanced Conference, London",
          },
          {
            src: "/photos/photo5.jpg",
            alt: "Working from Mountains",
          },
          {
            src: "/photos/photo10.jpg",
            alt: "Holi - Festival of Colors",
          },
          {
            src: "/photos/photo6.jpg",
            alt: "Meow Intern",
          },
          {
            src: "/photos/photo21.jpg",
            alt: "Snowboarding in Gulmarg",
          },
        ]}
      />

      {pexelsPhotos.length > 0 && (
        <div className="mt-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            more of my shots on{" "}
            <a
              href="https://www.pexels.com/@prince-kukreja-166602331/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-neutral-700 dark:hover:text-neutral-300"
            >
              Pexels
            </a>
          </p>

          <PexelsGrid photos={pexelsPhotos} />
        </div>
      )}
    </section>
  );
}
