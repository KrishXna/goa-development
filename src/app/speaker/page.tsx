import React from "react";
import Container from "@/components/Container";
import BannerImg from "@/assets/tinified/speaker.jpg";
import Banner from "@/components/Banner/Banner";
import { BgCircuitRight } from "@/assets/Icons";

const page = () => {
  return (
    <>
      <div className="relative z-20">
        <div className="absolute right-0 bottom-0">
          <BgCircuitRight className="w-full" />
        </div>
        <Banner text="Speaker" image={BannerImg.src} />
        <Container glowEffect className="pb-20">
          <div className="flex flex-col gap-8 h-screen">
            <div className="bg-[#000] text-white-100 font-bold text-xl p-4 py-40 rounded-md">
              <p className="flex justify-center items-center h-full">
                (Coming Soon)
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default page;
