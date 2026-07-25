import type { SVGProps } from "react";

const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function SpacesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props} aria-hidden="true">
      <path d="M5 11V8.5A1.5 1.5 0 0 1 6.5 7h11A1.5 1.5 0 0 1 19 8.5V11" />
      <rect x="3.5" y="11" width="17" height="5" rx="1.5" />
      <path d="M4 16v2M20 16v2" />
    </svg>
  );
}

export function KitchenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props} aria-hidden="true">
      <path d="M6 3v4M8 3v4M10 3v4" />
      <path d="M6 7c0 2 1 3 2 3s2-1 2-3" />
      <path d="M8 10v11" />
      <path d="M16 3c2 0 3 1.7 3 4s-1 4-3 4" />
      <path d="M16 3v18" />
    </svg>
  );
}

export function BedroomIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props} aria-hidden="true">
      <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" />
      <path d="M3 18v2M21 18v2" />
      <path d="M5 10V8a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2" />
      <path d="M12 10V9a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3" />
    </svg>
  );
}

export function BathIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props} aria-hidden="true">
      <path d="M4 12h16v2a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-2Z" />
      <path d="M4 12V9a2 2 0 0 1 2-2h1" />
      <path d="M3 18v1M19 18v1" />
      <path d="M17 3v3M17 8h.01" />
    </svg>
  );
}

export function TvIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props} aria-hidden="true">
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M8 9l2 2 2-2 2 2 2-2" />
    </svg>
  );
}

export function PoolIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props} aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="13" rx="2" />
      <path d="M4 11.5c1.2 1 2.3 1 3.5 0s2.3-1 3.5 0 2.3 1 3.5 0 2.3-1 3.5 0 2.3 1 3.5 0" />
      <path d="M4 15.5c1.2 1 2.3 1 3.5 0s2.3-1 3.5 0 2.3 1 3.5 0 2.3-1 3.5 0 2.3 1 3.5 0" />
      <path d="M17 3v3M19 3v3" />
    </svg>
  );
}
