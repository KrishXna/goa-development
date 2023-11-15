import React from "react";

type Props = {
  image: string;
  text: string;
};
const Banner = ({ image, text }: Props) => {
  return (
    <>
      <div className="relative w-full pb-10 z-10">
        <div className="absolute uppercase top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-md text-2xl md:text-6xl font-bold text-white-100 text-center">
          {text}
        </div>
        <img src={image} alt={text} className="w-full" />
      </div>
    </>
  );
};

export default Banner;
