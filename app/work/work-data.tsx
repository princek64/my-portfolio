export interface WorkItem {
  title: string;
  year: number;
  description: string;
  summary: string;
  url?: string | null;
  slug?: string;
  role?: string;
  linkLabel?: string;
  capabilities: string[];
  caseStudy?: boolean;
  logo?: {
    src: string;
    background: string;
    className: string;
  };
}

export const workItems: WorkItem[] = [
  {
    title: "GetSociable",
    year: 2026,
    description: "Reviewed a live social events app, redesigned onboarding and discovery, and built interactive prototypes for developer handoff.",
    summary: "UX audit for a live consumer mobile app.",
    url: "https://getsociable.app/",
    slug: "getsociable",
    role: "Design engineer placement",
    capabilities: ["UX Research", "Design Systems", "AI Prototyping"],
    linkLabel: "Live app",
    caseStudy: true,
    logo: {
      src: "/work/logos/getsociable.png",
      background: "bg-black",
      className: "object-contain p-8",
    },
  },
  {
    title: "Ichie",
    year: 2026,
    description: "Designed and built a personal CRM for remembering the people you meet at events and following up afterwards.",
    summary: "Event memory app. Designed the system and built it in React.",
    url: "https://ichie-web.vercel.app/",
    slug: "ichie",
    role: "Product design and build",
    capabilities: ["React", "Next.js", "Supabase"],
    linkLabel: "Live app",
    caseStudy: true,
    logo: {
      src: "/work/logos/ichie.png",
      background: "bg-[#111111]",
      className: "object-contain scale-[4]",
    },
  },
  {
    title: "Community Christmas Map",
    year: 2026,
    description: "Leading design on a map app for Marmalade Trust that helps people find local Christmas events and feel less isolated. Built with Scottish Tech Army.",
    summary: "Map app for community Christmas events. Leading design.",
    url: null,
    slug: "community-christmas-map",
    role: "Design lead",
    capabilities: ["Figma", "React", "Leaflet"],
    linkLabel: "Organisation website",
    caseStudy: true,
    logo: {
      src: "/work/logos/marmalade.png",
      background: "bg-[#193c34]",
      className: "object-contain p-6",
    },
  },
  {
    title: "CCPower – Fleet Management System",
    year: 2026,
    description: "Gives fleet teams one place to manage inspections, repairs, and finances. Built for clearer day-to-day operations.",
    summary: "Fleet management platform. Built inspection, repair, and billing modules.",
    url: "https://www.ccpwr.com/",
    slug: "ccpower",
    capabilities: ["Frontend"],
    linkLabel: "Company website",
  },
  {
    title: "London Coffee Roasters",
    year: 2026,
    description: "A polished mobile coffee app concept for people discovering speciality roasters. Built around a warm, distinctive visual system.",
    summary: "Coffee app design system. Built from scratch in Figma.",
    url: "https://v0-wes-anderson-coffee.vercel.app/",
    slug: "london-coffee-roasters",
    role: "MA project, Birkbeck",
    capabilities: ["Visual Design", "Design Systems"],
    linkLabel: "Live prototype",
    caseStudy: true,
  },
  {
    title: "Cafe Immersive Experience",
    year: 2026,
    description: "An immersive cafe experience that explores how people move through and interact with a space. Created as part of an MA project at Birkbeck.",
    summary: "360° cafe experience. An immersive spatial design project.",
    url: null,
    slug: "cafe-immersive-experience",
    role: "MA project, Birkbeck",
    capabilities: ["Interaction Design", "Prototyping"],
    caseStudy: true,
  },
  {
    title: "Orbit Four",
    year: 2025,
    description: "Lets customers and administrators manage domains with confidence. Built for a smoother registrar experience.",
    summary: "Domain registrar platform. Built the user and admin portals in Vue and Nuxt.",
    url: "https://www.orbitfour.com/",
    slug: "orbit-four",
    capabilities: ["Frontend", "Full Stack"],
    linkLabel: "Live site",
  },
  {
    title: "Miller Johnson",
    year: 2024,
    description: "Helps internal teams move work through their day with less friction. Designed for clearer operational workflows.",
    summary: "Internal workflow tool. Built with Next.js and Material UI.",
    url: "https://millerjohnson.com/",
    slug: "miller-johnson",
    capabilities: ["Frontend"],
    linkLabel: "Company website",
  },
  {
    title: "Andy J. Egan Co. – PurchasePointe",
    year: 2024,
    description: "Helps purchasing teams receive materials and track orders with less manual work. Part of Andy J. Egan's internal platform.",
    summary: "Purchase order platform. Built the Angular receiving module.",
    url: "https://www.andyegan.com/",
    slug: "andy-j-egan-co-purchasepointe",
    capabilities: ["Frontend"],
    linkLabel: "Company website",
  },
  {
    title: "JC Electric, Inc.",
    year: 2023,
    description: "Reduces repetitive admin work for internal teams. Built to make everyday operations more efficient.",
    summary: "Internal automation tool. Built with Quasar and Directus.",
    url: "https://www.jcelectric.online/",
    slug: "jc-electric-inc",
    capabilities: ["Frontend"],
    linkLabel: "Company website",
  },
  {
    title: "Andy J. Egan Company",
    year: 2023,
    description: "Time tracking and credentialing tools used daily by 300+ field workers. Built for a more reliable workforce workflow.",
    summary: "Workforce platform. Built time entry and credentialing modules in Angular.",
    url: "https://www.andyegan.com/",
    slug: "andy-j-egan-company",
    capabilities: ["Frontend"],
    linkLabel: "Company website",
  },
  {
    title: "HealthOpx",
    year: 2022,
    description: "Connects community organisations, hospitals, and insurers around better care. Built to support value-based partnerships.",
    summary: "Healthcare connections platform. Built the React frontend.",
    url: "https://healthopx.com/",
    slug: "healthopx",
    capabilities: ["Frontend"],
    linkLabel: "Live site",
  },
  {
    title: "GT Independence",
    year: 2021,
    description: "Gives financial services teams a simpler way to manage their data. Built for faster, clearer daily decisions.",
    summary: "Financial services dashboard. Built with Vue 3 and Tailwind.",
    url: "https://gtindependence.com/",
    slug: "gt-independence",
    capabilities: ["Frontend"],
    linkLabel: "Company website",
  },
  {
    title: "Element 22",
    year: 2021,
    description: "Makes business loan applications easier to complete on any device. Designed around a clear, responsive journey.",
    summary: "Business loan platform. Built the application UI.",
    url: "https://exchange.element22cg.com/",
    slug: "element-22",
    capabilities: ["Frontend"],
    linkLabel: "Live site",
  },
  {
    title: "The Kalamazoo Promise",
    year: 2020,
    description: "Helps students apply for scholarships and track each submission. Designed to make an important process feel straightforward.",
    summary: "Scholarship portal. Built the application and tracking flow.",
    url: "https://portal.kalamazoopromise.com/",
    slug: "the-kalamazoo-promise",
    capabilities: ["Frontend"],
    linkLabel: "Live site",
  },
  {
    title: "COVIDINDIA.ORG",
    year: 2020,
    description: "Made live COVID-19 data easier for people in India to understand. Presented key updates through clear visualisations.",
    summary: "COVID data platform. Built the Highcharts visualisations.",
    url: "https://covidindia.org/",
    slug: "covidindia-org",
    capabilities: ["Frontend"],
    linkLabel: "Live site",
  },
];

export function getWorkSlug(item: WorkItem) {
  return item.slug || item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export const caseStudyItems = workItems.filter((item) => item.caseStudy);
export const otherItems = workItems.filter((item) => !item.caseStudy);
