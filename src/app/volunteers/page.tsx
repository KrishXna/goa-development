import React from "react";
import Container from "@/components/Container";
import VolunteersImg from "@/assets/tinified/voluntteer.jpg";
import Banner from "@/components/Banner/Banner";
import { Usercard } from "@/components/Card";
import { BgCircuitRight } from "@/assets/Icons";
import Silhoutte from "@/assets/Silhoutte.png";

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
        <Banner text="VOLUNTEERS" image={VolunteersImg.src} />;
        <Container glowEffect className="relative z-20">
          <div className="flex flex-wrap justify-center pb-20 max-w-5xl mx-auto">
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
        </Container>
      </div>
    </>
  );
};

export default page;
