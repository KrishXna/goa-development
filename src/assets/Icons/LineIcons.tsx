import React from "react";

const LineIcons: React.FC<React.SVGAttributes<SVGSVGElement>> = (props) => {
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
        d="M2 12L12.2 2L36 2L26.65 12L36 22L12.2 22L2 12Z"
        stroke="#F5BE3D"
        stroke-width="3.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LineIcons;
