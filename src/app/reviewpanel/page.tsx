import React from "react";
import Container from "@/components/Container";
import BannerImg from "@/assets/tinified/cfp.png";
import Banner from "@/components/Banner/Banner";
import jacobSmith from "@/assets/Images/jacob-smith.png";
import Adrian from "@/assets/Images/adrian.png";
import YashMittal from "@/assets/Images/yash-mittal.png";
import BryceCase from "@/assets/Images/bryce-case.png";
import ChristopherBrown from "@/assets/Images/christopher-brown.png";
import AloysiusCheang from "@/assets/Images/aloysius-cheang.png";
import RowanSullivan from "@/assets/Images/rowan-sullivan.png";
import Anthony from "@/assets/Images/anthony.png";
import { Usercard } from "@/components/Card";
const page = () => {
  const data = [
    {
      name: "Jacob Smith",
      image: jacobSmith,
      image2: YashMittal,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Adrian",
      image: Adrian,
      image2: YashMittal,

      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Yash Mittal",
      image: YashMittal,
      image2: YashMittal,

      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Rowan Sullivan",
      image: RowanSullivan,
      image2: YashMittal,

      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Christopher Brown",
      image: ChristopherBrown,
      image2: YashMittal,

      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Aloysius Cheang",
      image: AloysiusCheang,
      image2: YashMittal,

      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Bryce Case",
      image: BryceCase,
      image2: YashMittal,

      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Anthony",
      image: Anthony,
      image2: YashMittal,

      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Jacob Smith",
      image: jacobSmith,
      image2: YashMittal,

      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Adrian",
      image: Adrian,
      image2: YashMittal,

      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Yash Mittal",
      image: YashMittal,
      image2: YashMittal,

      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Rowan Sullivan",
      image: RowanSullivan,
      image2: YashMittal,

      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Christopher Brown",
      image: ChristopherBrown,
      image2: YashMittal,

      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Aloysius Cheang",
      image: AloysiusCheang,
      image2: YashMittal,

      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Bryce Case",
      image: BryceCase,
      image2: YashMittal,

      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Anthony",
      image: Anthony,
      image2: YashMittal,

      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
  ];
  return (
    <>
      <Banner text="CFP REVIEW PANEL" image={BannerImg.src} />
      <Container glowEffect className="relative z-20">
        <div className="flex flex-col gap-8">
          <h2 className="text-white-100 font-bold text-3xl">Review Panel </h2>
          <div className="flex flex-wrap justify-center">
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
        </div>
      </Container>
    </>
  );
};

export default page;
