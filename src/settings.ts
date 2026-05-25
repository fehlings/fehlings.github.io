export const profile = {
  fullName: "Luca Fehlings",
  title: "PostDoc",
  institute: "Technical University of Munich",
  author_name: "Luca Fehlings", // Author name to be highlighted in the papers section
  research_areas: [
    {
      title: "Modeling",
      description:
        "SPICE/VerilogA phyiscs-based compact models of semiconductor logic and memory devices.",
      field: "physics",
    },
    {
      title: "Characterization",
      description:
        "Parameter extraction and reliability characterization of semiconductor devices.",
      field: "physics",
    },
    {
      title: "Design",
      description:
        "Physics-informed design of reliable circuits and memory macros.",
      field: "physics",
    },
  ],
  knowsAbout: [
    "compact modeling",
    "memory devices",
    "logic devices",
    "semiconductor device characterization",
    "circuit design",
    "ferroelectric HfO2",
  ],
};

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
  email: "",
  linkedin: "",
  x: "",
  bluesky: "",
  github: "https://github.com/fehlings",
  gitlab: "",
  scholar: "https://scholar.google.com/citations?user=oP7fZioAAAAJ",
  inspire: "",
  arxiv: "https://arxiv.org/search/?searchtype=author&query=Fehlings%2C+L",
  orcid: "https://orcid.org/0000-0003-0993-5593",
  scopus: "https://www.scopus.com/authid/detail.uri?authorId=57966665700",
};

export const template = {
  website_url: "https://fehlings.github.io", // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
  menu_left: false,
  transitions: true,
  lightTheme: "light", // Select one of the Daisy UI Themes or create your own
  darkTheme: "dark", // Select one of the Daisy UI Themes or create your own
  excerptLength: 200,
  postPerPage: 5,
  base: "", // Repository name starting with /
};

export const seo = {
  default_title: "Luca Fehlings, PostDoc @ TUM",
  default_description:
    "PostDoc at the Technical University of Munich. Compact modeling, electrical characterization and design of memory devices and circuits.",
  default_image: "/assets/profile_pictures.jpg",
};
