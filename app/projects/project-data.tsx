export interface Project {
  title: string;
  year: number;
  description: string;
  url?: string | null;
  slug?: string;
}

export const projects: Project[] = [
  {
    title: "CCPower – Fleet Management System",
    year: 2026,
    description: "A comprehensive fleet management platform built with Quasar and Directus. I developed modules for digitised inspections, repair orders, and financial tracking.",
    url: "https://www.ccpwr.com/",
  },
  {
    title: "Orbit Four",
    year: 2025,
    description:
      "A custom-built domain registrar platform. I developed the robust user and admin portals using Vue, Nuxt, and Tailwind.",
    url: "https://www.orbitfour.com/",
  },
  {
    title: "Miller Johnson",
    year: 2024,
    description:
      "An internal workflow management tool built using Next.js and Material UI, designed to enhance operational efficiency.",
    url: "https://millerjohnson.com/",
  },
  {
    title: "Andy J. Egan Co. – PurchasePointe",
    year: 2024,
    description:
      "I developed the Receiving Module using Angular to automate the internal purchase order process and streamline material tracking.",
    url: "https://www.andyegan.com/",
  },
  {
    title: "JC Electric, Inc.",
    year: 2023,
    description:
      "A custom internal automation solution built with Quasar and Directus to improve efficiency and reduce manual workloads.",
    url: "https://www.jcelectric.online/",
  },
  {
    title: "Andy J. Egan Company",
    year: 2023,
    description:
      "A workforce automation platform built with Angular. I developed modules that streamlined time entry and credentialing for over 300 workers.",
    url: "https://www.andyegan.com/",
  },
  {
    title: "HealthOpx",
    year: 2022,
    description:
      "A frontend platform built with React to facilitate value-based connections between community organizations, hospitals, and insurers.",
    url: "https://healthopx.com/",
  },
  {
    title: "GT Independence",
    year: 2021,
    description:
      "A custom financial services dashboard built with Vue 3 and Tailwind CSS to streamline data management.",
    url: "https://gtindependence.com/",
  },
  {
    title: "Element 22",
    year: 2021,
    description:
      "A customized business loan application platform featuring an intuitive, responsive UI.",
    url: "https://exchange.element22cg.com/",
  },
  {
    title: "The Kalamazoo Promise",
    year: 2020,
    description:
      "A mobile-friendly scholarship portal that automates applications and allows students to track their submission status.",
    url: "https://portal.kalamazoopromise.com/",
  },
  {
    title: "COVIDINDIA.ORG",
    year: 2020,
    description:
      "A data-driven platform providing real-time COVID-19 updates for India, featuring dynamic data visualizations built with Highcharts.",
    url: "https://covidindia.org/",
  },
];

