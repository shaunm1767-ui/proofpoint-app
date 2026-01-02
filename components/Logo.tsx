import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5L12 2zm-1.05 15.54L6.41 13l1.41-1.41L10.95 15.1l5.22-5.22 1.41 1.41L10.95 17.54z"
        fill="currentColor"
      />
    </svg>
  );
}
