import React from "react";

const RightTickIcon: React.FC<React.SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <div className="flex justify-center items-center">
      <svg
        {...props}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_70_997)">
          <path
            d="M9.76838 19.0991L12.2964 23.7952C12.5861 24.3333 12.7309 24.6024 12.9781 24.6397C13.2253 24.6769 13.4431 24.4626 13.8785 24.0338L27.18 10.9375"
            stroke="#5BF96B"
            stroke-width="2"
            stroke-linecap="round"
          />
        </g>
        <circle cx="18" cy="18" r="17.5" stroke="#5BF96B" />
        <defs>
          <clipPath id="clip0_70_997">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(8 4) rotate(8.57535)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default RightTickIcon;
