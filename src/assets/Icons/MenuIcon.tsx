import React from "react";

// interface Props {
//   className?: string;
//   style?: React.CSSProperties;
// }

// const Menu: React.FC<Props> = ({ className, style, ...props }) => {s
const MenuIcon: React.FC<React.SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      width="40"
      height="22"
      viewBox="0 0 40 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38 19.5723L18 19.5723"
        stroke="#F5BE3D"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M38 10.5723L2 10.5723"
        stroke="#F5BE3D"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M37.77 2L12.3132 2"
        stroke="#F5BE3D"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default MenuIcon;
