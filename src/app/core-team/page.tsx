import React from "react";
import Container from "@/components/Container";
import BannerImg from "@/assets/tinified/core-team.png";
import Banner from "@/components/Banner/Banner";
import { Usercard } from "@/components/Card";
import Adrian from "@/assets/Images/adrian.png";
import YashMittal from "@/assets/Images/yash-mittal.png";
import RowanSullivan from "@/assets/Images/rowan-sullivan.png";

const page = () => {
  const data = [
    {
      name: "Adrian",
      image: Adrian,
      image2: YashMittal,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Rowan Sullivan",
      image: RowanSullivan,
      image2: Adrian,

      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Yash Mittal",
      image: YashMittal,
      image2: RowanSullivan,

      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
  ];
  return (
    <>
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
    </>
  );
};

export default page;
