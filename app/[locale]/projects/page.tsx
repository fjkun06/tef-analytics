import {
  ContactAndProjectWrapper,
  PageHeader,
  Projectcard,
  ProjectCategoryPill,
  ProjectsPagination,
} from "@/components";

export default function Projects() {
  return (
    <ContactAndProjectWrapper>
      <PageHeader scope="projects" />

      <div className="flex h-max flex-wrap justify-center gap-4">
        <ProjectCategoryPill category="All" />
        <ProjectCategoryPill category="Data Science" isActive={true} />
        <ProjectCategoryPill category="Machine Learning" />
        <ProjectCategoryPill category="Time Series" />
        <ProjectCategoryPill category="Research" />
        <ProjectCategoryPill category="Research" />
        <ProjectCategoryPill category="Research" />
      </div>
      <div className="flex h-max w-full max-w-[1216px] justify-center justify-self-center">
        <div className="grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <Projectcard />
          <Projectcard />
          <Projectcard />
          <Projectcard />
          <Projectcard />
          <Projectcard />
          <Projectcard />
        </div>
      </div>
      <ProjectsPagination />
    </ContactAndProjectWrapper>
  );
}
