/*eslint-disable */
export type PrivacyBodyProps = {
  index: number;
  titleKey: string;
  subtitleKey: string;
  listItems: string[];
};

export type PrivacyBodySectionProps = {
  translatorCallback: (code: any) => string;
  data: PrivacyBodyProps;
};
