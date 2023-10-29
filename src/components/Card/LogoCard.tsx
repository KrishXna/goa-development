import React from "react";

type Props = {
  title: string;
  src?: string;
};
const LogoCard = ({ title, src }: Props) => {
  return (
    <>
      <div className="relative w-[180px] h-[180px] bg-white-100 rounded-md flex justify-center items-center">
        <div className="absolute z-20 top-4 max-w-[100px]">
          <h2 className="text-center text-sm font-normal">{title}</h2>
        </div>
        <div className="relative z-0 top-5">
          <img src={src} alt={title} />
        </div>
      </div>
    </>
  );
};

export default LogoCard;
