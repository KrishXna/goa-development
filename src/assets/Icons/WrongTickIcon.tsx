import React from "react";

const WrongTickIcon: React.FC<React.SVGAttributes<SVGSVGElement>> = (props) => {
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
        <g clipPath="url(#clip0_70_1301)">
          <path
            d="M11 11L25 25M25 11L11 25"
            stroke="#FF0000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <circle cx="18" cy="18" r="17.5" stroke="#FF0000" />
        <defs>
          <clipPath id="clip0_70_1301">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(6 6)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default WrongTickIcon;
