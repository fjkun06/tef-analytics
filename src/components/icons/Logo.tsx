import type { IconProps } from "@/interfaces/icons.interface";

const Logo = ({ className = "h-8 w-8 text-indigo-600" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="48" height="48" rx="8" fill="currentColor" />
    <path d="M12 32L20 18L28 32H12Z" fill="white" />
  </svg>
);

export default Logo;
