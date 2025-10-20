export type NavKey = "home" | "about" | "projects" | "contact";

export function hrefToNavKey(href: string): NavKey {
  switch (href) {
    case "/":
      return "home";
    case "/about":
      return "about";
    case "/projects":
      return "projects";
    case "/contact":
      return "contact";
    default:
      return "home";
  }
}
