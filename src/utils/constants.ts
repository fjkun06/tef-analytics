import { FooterAboutTranslationKeys } from "@/interfaces/footer.interface";

const constants = {
  navItems: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
  aboutLinks: [
    { href: "/privacy", label: "about.privacy" },
    { href: "/cookies", label: "about.cookie" },
    { href: "/imprint", label: "about.imprint" },
  ] as { href: string; label: FooterAboutTranslationKeys }[],
  domainDetails: [
    {
      domain: "experience",
      icon: "IconTrend",
      detailNumber: 10,
    },
    {
      domain: "projects",
      icon: "IconCode",
      detailNumber: 15,
    },
    {
      domain: "technologies",
      icon: "IconDatabase",
      detailNumber: 15,
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
  impressum: {
    lowerHalf: [
      {
        index: 4,
        titleTranslationKey: "liabilityForContent",
      },
      {
        index: 5,
        titleTranslationKey: "liabilityForLinks",
      },
      {
        index: 6,
        titleTranslationKey: "copyright",
      },
    ],
  },
  privacy: {
    bodySections: [
      {
        index: 3,
        titleKey: "threeTitle",
        subtitleKey: "threeSubtitle",
        listItems: [
          "threePointOne",
          "threePointTwo",
          "threePointThree",
          "threePointFour",
        ],
      },
      {
        index: 4,
        titleKey: "fourTitle",
        subtitleKey: "fourSubtitle",
        listItems: ["fourPointOne", "fourPointTwo", "fourPointThree", "fourPointFour"],
      },
      {
        index: 5,
        titleKey: "fiveTitle",
        subtitleKey: "fiveSubtitle",
        listItems: [
          "fivePointOne",
          "fivePointTwo",
          "fivePointThree",
          "fivePointFour",
          "fivePointFive",
          "fivePointSix",
          "fivePointSeven",
        ],
      },
    ],
  },

  cookies: {
    headerSections: [
      {
        titleKey: "oneTitle",
        descriptionKey: "oneDescription",
      },
      {
        titleKey: "twoTitle",
        descriptionKey: "twoDescription",
      },
    ],
    bodySections: [
      {
        titleKey: "threePointOneTitle",
        descriptionKey: "threePointOneSubtitle",
      },
      {
        titleKey: "threePointTwoTitle",
        descriptionKey: "threePointTwoSubtitle",
      },
      {
        titleKey: "threePointThreeTitle",
        descriptionKey: "threePointThreeSubtitle",
      },
    ],
    footerSections: [
      {
        titleKey: "fourTitle",
        descriptionKey: "fourSubtitle",
        ClassName: "mt-2 text-slate-500 italic",
      },
      {
        titleKey: "fiveTitle",
        descriptionKey: "fiveSubtitle",
        ClassName: "",
      },
    ],
  },

  projects: {
    projectCardData: [
      {
        title: "Predictive Maintenance for Industrial Equipment",
        projectTimeSpan: "04/2022 - 06/2022",
        shortDescription:
          "Custom LLM fine-tuned on legal domain with RAG-enhanced document processing pipeline.",
        categories: ["Predictive Maintenance", "Predictive", "Maintenance"],
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Reacty",
          "TypeScripty",
          "Tailwind CSSy",
        ],
        descriptionItems: [
          "Assist in predictive analytics tools screening",
          "Design and implement predictive models with R and SAS",
          "Provide predictive analytics expertise",
          "Support platform development and deployment",
        ],
        achievementItems: [
          "Predictive modeling",
          "Weight optimization",
          "Volume forecasting",
        ],
        practicalWorkItems: [
          "Built real-time invoice assessment system",
          "Optimized API data processing",
          "Implemented ML algorithms for fraud detection",
        ],
      },
      {
        title: "Predictive Maintenance for Industrial Equipment",
        projectTimeSpan: "04/2022 - 06/2022",
        shortDescription:
          "Custom LLM fine-tuned on legal domain with RAG-enhanced document processing pipeline.",
        categories: ["Predictive Maintenance", "Predictive", "Maintenance"],
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Reacty",
          "TypeScripty",
          "Tailwind CSSy",
        ],
        descriptionItems: [
          "Assist in predictive analytics tools screening",
          "Design and implement predictive models with R and SAS",
          "Provide predictive analytics expertise",
          "Support platform development and deployment",
        ],
        achievementItems: [
          "Predictive modeling",
          "Weight optimization",
          "Volume forecasting",
        ],
        practicalWorkItems: [
          "Built real-time invoice assessment system",
          "Optimized API data processing",
          "Implemented ML algorithms for fraud detection",
        ],
      },
      {
        title: "Predictive Maintenance for Industrial Equipment",
        projectTimeSpan: "04/2022 - 06/2022",
        shortDescription:
          "Custom LLM fine-tuned on legal domain with RAG-enhanced document processing pipeline.",
        categories: ["Predictive Maintenance", "Predictive", "Maintenance"],
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Reacty",
          "TypeScripty",
          "Tailwind CSSy",
        ],
        descriptionItems: [
          "Assist in predictive analytics tools screening",
          "Design and implement predictive models with R and SAS",
          "Provide predictive analytics expertise",
          "Support platform development and deployment",
        ],
        achievementItems: [
          "Predictive modeling",
          "Weight optimization",
          "Volume forecasting",
        ],
        practicalWorkItems: [
          "Built real-time invoice assessment system",
          "Optimized API data processing",
          "Implemented ML algorithms for fraud detection",
        ],
      },
      {
        title: "Predictive Maintenance for Industrial Equipment",
        projectTimeSpan: "04/2022 - 06/2022",
        shortDescription:
          "Custom LLM fine-tuned on legal domain with RAG-enhanced document processing pipeline.",
        categories: ["Predictive Maintenance", "Predictive", "Maintenance"],
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Reacty",
          "TypeScripty",
          "Tailwind CSSy",
        ],
        descriptionItems: [
          "Assist in predictive analytics tools screening",
          "Design and implement predictive models with R and SAS",
          "Provide predictive analytics expertise",
          "Support platform development and deployment",
        ],
        achievementItems: [
          "Predictive modeling",
          "Weight optimization",
          "Volume forecasting",
        ],
        practicalWorkItems: [
          "Built real-time invoice assessment system",
          "Optimized API data processing",
          "Implemented ML algorithms for fraud detection",
        ],
      },
      {
        title: "Predictive Maintenance for Industrial Equipment",
        projectTimeSpan: "04/2022 - 06/2022",
        shortDescription:
          "Custom LLM fine-tuned on legal domain with RAG-enhanced document processing pipeline.",
        categories: ["Predictive Maintenance", "Predictive", "Maintenance"],
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Reacty",
          "TypeScripty",
          "Tailwind CSSy",
        ],
        descriptionItems: [
          "Assist in predictive analytics tools screening",
          "Design and implement predictive models with R and SAS",
          "Provide predictive analytics expertise",
          "Support platform development and deployment",
        ],
        achievementItems: [
          "Predictive modeling",
          "Weight optimization",
          "Volume forecasting",
        ],
        practicalWorkItems: [
          "Built real-time invoice assessment system",
          "Optimized API data processing",
          "Implemented ML algorithms for fraud detection",
        ],
      },
      {
        title: "Predictive Maintenance for Industrial Equipment",
        projectTimeSpan: "04/2022 - 06/2022",
        shortDescription:
          "Custom LLM fine-tuned on legal domain with RAG-enhanced document processing pipeline.",
        categories: ["Predictive Maintenance", "Predictive", "Maintenance"],
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Reacty",
          "TypeScripty",
          "Tailwind CSSy",
        ],
        descriptionItems: [
          "Assist in predictive analytics tools screening",
          "Design and implement predictive models with R and SAS",
          "Provide predictive analytics expertise",
          "Support platform development and deployment",
        ],
        achievementItems: [
          "Predictive modeling",
          "Weight optimization",
          "Volume forecasting",
        ],
        practicalWorkItems: [
          "Built real-time invoice assessment system",
          "Optimized API data processing",
          "Implemented ML algorithms for fraud detection",
        ],
      },
      {
        title: "Predictive Maintenance for Industrial Equipment",
        projectTimeSpan: "04/2022 - 06/2022",
        shortDescription:
          "Custom LLM fine-tuned on legal domain with RAG-enhanced document processing pipeline.",
        categories: ["Predictive Maintenance", "Predictive", "Maintenance"],
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Reacty",
          "TypeScripty",
          "Tailwind CSSy",
        ],
        descriptionItems: [
          "Assist in predictive analytics tools screening",
          "Design and implement predictive models with R and SAS",
          "Provide predictive analytics expertise",
          "Support platform development and deployment",
        ],
        achievementItems: [
          "Predictive modeling",
          "Weight optimization",
          "Volume forecasting",
        ],
        practicalWorkItems: [
          "Built real-time invoice assessment system",
          "Optimized API data processing",
          "Implemented ML algorithms for fraud detection",
        ],
      },
    ],
  },

  about: {
    work: [
      { descriptionItemsCount: 6 },
      { descriptionItemsCount: 5 },
      { descriptionItemsCount: 5 },
      { descriptionItemsCount: 5 },
      { descriptionItemsCount: 3 },
      { descriptionItemsCount: 2 },
      { descriptionItemsCount: 2 },
      { descriptionItemsCount: 4 },
      { descriptionItemsCount: 3 },
      { descriptionItemsCount: 3 },
    ],
    school: [
      { descriptionItemsCount: 2 },
      { descriptionItemsCount: 1 },
      { descriptionItemsCount: 1 },
      { descriptionItemsCount: 1 },
      { descriptionItemsCount: 1 },
      { descriptionItemsCount: 1 },
      { descriptionItemsCount: 1 },
      { descriptionItemsCount: 1 },
      { descriptionItemsCount: 1 },
      { descriptionItemsCount: 1 },
    ],
  },
};

export default constants;
