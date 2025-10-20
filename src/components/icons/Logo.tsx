import type { IconProps } from "@/interfaces/icons.interface";

const Logo = ({ className = "h-8 w-8 text-indigo-600" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 120 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Tef Analytics"
  >
    <title>Tef Analytics</title>
    <g transform="translate(0,0)">
      <rect x="0" y="0" width="32" height="32" rx="6" fill="currentColor" />
      <path d="M8 24 L16 10 L24 24 Z" fill="white" />
    </g>

    <g transform="translate(40,6)" fill="currentColor" fillOpacity="0.95">
      <text
        x="0"
        y="18"
        fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue'"
        fontWeight="600"
        fontSize="14"
      >
        Tef Analytics
      </text>
    </g>
  </svg>
);

export default Logo;
