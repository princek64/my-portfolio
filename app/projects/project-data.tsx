export interface Project {
  title: string;
  year: number;
  description: string;
  url?: string | null;
}

export const projects: Project[] = [
  {
    title: "Orbit Four",
    year: 2024,
    description:
      "OrbitFour is a custom-built domain registrar platform crafted from scratch. My focus was on creating a custom user and admin portal, where I leveraged my expertise in Vue, Nuxt, and Tailwind to build a mobile-friendly, robust user interface. I also collaborated with the backend team using NodeJS to ensure smooth integration.",
    url: "https://www.orbitfour.com/",
  },
  {
    title: "Miller Johnson",
    year: 2024,
    description:
      "Miller Johnson is an internal customized tool built using NextJS and React Material components, designed to streamline workflows and enhance efficiency for the law firm.",
    url: null,
  },
  {
    title: "Andy J. Egan Co. – PurchasePointe",
    year: 2024,
    description:
      "I contributed to automating Andy J. Egan's internal PO process by developing the Receiving Module, one of the PO templates in the PurchasePointe solution. Using Angular and Angular Material, I helped streamline the workflow with features like receipt uploads, photos, and material lists, making the process faster and more efficient.",
    url: null,
  },
  {
    title: "JC Electric, Inc.",
    year: 2023,
    description:
      "I was part of the JC Electric project, where we built a custom solution to automate their internal processes. Using Quasar (a Vue framework) and Directus, I contributed to developing an intuitive system that streamlined operations, improving efficiency and reducing manual work for the construction company.",
    url: null,
  },
  {
    title: "Andy J. Egan Company",
    year: 2023,
    description:
      "I contributed to the development of EganHub, a custom solution to automate workforce and job assignments for Andy J. Egan Company. My focus was on the EganHub and ToolPointe modules, where I developed a robust and intuitive user interface using Angular. This solution streamlined workflows, tracked employee skills, and simplified time entry, training, and credentialing, enhancing efficiency and user experience for over 300 workers.",
    url: null,
  },

  {
    title: "HealthOpx",
    year: 2022,
    description:
      "I worked on this platform as a frontend developer, creating user-friendly interfaces with React to foster value-based connections between community organizations, hospitals, and insurers.",
    url: null,
  },
  {
    title: "GT Independence",
    year: 2021,
    description:
      "For GT Independence, I leveraged my expertise in Vue 3 and Tailwind CSS to build a custom financial services dashboard. My contributions focused on creating a streamlined data management system and enhancing user interactions, ensuring a seamless, responsive experience for users.",
    url: null,
  },
  {
    title: "Element 22",
    year: 2021,
    description:
      "As a frontend developer for Element 22, I contributed to building a customized loan application platform with a responsive UI. My work focused on creating an intuitive, user-friendly experience for business loan applicants in Michigan, ensuring seamless navigation and functionality across devices.",
    url: null,
  },
  {
    title: "The Kalamazoo Promise",
    year: 2020,
    description:
      "I contributed to the development of a custom portal for Kalamazoo Promise, aimed at streamlining the scholarship application process. My focus was on building a user-friendly mobile interface, collaborating closely with the design and backend teams to ensure a smooth, intuitive experience. The new portal improved outreach, automated application submissions, and allowed students, staff, and partner schools to easily track scholarship status and manage student records.",
    url: null,
  },
  {
    title: "COVIDINDIA.ORG",
    year: 2020,
    description:
      "Covidindia.org, a data-driven platform designed to track and present real-time COVID-19 updates for India, using JavaScript and various libraries. I led the team to ensure the timely delivery of the platform, which features dynamic data visualizations with HighChart.js to showcase statewise, districtwise cases, treatments, vaccines, and more.",
    url: null,
  },
];

