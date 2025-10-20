import type { IconProps } from "@/interfaces/icons.interface";

const IconBell = ({ className = "h-5 w-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M15 17H9m6 0a3 3 0 11-6 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 8a6 6 0 10-12 0c0 7-3 8-3 8h18s-3-1-3-8z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconBell;
