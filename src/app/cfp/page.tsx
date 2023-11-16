import React from "react";
import Container from "@/components/Container";
import BannerImg from "@/assets/tinified/cfp.png";
import Banner from "@/components/Banner/Banner";
import Silhoutte from "@/assets/Silhoutte.png";
import { Usercard } from "@/components/Card";
import { BgCircuitRight } from "@/assets/Icons";

const page = () => {
  const data = [
    {
      name: "To be announce Soon",
      image: Silhoutte,
      image2: Silhoutte,
      title: "To be announce Soon",
    },
    {
      name: "To be announce Soon",
      image: Silhoutte,
      image2: Silhoutte,

      title: "To be announce Soon",
    },
    {
      name: "To be announce Soon",
      image: Silhoutte,
      image2: Silhoutte,

      title: "To be announce Soon",
    },
    {
      name: "To be announce Soon",
      image: Silhoutte,
      image2: Silhoutte,

      title: "To be announce Soon",
    },
    {
      name: "To be announce Soon",
      image: Silhoutte,
      image2: Silhoutte,

      title: "To be announce Soon",
    },
  ];
  return (
    <>
      <div className="relative z-20">
        <div className="absolute right-0 bottom-0">
          <BgCircuitRight className="w-full" />
        </div>

        <Banner text="CFP REVIEW PANEL" image={BannerImg.src} />
        <Container glowEffect className="relative z-20">
          <div className="flex flex-col gap-8">
            <h2 className="text-white-100 font-bold text-3xl">Review Panel </h2>
            <div className="flex flex-wrap justify-center">
              {data.map((item, i) => (
                <Usercard
                  key={i}
                  src={item.image.src}
                  img={item.image2?.src}
                  name={item.name}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default page;
