import React from "react";

export type ContactAndProjectWrapperProps = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export type PageHeaderProps = {
  scope: "contact" | "project";
};

export type ContactSectionContainerProps = {
  children: React.ReactNode | React.ReactNode[];
  heading: string;
};

export type ContactIconBubbleProps = {
  icon: React.ReactNode;
};
export type ContactSectionContainerItemProps = {
  icon: React.ReactNode;
  descriptionKey: string;
};
