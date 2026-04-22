import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
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
            alt: "Holi - Feswtival of Colors",
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
    </section>
  );
}
