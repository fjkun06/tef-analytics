import type { IconProps } from "@/interfaces/icons.interface";

const IconSearch = ({ className = "h-5 w-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 21L16.65 16.65"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconSearch;
