import React from "react";
import Container from "@/components/Container";
import BannerImg from "@/assets/tinified/core-team.png";
import Banner from "@/components/Banner/Banner";
import { Usercard } from "@/components/Card";
import Silhoutte from "@/assets/Silhoutte.png";
import { BgCircuitRight } from "@/assets/Icons";

const page = () => {
  const data = [
    {
      name: "To be announce",
      image: Silhoutte,
      image2: Silhoutte,
      title: "To be announce Soon",
    },
    {
      name: "To be announce",
      image: Silhoutte,
      image2: Silhoutte,

      title: "To be announce Soon",
    },
    {
      name: "To be announce",
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
        <Banner text="CORE TEAM" image={BannerImg.src} />;
        <Container glowEffect className="relative z-20">
          <div className="flex flex-wrap justify-center pb-20">
            {data.map((item) => (
              <Usercard
                key={item.name}
                src={item.image.src}
                img={item.image2?.src}
                name={item.name}
                title={item.title}
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default page;
