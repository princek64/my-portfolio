export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Orbit Four",
    year: 2024,
    description:
      "Orbit Four is a custom-built domain registrar portal, crafted from scratch using the power of the NUXT framework and Tailwind CSS. This project showcases my expertise in full-stack development, delivering a seamless, responsive user experience with modern web technologies.",
    url: "https://example.com/",
  },
  {
    title: "Miller Johnson",
    year: 2024,
    description:
      "Miller Johnson is an internal customized tool built using NextJS and React Material components, designed to streamline workflows and enhance efficiency for the law firm.",
    url: "https://example.com/",
  },
  {
    title: "Andy Egan",
    year: 2023,
    description:
      "Andy Egan is a custom-built dashboard for a construction company, developed using Angular 18 and Angular Material components for a robust and intuitive user interface.",
    url: "https://example.com/",
  },
  {
    title: "GT Independence",
    year: 2021,
    description:
      "GT Independence is a custom financial services dashboard developed with Vue 3, designed to streamline data management and enhance user interactions.",
    url: "https://example.com/",
  },
  {
    title: "Element 22",
    year: 2021,
    description:
      "Element 22 is a customized loan application platform designed with a responsive UI, providing an intuitive experience for business loan applicants in Michigan.",
    url: "https://example.com/",
  },
  {
    title: "The Kalamazoo Promise",
    year: 2020,
    description:
      "The Kalamazoo Promise platform enables students to apply for scholarships with a responsive UI, while also providing an admin portal, designed to support a large user base and enhance accessibility.",
    url: "https://example.com/",
  },
  {
    title: "COVID.ORG",
    year: 2020,
    description:
      "COVID.ORG is a data-driven platform built using JavaScript and various libraries, featuring dynamic data visualization with HighChart.js to track and present COVID-19 statistics.",
    url: "https://example.com/",
  },
];

