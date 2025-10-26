import React from "react";

export type ProjectCategoryPillProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  category: string;
  isActive?: boolean;
};

export type ProjectCardSectionListProps = {
  listItems: string[];
  title: string;
  className?: string;
  type: "list";
};
export type ProjectCardSectionPillsProps = {
  technologies: string[];
  title: string;
  className?: string;
  type: "pills";
};
export type ProjectCardSectionProps =
  | ProjectCardSectionListProps
  | ProjectCardSectionPillsProps;

export type ProjectCardPillsGroupProps = {
  technologies: string[];
};
export type ProjectCardListGroupProps = {
  listItems: string[];
};
