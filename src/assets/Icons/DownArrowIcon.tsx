import React from "react";

const DownArrowIcon: React.FC<React.SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      width="21"
      height="13"
      viewBox="0 0 21 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0559 11.0737L18.3696 3.25668C19.5105 1.84412 20.081 1.13784 19.8092 0.568921C19.5374 1.77948e-06 18.6295 1.70011e-06 16.8137 1.54137e-06L4.18627 4.37446e-07C2.37051 2.78707e-07 1.46262 1.99337e-07 1.19082 0.568919C0.919021 1.13784 1.48947 1.84411 2.63038 3.25666L2.63039 3.25667L8.94412 11.0737C9.66287 11.9636 10.0222 12.4085 10.5 12.4085C10.9778 12.4085 11.3371 11.9636 12.0559 11.0737Z"
        fill="white"
      />
    </svg>
  );
};

export default DownArrowIcon;
