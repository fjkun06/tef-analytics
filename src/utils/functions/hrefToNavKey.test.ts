import constants from "../constants";
import { hrefToNavKey } from "./hrefToNavKey";

describe("hrefToNavKey", () => {
  const routes = constants.navItems.map((item) => ({
    href: item.href,
    expected: item.name.toLowerCase(),
  }));
  test.each(routes)("returns '%expected' for '%href'", ({ href, expected }) => {
    expect(hrefToNavKey(href)).toBe(expected);
  });

  it("returns 'home' for unknown hrefs", () => {
    expect(hrefToNavKey("/unknown")).toBe("home");
    expect(hrefToNavKey("")).toBe("home");
    expect(hrefToNavKey("/random" as any)).toBe("home");
  });
});
