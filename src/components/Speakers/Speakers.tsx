import React from "react";
import UserCard from "@/components/Card/UserCard";
import Container from "@/components/Container";
import jacobSmith from "@/assets/Images/jacob-smith.png";
import Adrian from "@/assets/Images/adrian.png";
import YashMittal from "@/assets/Images/yash-mittal.png";
import BryceCase from "@/assets/Images/bryce-case.png";
import ChristopherBrown from "@/assets/Images/christopher-brown.png";
import AloysiusCheang from "@/assets/Images/aloysius-cheang.png";
import RowanSullivan from "@/assets/Images/rowan-sullivan.png";
import Anthony from "@/assets/Images/anthony.png";
import DotImage from "@/assets/Images/dotsimg.png";
import { LinesLeftIcon, LinesRightIcon } from "@/assets/Icons";
const Speakers = () => {
  const data = [
    {
      name: "Jacob Smith",
      image: jacobSmith,
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
      name: "Yash Mittal",
      image: YashMittal,
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
      name: "Christopher Brown",
      image: ChristopherBrown,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Aloysius Cheang",
      image: AloysiusCheang,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Bryce Case",
      image: BryceCase,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      name: "Anthony",
      image: Anthony,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
  ];

  return (
    <div
      className="w-full bg-cover bg-no-repeat bg-center object-contain relative z-20 overflow-hidden"
      // style={{ backgroundImage: `url(${DotImage.src})` }}
    >
      <div className="relative overflow-hidden">
        <div className="w-full h-full">
          <img
            src={DotImage.src}
            alt="dot_img"
            className="absolute max-w-[400%] animate-spin-slowest -top-[200px -left-[200px] sm:-left-[1100px] sm:-top-[400px]"
          />
        </div>
        <Container className="py-20 relative z-20">
          <div className="flex justify-center md:gap-6">
            <LinesRightIcon className="w-10" />
            <div className="md:text-3xl font-semibold text-center">
              <h2 className="text-white-100">
                TOP INFOSEC LEADERS & ETHICAL HACKERS JOIN
              </h2>
              <span className="text-yellow-200">FORCES ON STAGE</span>
            </div>
            <LinesLeftIcon className="w-10" />
          </div>
          <div className="flex flex-wrap justify-center">
            {data.map((item) => (
              <UserCard
                key={item.name}
                src={item.image.src}
                name={item.name}
                title={item.title}
              />
            ))}
          </div>
        </Container>
      </div>
      <div
        className="absolute -bottom-96 -left-80 w-[700px] h-[600px] rounded-full opacity-40 blur-3xl"
        style={{
          background: "linear-gradient(180deg, #FFE27E 0%, #FFA81C 100%)",
        }}
      ></div>
      <div
        className="absolute -bottom-96 -right-80 w-[700px] h-[600px] rounded-full opacity-40 blur-3xl"
        style={{
          background: "linear-gradient(180deg, #FFE27E 0%, #FFA81C 100%)",
        }}
      ></div>
    </div>
  );
};

export default Speakers;
