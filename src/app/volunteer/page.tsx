import React from "react";
import Container from "@/components/Container";
import AboutImg from "@/assets/Images/core-team.png";
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
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Rowan Sullivan",
      image: RowanSullivan,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Yash Mittal",
      image: YashMittal,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Adrian",
      image: Adrian,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Rowan Sullivan",
      image: RowanSullivan,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Yash Mittal",
      image: YashMittal,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
  ];
  return (
    <>
      <Container className="relative z-20">
        <Banner text="" image={AboutImg.src} />;
        <div className="flex flex-wrap justify-center pb-20 max-w-5xl mx-auto">
          {data.map((item) => (
            <Usercard
              key={item.name}
              src={item.image.src}
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
