import type { IconProps } from "@/interfaces/icons.interface";

const IconMenu = ({ className = "h-6 w-6" }: IconProps) => (
  <svg
    data-testid="icon-menu"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default IconMenu;
