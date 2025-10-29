/**
 * ProjectCardTechnologyPill
 *
 * Client component that renders a single technology/skill pill with random gradient background.
 * Each pill gets a random gradient from predefined color combinations for visual variety.
 * Used within project cards to display individual technologies in an attractive way.
 *
 * @param {Object} props - Component props
 * @param {string} props.tech - Technology or skill name to display
 *
 * @returns {React.ReactElement} Styled gradient pill containing the technology name
 */
import React from "react";

function ProjectCardTechnologyPill({ tech }: { tech: string }): React.ReactElement {
  const colors = ["from-blue-100", "from-blue-200", "from-indigo-100", "from-indigo-200"];

  const toColors = ["to-blue-100", "to-blue-200", "to-indigo-100", "to-indigo-200"];
  // Generate random gradient class by combining random from and to colors
  const randomClass = `bg-gradient-to-br ${colors[Math.floor(Math.random() * colors.length)]} ${toColors[Math.floor(Math.random() * toColors.length)]} bg-white/10`;

  return (
    <span
      className={`${randomClass} rounded-4xl px-3 py-1 text-xs text-slate-900 sm:text-sm`}
      data-testid="technology-pill"
    >
      {tech}
    </span>
  );
}

export default ProjectCardTechnologyPill;
