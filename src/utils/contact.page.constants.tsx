import {
  IconEnvelope,
  IconLinkedIn,
  IconXing,
  IconX,
  IconPipe,
  IconTime,
  IconData,
  IconFlash,
  IconComputer,
} from "@/components";

export const socials = [
  {
    icon: <IconEnvelope />,
    title: "E-Mail",
    href: "mailto:francktankouan@yahoo.de",
    label: "francktankouan@yahoo.de",
  },
  {
    icon: <IconLinkedIn />,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/franck-tankouan-2a9a2ab3/",
    label: "Tankouan",
  },
  {
    icon: <IconXing />,
    title: "Github",
    href: "https://github.com/thefranckt",
    label: "thefranckt",
  },
  {
    icon: <IconX />,
    title: "Xing",
    href: "#",
    label: "Franck Tankouan",
  },
];
export const availability = [
  {
    icon: <IconTime />,
    descriptionKey: "availability.one",
  },
  {
    icon: <IconPipe />,
    descriptionKey: "availability.two",
  },
];

export const domains = [
  {
    icon: <IconData />,
    titleKey: "domains.oneTitle",
    descriptionKey: "domains.oneDescription",
  },
  {
    icon: <IconFlash />,
    titleKey: "domains.twoTitle",
    descriptionKey: "domains.twoDescription",
  },
  {
    icon: <IconComputer />,
    titleKey: "domains.threeTitle",
    descriptionKey: "domains.threeDescription",
  },
];
