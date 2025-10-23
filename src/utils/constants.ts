import { FooterAboutTranslationKeys } from "@/interfaces/footer.interface";

const constants = {
  locales: [
    { code: "en" as const, label: "English", icon: "🇬🇧" },
    { code: "de" as const, label: "Deutsch", icon: "🇩🇪" },
    { code: "fr" as const, label: "français", icon: "🇫🇷" },
  ],
  navItems: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
  aboutLinks: [
    { href: "#", label: "about.privacy" },
    { href: "#", label: "about.cookie" },
    { href: "#", label: "about.imprint" },
  ] as { href: string; label: FooterAboutTranslationKeys }[],
  domainDetails: [
    {
      domain: "experience",
      icon: "IconTrend",
      detailNumber: 16,
    },
    {
      domain: "projects",
      icon: "IconCode",
      detailNumber: 15,
    },
    {
      domain: "technologies",
      icon: "IconDatabase",
      detailNumber: 20,
    },
    {
      domain: "impact",
      icon: "IconWeb",
      detailNumber: 6,
    },
  ],

  mainProjects: [
    {
      year: 2024,
      icon: "IconRobot",
      translationKey: "project1",
      skills: ["Python", "TensorFlow", "NLP", "Flask"],
      achievmentsCount: 1,
    },
    {
      year: 2018,
      icon: "IconShield",
      translationKey: "project2",
      skills: ["Python", "Machine Learning", "AWS", "Docker"],
      achievmentsCount: 1,
    },
    {
      year: 2017,
      icon: "IconTrend",
      translationKey: "project3",
      skills: ["R", "SQL", "R Shiny", "Statistical Modeling"],
      achievmentsCount: 1,
    },
  ],
  skills: [
    "Machine Learning",
    "Deep Learning & AI",
    "Cloud Computing",
    "Data visualisation",
    "Business Intelligence",
    "Statistical modelling",
    "Reporting",
    "LLM",
    "Analytics",
    "MLOps",
    "Data Analysis",
    "LLMOps",
    "Data Cleaning",
  ],
  callToActions: ["about", "projects", "contact"],
};

export default constants;
