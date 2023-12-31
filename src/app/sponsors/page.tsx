import React from "react";
import Container from "@/components/Container";
import BannerImg from "@/assets/tinified/sponsors.jpg";
import Sponsors from "@/components/Sponsors/Sponsors";
import Banner from "@/components/Banner/Banner";
import { BgCircuitRight } from "@/assets/Icons";

const page = () => {
  return (
    <>
      <div className="relative z-20">
        <div className="absolute right-0 bottom-0">
          <BgCircuitRight className="w-full" />
        </div>
        <Banner text="SPONSORS" image={BannerImg.src} />
        <Container glowEffect>
          <div className="flex flex-col gap-8">
            <h2 className="text-white-100 font-bold text-3xl">Sponsors</h2>
            <p className="text-white-100/80 text-xl font-normal">
              BSides Goa is proud to partner with industry-leading sponsors who
              share our commitment to advancing cybersecurity knowledge and
              innovation. Our sponsors play a vital role in making this event a
              reality, enabling us to create a platform for learning,
              networking, and exploration.
            </p>
          </div>
          <Sponsors />
        </Container>
      </div>
    </>
  );
};

export default page;
