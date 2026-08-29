import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function PhoneIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6.6 3.5h-.9A2.2 2.2 0 0 0 3.5 5.9c.3 3.7 1.9 7.1 4.5 9.7 2.6 2.6 6 4.2 9.7 4.5a2.2 2.2 0 0 0 2.4-2.2v-1.6a1.5 1.5 0 0 0-1.2-1.5l-2.5-.5a1.5 1.5 0 0 0-1.5.6l-.7 1a11.5 11.5 0 0 1-5-5l1-.7a1.5 1.5 0 0 0 .6-1.5l-.5-2.5a1.5 1.5 0 0 0-1.4-1.2Z" />
    </svg>
  );
}

export function PinIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function ClockIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  );
}

export function SearchIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

export function CloseIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function ChevronIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function CheckIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function ShieldIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3.2 5 6v5.4c0 4.3 2.9 8.1 7 9.4 4.1-1.3 7-5.1 7-9.4V6l-7-2.8Z" />
      <path d="m9 12 2 2 4-4.2" />
    </svg>
  );
}

export function TagIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3.5 11V4.8a1.3 1.3 0 0 1 1.3-1.3H11l9 9-6.2 6.2a1.3 1.3 0 0 1-1.8 0L3.9 12.8a2.6 2.6 0 0 1-.4-1.8Z" />
      <circle cx="7.8" cy="7.8" r="1.3" />
    </svg>
  );
}

export function BoltIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M13.2 2.8 4.8 13.4h6l-1 7.8 8.4-10.6h-6l1-7.8Z" />
    </svg>
  );
}

export function MailIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2.2" />
      <path d="m3.8 6.6 7.3 5.4a1.5 1.5 0 0 0 1.8 0l7.3-5.4" />
    </svg>
  );
}

export function ChatIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M20.5 12a7.5 7.5 0 0 1-11 6.7L4 20l1.4-4.6A7.5 7.5 0 1 1 20.5 12Z" />
    </svg>
  );
}

export function StarIcon(p: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...p}>
      <path d="m12 3.6 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 3.6Z" />
    </svg>
  );
}

export function HouseIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-9.5Z" />
    </svg>
  );
}

export function DollarIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v18M15.8 7.3c-.6-1.1-2-1.8-3.8-1.8-2.3 0-3.9 1.1-3.9 2.9 0 4 7.8 2.2 7.8 6.3 0 1.9-1.7 3.1-4 3.1-2 0-3.5-.8-4.1-2" />
    </svg>
  );
}

export function MenuIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function ArrowIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h13M13 6.5 18.5 12 13 17.5" />
    </svg>
  );
}
