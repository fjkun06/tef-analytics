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
        title: "NLP- & Netzwerk-Analyse politischer Nachrichtenartikel",
        projectTimeSpan: "April 2016 – July 2017",
        shortDescription:
          "Explorative Text- und Netzwerk-Analyse auf Basis von rund 140.000 Nachrichtenartikeln aus amerikanischen und britischen Medien.",
        categories: ["NLP", "Netzwerkanalyse", "Textanalyse", "Politische Nachrichten"],
        technologies: [
          "Python",
          "pandas",
          "numpy",
          "spaCy",
          "nltk",
          "scikit-learn",
          "networkx",
          "Kaggle-Datensatz",
          "Jupyter Notebooks",
          "Graph-Visualisierung (networkx, Gephi)",
        ],
        descriptionItems: [
          "Analysieren von rund 140.000 Artikeln aus US- und UK-Medien",
          "Identifikation von Autoren, Themen und erwähnten Akteuren",
          "Aufdeckung von Beziehungen zwischen Keywords, Autoren und Entitäten",
          "Explorative Text- und Netzwerkanalyse zur Sichtbarmachung von thematischen Clustern",
        ],
        achievementItems: [
          "Strukturierte Aufbereitung eines großen, heterogenen Nachrichtendatensatzes in eine NLP- und Netzwerk-Analysepipeline.",
          "Aufbau interaktiver Netzwerke für Autoren und Keywords, die thematische Cluster und Kooperationsmuster sichtbar machen.",
          "Quantitative Übersicht darüber, welche Länder, Organisationen und Personen in welchen Medien dominierend erwähnt werden.",
          "Wiederverwendbarer Analyse-Workflow für zukünftige Medien-, Bias- oder Diskursanalysen.",
        ],
        practicalWorkItems: [
          {
            title: "Datenerhebung & -aufbereitung",
            descriptionItems: [
              "Nutzung eines Kaggle-Datensatzes (≈140k Artikel, Zeitraum 2016–07/2017).",
              "Konsolidierung der Metadaten (Quelle, Datum, Autor:innen, Titel, Text).",
              "Text-Cleaning (Encoding, Sonderzeichen, Lowercasing, Stopwörter, einfache Normalisierung).",
            ],
          },
          {
            title: "NLP-Pipeline & Keyword-Extraktion",
            descriptionItems: [
              "Tokenisierung der Artikeltexte und Part-of-Speech-Filterung (Nomen, Verben, Adjektive, Adverbien).",
              "Berechnung der Wortfrequenzen pro Artikel und Extraktion der Top-5-Keywords je Artikel.",
              "Aufbau eines Keyword-Co-Occurrence-Netzwerks: Verknüpfung von Wörtern, die im selben Artikel auftreten.",
            ],
          },
          {
            title: "Netzwerkanalysen",
            descriptionItems: [
              "Aufbau eines Autorennetzwerks auf Basis von gemeinsamen Veröffentlichungen in denselben Artikeln.",
              "Analyse von Communities, Zentralitäten und Verbindern zwischen Medienhäusern und Themenclustern.",
            ],
          },
          {
            title: "Named Entity Recognition",
            descriptionItems: [
              "Einsatz von spaCy zur Erkennung benannter Entitäten (Länder, Städte, Organisationen, Personen).",
              "Aggregation der Entitäten nach Medium/Zeitraum zur Identifikation von Fokusregionen und Schlüsselakteuren.",
            ],
          },
        ],
      },
      // {
      //   title: "Predictive Maintenance for Industrial Equipment",
      //   projectTimeSpan: "04/2022 - 06/2022",
      //   shortDescription:
      //     "Custom LLM fine-tuned on legal domain with RAG-enhanced document processing pipeline.",
      //   categories: ["Predictive Maintenance", "Predictive", "Maintenance"],
      //   technologies: [
      //     "React",
      //     "TypeScript",
      //     "Tailwind CSS",
      //     "Reacty",
      //     "TypeScripty",
      //     "Tailwind CSSy",
      //   ],
      //   descriptionItems: [
      //     "Assist in predictive analytics tools screening",
      //     "Design and implement predictive models with R and SAS",
      //     "Provide predictive analytics expertise",
      //     "Support platform development and deployment",
      //   ],
      //   achievementItems: [
      //     "Predictive modeling",
      //     "Weight optimization",
      //     "Volume forecasting",
      //   ],
      //   practicalWorkItems: [
      //     "Built real-time invoice assessment system",
      //     "Optimized API data processing",
      //     "Implemented ML algorithms for fraud detection",
      //   ],
      // },
      // {
      //   title: "Predictive Maintenance for Industrial Equipment",
      //   projectTimeSpan: "04/2022 - 06/2022",
      //   shortDescription:
      //     "Custom LLM fine-tuned on legal domain with RAG-enhanced document processing pipeline.",
      //   categories: ["Predictive Maintenance", "Predictive", "Maintenance"],
      //   technologies: [
      //     "React",
      //     "TypeScript",
      //     "Tailwind CSS",
      //     "Reacty",
      //     "TypeScripty",
      //     "Tailwind CSSy",
      //   ],
      //   descriptionItems: [
      //     "Assist in predictive analytics tools screening",
      //     "Design and implement predictive models with R and SAS",
      //     "Provide predictive analytics expertise",
      //     "Support platform development and deployment",
      //   ],
      //   achievementItems: [
      //     "Predictive modeling",
      //     "Weight optimization",
      //     "Volume forecasting",
      //   ],
      //   practicalWorkItems: [
      //     "Built real-time invoice assessment system",
      //     "Optimized API data processing",
      //     "Implemented ML algorithms for fraud detection",
      //   ],
      // },
      // {
      //   title: "Predictive Maintenance for Industrial Equipment",
      //   projectTimeSpan: "04/2022 - 06/2022",
      //   shortDescription:
      //     "Custom LLM fine-tuned on legal domain with RAG-enhanced document processing pipeline.",
      //   categories: ["Predictive Maintenance", "Predictive", "Maintenance"],
      //   technologies: [
      //     "React",
      //     "TypeScript",
      //     "Tailwind CSS",
      //     "Reacty",
      //     "TypeScripty",
      //     "Tailwind CSSy",
      //   ],
      //   descriptionItems: [
      //     "Assist in predictive analytics tools screening",
      //     "Design and implement predictive models with R and SAS",
      //     "Provide predictive analytics expertise",
      //     "Support platform development and deployment",
      //   ],
      //   achievementItems: [
      //     "Predictive modeling",
      //     "Weight optimization",
      //     "Volume forecasting",
      //   ],
      //   practicalWorkItems: [
      //     "Built real-time invoice assessment system",
      //     "Optimized API data processing",
      //     "Implemented ML algorithms for fraud detection",
      //   ],
      // },
      // {
      //   title: "Predictive Maintenance for Industrial Equipment",
      //   projectTimeSpan: "04/2022 - 06/2022",
      //   shortDescription:
      //     "Custom LLM fine-tuned on legal domain with RAG-enhanced document processing pipeline.",
      //   categories: ["Predictive Maintenance", "Predictive", "Maintenance"],
      //   technologies: [
      //     "React",
      //     "TypeScript",
      //     "Tailwind CSS",
      //     "Reacty",
      //     "TypeScripty",
      //     "Tailwind CSSy",
      //   ],
      //   descriptionItems: [
      //     "Assist in predictive analytics tools screening",
      //     "Design and implement predictive models with R and SAS",
      //     "Provide predictive analytics expertise",
      //     "Support platform development and deployment",
      //   ],
      //   achievementItems: [
      //     "Predictive modeling",
      //     "Weight optimization",
      //     "Volume forecasting",
      //   ],
      //   practicalWorkItems: [
      //     "Built real-time invoice assessment system",
      //     "Optimized API data processing",
      //     "Implemented ML algorithms for fraud detection",
      //   ],
      // },
      // {
      //   title: "Predictive Maintenance for Industrial Equipment",
      //   projectTimeSpan: "04/2022 - 06/2022",
      //   shortDescription:
      //     "Custom LLM fine-tuned on legal domain with RAG-enhanced document processing pipeline.",
      //   categories: ["Predictive Maintenance", "Predictive", "Maintenance"],
      //   technologies: [
      //     "React",
      //     "TypeScript",
      //     "Tailwind CSS",
      //     "Reacty",
      //     "TypeScripty",
      //     "Tailwind CSSy",
      //   ],
      //   descriptionItems: [
      //     "Assist in predictive analytics tools screening",
      //     "Design and implement predictive models with R and SAS",
      //     "Provide predictive analytics expertise",
      //     "Support platform development and deployment",
      //   ],
      //   achievementItems: [
      //     "Predictive modeling",
      //     "Weight optimization",
      //     "Volume forecasting",
      //   ],
      //   practicalWorkItems: [
      //     "Built real-time invoice assessment system",
      //     "Optimized API data processing",
      //     "Implemented ML algorithms for fraud detection",
      //   ],
      // },
      // {
      //   title: "Predictive Maintenance for Industrial Equipment",
      //   projectTimeSpan: "04/2022 - 06/2022",
      //   shortDescription:
      //     "Custom LLM fine-tuned on legal domain with RAG-enhanced document processing pipeline.",
      //   categories: ["Predictive Maintenance", "Predictive", "Maintenance"],
      //   technologies: [
      //     "React",
      //     "TypeScript",
      //     "Tailwind CSS",
      //     "Reacty",
      //     "TypeScripty",
      //     "Tailwind CSSy",
      //   ],
      //   descriptionItems: [
      //     "Assist in predictive analytics tools screening",
      //     "Design and implement predictive models with R and SAS",
      //     "Provide predictive analytics expertise",
      //     "Support platform development and deployment",
      //   ],
      //   achievementItems: [
      //     "Predictive modeling",
      //     "Weight optimization",
      //     "Volume forecasting",
      //   ],
      //   practicalWorkItems: [
      //     "Built real-time invoice assessment system",
      //     "Optimized API data processing",
      //     "Implemented ML algorithms for fraud detection",
      //   ],
      // },
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
    technicalSkills: {
      Program: [
        { title: "R, R-Studio", percentage: 90 },
        { title: "Python, Anaconda", percentage: 90 },
        { title: "SAS (EG, Base)", percentage: 70 },
      ],
      Frameworks: [
        { title: "Scikit-learn, TensorFlow, PyTorch", percentage: 70 },
        { title: "SpaCy, HuggingFace", percentage: 70 },
      ],
      Cloud: [
        { title: "Microsoft Azure (Azure ML, Fabric, DevOps)", percentage: 90 },
        { title: "AWS", percentage: 70 },
      ],
      MLOps: [
        {
          title: "Docker, MLflow, Git/GitLab (CI/CD), FastAPI, Linux (Shell)",
          percentage: 70,
        },
      ],
      Datenbanken: [
        { title: "MS SQL Server, MySQL; MongoDB, Elasticsearch", percentage: 70 },
      ],
      BigData: [{ title: "Hadoop, PySpark, Databricks", percentage: 70 }],
      BITools: [
        { title: "Power BI, R-Shiny", percentage: 90 },
        { title: "Tableau", percentage: 70 },
      ],
      Others: [{ title: "LaTeX, ProcessGold", percentage: 90 }],
    },
  },

  contactFormItems: (t: any) => [
    {
      labelKey: t("name"),
      schemaName: "name",
    },
    {
      labelKey: t("email"),
      schemaName: "email",
      isRequired: true,
      validation: {
        required: t("emailRequiredMessage"),
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: t("emailInvalidMessage"),
        },
      },
    },
    {
      labelKey: t("tel"),
      schemaName: "tel",
      validation: {
        pattern: {
          value: /^\+?[0-9\s\-()]{7,20}$/,
          message: t("validTelRequiredMessage"),
        },
      },
    },
    {
      labelKey: t("subject"),
      schemaName: "subject",
    },
    {
      labelKey: t("message"),
      schemaName: "message",
      isRequired: true,
      isTextArea: true,
      validation: {
        required: t("messageRequiredMessage"),
      },
    },
  ],
};

export default constants;
