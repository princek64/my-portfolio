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
  },
  {
    title: "Community Christmas Map",
    year: 2026,
    description: "A map app for local Christmas events, created with Marmalade Trust and Scottish Tech Army.",
    summary: "Map app for community Christmas events. Leading design.",
    url: "https://www.marmaladetrust.org/",
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
    title: "CC Power Connect",
    year: 2026,
    description: "Built the fleet management module, pre-trip inspections and repair orders for an internal app used by an electrical contractor's field crews.",
    summary: "Fleet and time tracking app. Built the fleet management module in Vue.",
    url: "https://www.ccpwr.com/",
    slug: "ccpower",
    role: "Frontend developer",
    capabilities: ["Vue 3", "TypeScript", "Quasar"],
    linkLabel: "Company website",
    caseStudy: true,
    logo: {
      src: "/work/logos/ccpower.svg",
      background: "bg-white",
      className: "object-contain p-6",
    },
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
  },
  {
    title: "OrbitFour",
    year: 2025,
    description: "Built most of the frontend and much of the backend for a domain registrar: search, checkout, DNS, transfers, billing and an admin portal.",
    summary: "Domain registrar platform. Built the customer and admin portals in Vue and Nuxt.",
    url: "https://www.orbitfour.com/",
    slug: "orbit-four",
    role: "Full stack developer",
    capabilities: ["Vue", "Nuxt", "Node.js"],
    linkLabel: "Live site",
    caseStudy: true,
    logo: {
      src: "/work/logos/orbit-four.png",
      background: "bg-white",
      className: "object-contain p-8",
    },
  },
  {
    title: "Miller Johnson",
    year: 2024,
    description: "Built the frontend for a law firm's internal eDiscovery tool, replacing spreadsheets for tracking cases, vendor invoices and approvals.",
    summary: "Internal eDiscovery tool. Built the frontend with Next.js and Material UI.",
    url: "https://millerjohnson.com/",
    slug: "miller-johnson",
    role: "Frontend developer",
    capabilities: ["React", "Next.js", "Material UI"],
    linkLabel: "Company website",
    caseStudy: true,
    logo: {
      src: "/work/logos/miller-johnson.png",
      background: "bg-white",
      className: "object-contain p-12",
    },
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
    description: "Built time entry and credentialing tools for field workers, with a focus on reliable everyday use.",
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
