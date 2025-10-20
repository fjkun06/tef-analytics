import type { IconProps } from "@/interfaces/icons.interface";

const Avatar = ({ className = "h-8 w-8" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 12a4 4 0 100-8 4 4 0 000 8z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 20a8 8 0 0116 0"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Avatar;
