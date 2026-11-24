"use client";

import { SLIDE_H, SLIDE_W } from "./slides/parts";

/** One slide as a 1080 × 1350 PNG (4:5, LinkedIn and X). Made in the browser; nothing is uploaded. */
export async function slideToPng(node: HTMLElement): Promise<string> {
  const { toPng } = await import("html-to-image");
  return toPng(node, { width: SLIDE_W, height: SLIDE_H, pixelRatio: 2, cacheBust: true });
}

/** All slides as one PDF, the format LinkedIn uses for a swipeable carousel. */
export async function slidesToPdf(pngs: string[]): Promise<Blob> {
  const { jsPDF } = await import("jspdf");
  const w = SLIDE_W * 2;
  const h = SLIDE_H * 2;
  const pdf = new jsPDF({ unit: "px", format: [w, h], orientation: "portrait", hotfixes: ["px_scaling"], compress: true });
  pngs.forEach((png, i) => {
    if (i > 0) pdf.addPage([w, h], "portrait");
    pdf.addImage(png, "PNG", 0, 0, w, h);
  });
  return pdf.output("blob");
}

export function saveFile(href: string, filename: string) {
  const link = document.createElement("a");
  link.href = href;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function fileSlug(name: string): string {
  return (name.trim() || "my").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "my";
}
