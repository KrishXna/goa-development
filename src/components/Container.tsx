import React, { PropsWithChildren } from "react";

type Props = {
  fluid?: boolean;
  className?: string;
  glowEffect?: boolean;
};

export const Container = ({
  children,
  className = "",
  fluid = false,
  glowEffect = false,
}: PropsWithChildren & Props) => {
  return (
    <>
      <div className="relative">
        {glowEffect && (
          <div
            className="absolute top-32 left-40 md:w-[200px] lg:w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
            style={{
              background: "linear-gradient(180deg, #FFDE77 0%, #FFB32E 100%)",
            }}
          ></div>
        )}
        <div
          className={`relative z-20 px-4 w-full mx-auto ${
            fluid ? "" : "max-w-7xl"
          } ${className}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Container;
