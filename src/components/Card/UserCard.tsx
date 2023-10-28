import React from "react";

type Props = {
  src?: string;
  name: string;
  title: string;
};

const ImgCard = ({ src, name, title }: Props) => {
  return (
    <>
      <div className="max-w-[300px] p-6">
        <div className="text-center">
          <img src={src} alt={`${name} img`} />
          <div
            className="flex flex-col gap-1 py-2"
            style={{
              background:
                "linear-gradient(180deg, #303030 0%, #000000 80.37%, #000000 100%)",
            }}
          >
            <h3 className="text-base font-semibold text-white-100">{name}</h3>
            <p className="text-md font-normal text-white-200/80 text-sm">
              {title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImgCard;
