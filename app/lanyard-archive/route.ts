import { metaData } from "../config";

export const dynamic = "force-static";

const title = "The Lanyard Archive";
const description = "Pick up and explore the conference passes and lanyards Prince Kukreja collected around London.";
const archive = "https://the-lanyard-archive.vercel.app/";
const canonical = new URL("/lanyard-archive", metaData.baseUrl).href;
const cover = new URL("/work/lanyard-archive/exhibition.jpg", metaData.baseUrl).href;

// Give the separately deployed exhibition the viewport and its own scroll surface.
export function GET() {
  return new Response(`<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title} | Prince Kukreja</title>
    <meta name="description" content="${description}">
    <link rel="canonical" href="${canonical}">
    <link rel="preconnect" href="${archive}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${cover}">
    <meta property="og:image:alt" content="The Solana electronic badge on display in The Lanyard Archive">
    <meta name="twitter:card" content="summary_large_image">
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0;
        height: 100vh;
        height: 100dvh;
        display: grid;
        grid-template-rows: auto minmax(0, 1fr);
        background: #ffdf60;
        color: #202020;
        font: 500 14px/1.4 system-ui, sans-serif;
      }
      nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #fffcf5;
        border-bottom: 1px solid #202020;
        padding-inline: clamp(12px, 3vw, 32px);
      }
      a { display: inline-flex; align-items: center; min-height: 44px; color: inherit; text-decoration: none; }
      a:hover { text-decoration: underline; }
      a:focus-visible { outline: 2px solid currentColor; outline-offset: -2px; }
      main { min-height: 0; }
      iframe { display: block; width: 100%; height: 100%; border: 0; }
    </style>
  </head>
  <body>
    <nav aria-label="Portfolio">
      <a href="/work"><span aria-hidden="true">←&nbsp;</span> Back to work</a>
      <a href="${archive}">Open standalone <span aria-hidden="true">&nbsp;↗</span></a>
    </nav>
    <main aria-label="${title}">
      <iframe title="${title}" src="${archive}" allow="fullscreen"></iframe>
    </main>
  </body>
</html>`, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
