import React from "react";

const ArrowRightIcon: React.FC<React.SVGAttributes<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      {...props}
      width="38"
      height="24"
      viewBox="0 0 38 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36 12L25.8 22L2 22L11.35 12L2 2L25.8 2L36 12Z"
        stroke="#F5BE3D"
        stroke-width="3.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowRightIcon;
