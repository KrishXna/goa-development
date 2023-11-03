import { LinkedinIcon, TwitterIcon } from "@/assets/Icons";
import React from "react";

type Props = {
  src?: string;
  name: string;
  title: string;
};

const ImgCard = ({ src, name, title }: Props) => {
  return (
    <>
      <div className="max-w-[300px] p-6 group">
        <div className="text-center group-hover:bg-white-100 cursor-pointer">
          <div className="flex justify-center items-center">
            <div className="w-60 h-60 rounded-full overflow-hidden">
              <img src={src} alt={`${name} img`} />
            </div>
          </div>
          <div
            className="relative -top-4 gap-10 rounded-full py-3 inline-block px-10"
            style={{
              background:
                "linear-gradient(180deg, #303030 0%, #000000 80.37%, #000000 100%)",
            }}
          >
            <div className="flex justify-center gap-10 w-full">
              <TwitterIcon className="w-8 h-8" />
              <LinkedinIcon className="w-8 h-8" />
            </div>
          </div>
          <div className="flex justify-center pb-2">
            <div className="flex flex-col gap-2 text-white-100 group-hover:text-[#000]">
              <h3 className="text-sm font-semibold">{name}</h3>
              <p className="text-xs font-normal max-w-[200px]">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImgCard;
