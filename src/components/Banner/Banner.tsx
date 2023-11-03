import React from "react";

type Props = {
  image: string;
  text: string;
};
const Banner = ({ image, text }: Props) => {
  return (
    <div>
      <div className="relative w-full py-20">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-md text-2xl md:text-6xl font-bold text-white-100 text-center">
          {text}
        </div>
        <img src={image} alt={text} />
      </div>
    </div>
  );
};

export default Banner;
