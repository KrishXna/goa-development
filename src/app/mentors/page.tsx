import React from "react";
import Container from "@/components/Container";
import AboutImg from "@/assets/Images/speakers.png";
import Sponsors from "@/components/Sponsors/Sponsors";
import Banner from "@/components/Banner/Banner";
import Speakers from "@/components/Speakers/Speakers";
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
    <>
      <Container glowEffect>
        <Banner text="" image={AboutImg.src} />
        <div className="flex flex-col gap-8">
          <h2 className="text-white-100 font-bold text-3xl">Speakers</h2>
          <p className="text-white-100/80 text-xl font-normal">
            Experience insights from industry pioneers at BSides Goa! Our lineup
            of distinguished speakers brings a wealth of knowledge to the
            forefront. From [dates], join us for a series of enlightening talks
            and engaging discussions that delve into the latest trends,
            challenges, and innovations in cybersecurity. Get ready to be
            inspired and gain fresh perspectives from these thought leaders.
            Explore the speaker profiles below and prepare for an exceptional
            learning journey.
          </p>
          <div className="flex flex-wrap justify-center">
            {data.map((item) => (
              <Usercard
                key={item.name}
                src={item.image.src}
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
