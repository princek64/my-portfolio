import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>

      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/photo4.jpg",
            alt: "Roman columns",
            // href: "https://unsplash.com/photos/9ZtGyR-0BH8",
          },
          {
            src: "/photos/photo6.jpg",
            alt: "Lake",
            // href: "https://unsplash.com/photos/vXBAPFmBAN4",
          },
          {
            src: "/photos/photo10.jpg",
            alt: "Roman columns",
            // href: "https://unsplash.com/photos/vXBAPFmBAN4"
          },
          {
            src: "/photos/photo11.jpg",
            alt: "Big Ben",
            // href: "https://unsplash.com/photos/vXBAPFmBAN4",
          },
          {
            src: "/photos/photo3.jpg",
            alt: "Sacré-Cœur Basilica",
            // href: "https://unsplash.com/photos/G9Qi4OdweM0",
          },
          {
            src: "/photos/photo5.jpg",
            alt: "Eiffel Tower",
            // href: "https://unsplash.com/photos/the-eiffel-tower-towering-over-the-city-of-paris-OgPuPvPsHLM?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/photo1.jpg", alt: "Roman columns" },
          { src: "/photos/photo2.jpg", alt: "Big Ben" },
          { src: "/photos/photo10.jpg", alt: "Roman columns" },
          { src: "/photos/photo9.jpg", alt: "Big Ben" },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/photo1.jpg", alt: "Roman columns" },
          { src: "/photos/photo2.jpg", alt: "Big Ben" },
          { src: "/photos/photo3.jpg", alt: "Sacré-Cœur Basilica" },
          { src: "/photos/photo4.jpg", alt: "Eiffel Tower" },
          { src: "/photos/photo5.jpg", alt: "Taj Mahal" },
          { src: "/photos/photo6.jpg", alt: "Colosseum" },
          { src: "/photos/photo7.jpg", alt: "Colosseum" },
          { src: "/photos/photo8.jpg", alt: "Colosseum" },
          { src: "/photos/photo9.jpg", alt: "Roman columns" },
          { src: "/photos/photo10.jpg", alt: "Big Ben" },
          { src: "/photos/photo11.jpg", alt: "Sacré-Cœur Basilica" },
        ]}
      />
    </section>
  );
}
