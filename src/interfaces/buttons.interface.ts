/**
 * Button Interface Definitions
 * Type definitions for button components and their props.
 */

/**
 * Props for the SkillPill component.
 * Displays a skill tag or pill element.
 * @property label - Text to display in the skill pill
 * @property carousel - Optional flag to indicate if used within a carousel context
 */
export type SkillPillProps = {
  label: string;
  carousel?: boolean;
};

/**
 * Props for the NavigateButton component.
 * Button that navigates to a specified route.
 * @property label - Button text/label
 * @property route - Target route to navigate to
 */
export type NavigateButtonProps = {
  label: string;
  route: string;
};
