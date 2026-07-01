export interface Project {
  title: string;
  year: number;
  description: string;
  /** Single-line summary for compact cards (e.g. homepage featured list). */
  summary: string;
  url?: string | null;
  slug?: string;
}

export const projects: Project[] = [
  {
    title: "CCPower – Fleet Management System",
    year: 2026,
    description: "A comprehensive fleet management platform built with Quasar and Directus. I developed modules for digitised inspections, repair orders, and financial tracking.",
    summary: "Fleet management platform — built inspection, repair, and billing modules.",
    url: "https://www.ccpwr.com/",
  },
  {
    title: "Orbit Four",
    year: 2025,
    description:
      "A custom-built domain registrar platform. I developed the robust user and admin portals using Vue, Nuxt, and Tailwind.",
    summary: "Domain registrar platform — built the user and admin portals in Vue/Nuxt.",
    url: "https://www.orbitfour.com/",
  },
  {
    title: "Miller Johnson",
    year: 2024,
    description:
      "An internal workflow management tool built using Next.js and Material UI, designed to enhance operational efficiency.",
    summary: "Internal workflow tool — built with Next.js and Material UI.",
    url: "https://millerjohnson.com/",
  },
  {
    title: "Andy J. Egan Co. – PurchasePointe",
    year: 2024,
    description:
      "I developed the Receiving Module using Angular to automate the internal purchase order process and streamline material tracking.",
    summary: "Purchase order platform — built the Angular receiving module.",
    url: "https://www.andyegan.com/",
  },
  {
    title: "JC Electric, Inc.",
    year: 2023,
    description:
      "A custom internal automation solution built with Quasar and Directus to improve efficiency and reduce manual workloads.",
    summary: "Internal automation tool — built with Quasar and Directus.",
    url: "https://www.jcelectric.online/",
  },
  {
    title: "Andy J. Egan Company",
    year: 2023,
    description:
      "A workforce automation platform built with Angular. I developed modules that streamlined time entry and credentialing for over 300 workers.",
    summary: "Workforce platform — built time entry and credentialing modules in Angular.",
    url: "https://www.andyegan.com/",
  },
  {
    title: "HealthOpx",
    year: 2022,
    description:
      "A frontend platform built with React to facilitate value-based connections between community organizations, hospitals, and insurers.",
    summary: "Healthcare connections platform — built the React frontend.",
    url: "https://healthopx.com/",
  },
  {
    title: "GT Independence",
    year: 2021,
    description:
      "A custom financial services dashboard built with Vue 3 and Tailwind CSS to streamline data management.",
    summary: "Financial services dashboard — built with Vue 3 and Tailwind.",
    url: "https://gtindependence.com/",
  },
  {
    title: "Element 22",
    year: 2021,
    description:
      "A customized business loan application platform featuring an intuitive, responsive UI.",
    summary: "Business loan platform — built the application UI.",
    url: "https://exchange.element22cg.com/",
  },
  {
    title: "The Kalamazoo Promise",
    year: 2020,
    description:
      "A mobile-friendly scholarship portal that automates applications and allows students to track their submission status.",
    summary: "Scholarship portal — built the application and tracking flow.",
    url: "https://portal.kalamazoopromise.com/",
  },
  {
    title: "COVIDINDIA.ORG",
    year: 2020,
    description:
      "A data-driven platform providing real-time COVID-19 updates for India, featuring dynamic data visualizations built with Highcharts.",
    summary: "COVID data platform — built the Highcharts visualizations.",
    url: "https://covidindia.org/",
  },
];

