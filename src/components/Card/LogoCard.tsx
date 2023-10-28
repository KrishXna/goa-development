import React from "react";

type Props = {
  title: string;
  src?: string;
};
const LogoCard = ({ title, src }: Props) => {
  return (
    <>
      <div className="w-[160px] h-[160px] bg-white-100 rounded-md flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-center text-sm font-normal">{title}</h2>
          <img src={src} alt={title} />
        </div>
      </div>
    </>
  );
};

export default LogoCard;
