import React from "react";

export type ProjectCategoryPillProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  category: string;
  isActive?: boolean;
};
