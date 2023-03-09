export type SectionNames = "intro" | "about" | "projects" | "contact";

export const scrollToSection = (section: SectionNames) => {
  document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
};
