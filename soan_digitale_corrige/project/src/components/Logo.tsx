type LogoProps = {
  className?: string;
};

export function Logo({ className = 'h-9 w-9' }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Soan Digitale"
    >
      <defs>
        <linearGradient id="soanGradMark" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7c3aed" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="11"
        fill="#ffffff"
        stroke="url(#soanGradMark)"
        strokeWidth="1.5"
      />
      <path
        d="M27 14.5C27 12.6 25.4 11 23.5 11H16.5C14.6 11 13 12.6 13 14.5C13 16.4 14.6 18 16.5 18H23.5C25.4 18 27 19.6 27 21.5C27 23.4 25.4 25 23.5 25H16.5C14.6 25 13 26.6 13 28.5"
        stroke="url(#soanGradMark)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
