import type { IconProps } from "@/interfaces/icons.interface";

const IconClose = ({ className = "h-6 w-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default IconClose;
