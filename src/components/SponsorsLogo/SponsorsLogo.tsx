import React from "react";

interface SponsorData {
  sponsorTitle: string[];
  img: { src: string }[];
}

interface SponsorsLogoProps {
  data: SponsorData[];
}

const SponsorsLogo: React.FC<SponsorsLogoProps> = ({ data }) => {
  const mappedArr = data.map((item) => {
    const updatedSponsorTitle = item.sponsorTitle.map((title) =>
      title.toUpperCase()
    );
    const updatedImg = item.img.map((company, index) => (
      <img key={index} src={company.src} alt="logo" />
    ));

    return {
      sponsorTitle: updatedSponsorTitle,
      img: updatedImg,
    };
  });

  return (
    <div>
      {mappedArr.map((item, index) => (
        <div
          key={index}
          className="font-bold text-3xl border border-white-100 mx-auto w-full text-center"
        >
          <div className="">
            <div>
              <span className="text-white-100">{item.sponsorTitle[0]} </span>
              <span className="text-yellow-200">{item.sponsorTitle[1]}</span>
            </div>
            <div className="inline-block">
              <div className="px-2 py-2 flex  justify-between gap-40">
                <div className="bg-white-100 flex gap-10">{item.img}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SponsorsLogo;
