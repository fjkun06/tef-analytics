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
    { href: "#", label: "about.companyHistory" },
    { href: "#", label: "about.meetTeam" },
    { href: "#", label: "about.employeeHandbook" },
    { href: "#", label: "about.careers" },
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
};

export default constants;
