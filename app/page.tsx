import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "./config";
import { projects } from "./projects/project-data";
import { designs } from "./design/design-data";
import { AbstractArt } from "./components/AbstractArt";

const skills = [
  "design systems",
  "frontend interfaces",
  "ui/ux",
  "accessibility",
];

export default function Page() {
  // Combine projects and designs for featured selection
  // Ichie is specifically requested to be featured from the design section
  const featuredItems = [
    ...projects,
    ...designs.filter(d => d.slug === "ichie")
  ];
  
  const featured = [...featuredItems].sort((a, b) => b.year - a.year).slice(0, 3);

  return (
    <section className="animate-page-enter">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 hover:opacity-90 transition-opacity duration-200"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      {/* Status indicator */}
      <div className="flex items-center gap-2 mb-4 text-sm text-neutral-500 dark:text-neutral-400">
        <span className="pulse-dot" aria-hidden="true" />
        <span>open to new roles in London</span>
      </div>

      <h1 className="mb-6 text-xl font-medium tracking-tight gradient-text">
        hi, i'm prince.
      </h1>

      <div className="prose prose-neutral dark:prose-invert mb-8 text-[15px] leading-relaxed">
        <p>
          design engineer based in📍London. six years building interfaces,
          now finishing an MA in Digital Media Design at Birkbeck to sharpen
          the craft.
        </p>
      </div>

      {/* ── Skills strip ─────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-10">
        {skills.map((skill) => (
          <span key={skill} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>

      {/* ── Featured projects ────────────────────────────────────────── */}
      <div className="mb-10">
        <h2 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-4 tracking-tight">
          featured work
        </h2>
        <div className="flex flex-col gap-3">
          {featured.map((project, index) => {
            const isDesign = 'tools' in project;
            const baseRoute = isDesign ? "/design" : "/projects";
            const slug =
              project.slug ||
              project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return (
              <Link
                key={slug}
                href={`${baseRoute}/${slug}`}
                className="featured-card group"
              >
                {/* Thumbnail */}
                <div
                  aria-hidden="true"
                  className="w-14 h-14 rounded-lg flex-shrink-0 relative overflow-hidden border border-neutral-200/50 dark:border-neutral-800/50 bg-neutral-50 dark:bg-[#151515] group/image"
                >
                  <AbstractArt index={index} />
                </div>
                {/* Text */}
                <div className="flex flex-col justify-center min-w-0">
                  <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
                    {project.title}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5">
                    {project.description}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <Link
          href="/projects"
          className="inline-block text-xs font-medium text-neutral-400 dark:text-neutral-500 mt-4 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-200"
        >
          view all projects →
        </Link>
      </div>

      {/* ── Community note ───────────────────────────────────────────── */}
      <div className="mb-4 pl-4 border-l-2 border-neutral-200 dark:border-neutral-800">
        <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed">
          volunteered at Droidcon London, React Advanced, AI Dev Con
        </p>
      </div>
    </section>
  );
}
