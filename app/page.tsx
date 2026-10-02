import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "./config";

const flagships = [
  {
    title: "GetSociable",
    outcome: "Reviewed a live social events app, redesigned onboarding and discovery, and built interactive prototypes for developer handoff.",
    role: "Design engineer placement",
    stack: ["Figma", "AI prototyping"],
    year: 2026,
    url: "https://getsociable.app/",
    slug: "getsociable",
    capabilities: ["UX Research", "Design Systems", "Figma"],
    actionLabel: "Read about GetSociable",
    image: "/work/logos/getsociable.png",
    imageBackground: "bg-black",
    imageClassName: "object-contain p-1",
  },
  {
    title: "Ichie",
    outcome: "Designed and built a personal CRM for remembering the people you meet at events and following up afterwards.",
    role: "Product design",
    stack: ["React", "Next.js", "Supabase"],
    year: 2026,
    slug: "ichie",
    capabilities: ["Product Design", "Design Systems", "Frontend"],
    actionLabel: "Read the Ichie case study",
    image: "/work/logos/ichie.png",
    imageBackground: "bg-[#111111]",
    imageClassName: "object-cover scale-[4]",
  },
  {
    title: "Community Christmas Map",
    outcome: "Leading design on a map app for Marmalade Trust that helps people find local Christmas events and feel less isolated.",
    role: "Design lead",
    stack: ["Figma", "React", "Leaflet"],
    year: 2026,
    slug: "community-christmas-map",
    capabilities: ["Product Design", "Frontend"],
    actionLabel: "Read the case study",
    image: "/work/logos/marmalade.png",
    imageBackground: "bg-[#193c34]",
    imageClassName: "object-contain p-1",
  },
  {
    title: "Andy J. Egan Company",
    outcome: "Built time tracking and credentialing tools used daily by 300+ field workers.",
    role: "Frontend developer",
    stack: ["Angular"],
    year: 2023,
    slug: "andy-j-egan-company",
    capabilities: ["Frontend"],
    actionLabel: "Explore the workforce platform",
    image: "/work/logos/egan.png",
    imageBackground: "bg-white",
    imageClassName: "object-contain p-1.5",
  }
];

export default function Page() {
  return (
    <section className="animate-page-enter">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="sm:grid sm:grid-cols-[minmax(0,1fr)_160px] sm:items-start sm:gap-8">
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener"
          className="mb-10 block sm:col-start-2 sm:row-start-1 sm:mb-0"
        >
          <Image
            src="/profile.png"
            alt="Profile photo"
            className="mx-auto block rounded-full bg-gray-100 transition-opacity duration-200 hover:opacity-90"
            unoptimized
            width={160}
            height={160}
            priority
          />
          <span className="sr-only">(opens in a new tab)</span>
        </a>

        <div className="sm:col-start-1 sm:row-start-1">
          {/* Status indicator */}
          <div className="flex items-center gap-2 mb-4 text-sm text-neutral-500 dark:text-neutral-400">
            <span>open to design engineering and frontend roles in London</span>
          </div>

          <h1 className="mb-6 text-xl font-medium tracking-tight gradient-text">
            I design it.
            I build it.
          </h1>

          <div className="prose prose-neutral dark:prose-invert mb-8 text-[15px] leading-relaxed">
            <p>
              design engineer in 📍London with six years of frontend
              experience. I design interfaces, build interactive prototypes,
              and ship products with React and Vue.
            </p>
            <p>
              Currently working as a Design Engineer
              at{" "}
              <a href="https://getsociable.app/" target="_blank" rel="noopener">
                GetSociable
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              .
            </p>
          </div>

          <div className="flex gap-4 mb-12">
            <a
              href={socialLinks.email}
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-85 transition-opacity duration-200"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* ── Flagship projects ────────────────────────────────────────── */}
      <div>
        <h2 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-6 tracking-tight">
          featured work
        </h2>
        <div className="flex flex-col gap-3">
          {flagships.map((project) => (
            <div key={project.slug} className="featured-card group">
              <Link
                href={`/work/${project.slug}`}
                className="flex gap-[14px] flex-1 min-w-0"
              >
                <div
                  aria-hidden="true"
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex-shrink-0 relative overflow-hidden border border-neutral-200/50 dark:border-neutral-800/50 ${project.imageBackground}`}
                >
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes={project.slug === "ichie" ? "320px" : "80px"}
                    className={project.imageClassName}
                  />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
                    {project.title}
                  </span>
                  <span className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400 line-clamp-2 mt-0.5">
                    {project.outcome}
                  </span>
                  <span className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-1">
                    {[project.role, ...project.stack].join(" · ")}
                  </span>
                </div>
              </Link>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Visit ${project.title} live project (opens in a new tab)`}
                  className="self-center text-neutral-400 dark:text-neutral-500 hover:text-[#47a3f3] dark:hover:text-[#4c97f8] transition-colors"
                >
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          ))}
        </div>

        <Link
          href="/work"
          className="inline-block text-sm font-medium text-neutral-500 dark:text-neutral-400 mt-8 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
        >
          view all work →
        </Link>
      </div>

      {/* ── Human section ─────────────────────────────────────────────── */}
      <div className="mb-4 mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800">
        <div className="prose prose-neutral dark:prose-invert text-[15px] leading-relaxed mb-8">
          <p>
            When I'm not designing or coding, I'm usually throwing pottery, taking photos, or volunteering at London tech events like Droidcon and React Advanced. I also lead a small volunteer team at{" "}
            <a
              href="https://www.scottishtecharmy.org/"
              target="_blank"
              rel="noopener"
              className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 decoration-[0.1em] hover:decoration-neutral-600 dark:hover:decoration-neutral-400 transition-all text-neutral-800 dark:text-neutral-200"
            >
              Scottish Tech Army
              <span className="sr-only">(opens in a new tab)</span>
            </a>.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 md:grid-rows-2 gap-3 md:h-[340px]">
          <figure className="relative col-span-2 md:col-span-3 md:row-span-2 h-64 md:h-auto overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900">
            <Image
              src="/photos/photo4.jpg"
              alt="Person working on a pottery wheel"
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-3 text-xs font-medium text-white bg-gradient-to-t from-black/60 to-transparent">
              Clay studies
            </figcaption>
          </figure>
          <figure className="relative h-36 md:col-span-2 md:h-auto overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900">
            <Image
              src="/photos/photo11.jpg"
              alt="React Advanced Conference, London"
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.03]"
              sizes="(max-width: 768px) 50vw, 40vw"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 px-3 py-2 text-[11px] font-medium text-white bg-gradient-to-t from-black/60 to-transparent">
              React Advanced
            </figcaption>
          </figure>
          <figure className="relative h-36 md:col-span-2 md:h-auto overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900">
            <Image
              src="/photos/photo5.jpg"
              alt="Person working on a laptop with mountain view"
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.03]"
              sizes="(max-width: 768px) 50vw, 40vw"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 px-3 py-2 text-[11px] font-medium text-white bg-gradient-to-t from-black/60 to-transparent">
              Field notes
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
