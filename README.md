# My Portfolio

A modern, fast, and responsive portfolio built with [Next.js](https://nextjs.org/), [Vercel](https://vercel.com/), and [Tailwind CSS](https://tailwindcss.com/) to showcase my projects and skills effectively.

This portfolio leverages the flexibility of Next.js for dynamic routing, the styling power of Tailwind CSS, and the ease of deployment with Vercel for a seamless user experience.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) for fast and scalable web applications.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS design.
- **Fonts**: [Vercel Geist Font](https://vercel.com/font) for clean typography.
- **Analytics**: [Vercel Web Analytics](https://vercel.com/docs/speed-insights) for performance insights.
- **Deployment**: [Vercel](https://vercel.com/) for quick and reliable hosting.

## Features

- **Markdown with MDX**: Write blog posts and integrate custom React components seamlessly.
- **Light and Dark Mode**: A built-in toggle for better accessibility and user preference.
- **SEO Optimization**: Includes sitemap generation, robots.txt, and JSON-LD schema for enhanced search engine visibility.
- **Dynamic Feeds**: Automatically generate RSS, Atom, and JSON feeds for content distribution.
- **Interactive Embeds**: Support for embedding rich content like tweets and YouTube videos.
- **Open Graph Images**: Generate dynamic OG images for improved social media sharing.
- **Performance Tracking**: Utilize Vercel Analytics to monitor site performance.
- **Customizable Image Grids**: Showcase projects and photos in a grid layout with captions.

## Installation

To build this portfolio, I used [pnpm](https://pnpm.io/installation) for dependency management. Ensure you have it installed on your system.

Clone the repository and install dependencies:

```bash
git clone <repository-url> my-portfolio
cd my-portfolio
pnpm install

Start the development server:

```
pnpm dev
```

The server will be running at [http://localhost:3000](http://localhost:3000).

## Configuration

1. Modify site metadata and social links in app/config.ts for personalized branding and SEO.
2. Add or update routes in app/sitemap.ts for better SEO coverage.
3. Add your blog posts and content in the /content folder.


## Licence

Nextfolio is open-source and released under the MIT License.
