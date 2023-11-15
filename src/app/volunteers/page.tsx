import React from "react";
import Container from "@/components/Container";
import VolunteersImg from "@/assets/tinified/voluntteer.png";
import Banner from "@/components/Banner/Banner";
import { Usercard } from "@/components/Card";
// import Adrian from "@/assets/Images/adrian.png";
// import YashMittal from "@/assets/Images/yash-mittal.png";
// import RowanSullivan from "@/assets/Images/rowan-sullivan.png";
import { BgCircuitRight } from "@/assets/Icons";
import jacobSmith from "@/assets/Silhoutte.png";

const page = () => {
  // const data = [
  //   {
  //     name: "Adrian",
  //     image: Adrian,
  //     image2: YashMittal,
  //     title:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  //   },
  //   {
  //     name: "Rowan Sullivan",
  //     image: RowanSullivan,
  //     image2: Adrian,

  //     title:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  //   },
  //   {
  //     name: "Yash Mittal",
  //     image: YashMittal,
  //     image2: YashMittal,

  //     title:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  //   },
  //   {
  //     name: "Adrian",
  //     image: Adrian,
  //     image2: RowanSullivan,

  //     title:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  //   },
  //   {
  //     name: "Rowan Sullivan",
  //     image: RowanSullivan,
  //     image2: YashMittal,

  //     title:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  //   },
  //   {
  //     name: "Yash Mittal",
  //     image: YashMittal,
  //     image2: RowanSullivan,

  //     title:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  //   },
  // ];

  const data = [
    {
      name: "To be announce Soon",
      image: jacobSmith,
      image2: jacobSmith,
      title: "To be announce Soon",
    },
    {
      name: "To be announce Soon",
      image: jacobSmith,
      image2: jacobSmith,

      title: "To be announce Soon",
    },
    {
      name: "To be announce Soon",
      image: jacobSmith,
      image2: jacobSmith,

      title: "To be announce Soon",
    },
    {
      name: "To be announce Soon",
      image: jacobSmith,
      image2: jacobSmith,

      title: "To be announce Soon",
    },
    {
      name: "To be announce Soon",
      image: jacobSmith,
      image2: jacobSmith,

      title: "To be announce Soon",
    },
  ];
  return (
    <>
      <div className="relative z-20">
        <div className="absolute right-0 bottom-0">
          <BgCircuitRight className="w-full" />
        </div>
        <Banner text="VOLUNTEERS" image={VolunteersImg.src} />;
        <Container glowEffect className="relative z-20">
          <div className="flex flex-wrap justify-center pb-20 max-w-5xl mx-auto">
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
