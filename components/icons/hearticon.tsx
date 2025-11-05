import * as React from "react";

export const HeartIcon = ({
  className = "w-6 h-6",
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1200 1200"
    className={className}
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M1020 120H660v120H540V120H180v120H60v360h120v120h120v120h120v120h120v120h120V960h120V840h120V720h120V600h120V240h-120zM180 360h120V240h120v120H300v120H180z" />
  </svg>
);