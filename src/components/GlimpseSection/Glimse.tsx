import React from "react";
import Container from "@/components/Container";
import { LineIcons, ArrowRightIcon } from "@/assets/Icons";
import SwiperSlider from "../Slider/Slider";

const Glimpse = () => {
  return (
    <div className="w-full bg-cover bg-no-repeat bg-center object-contain bg-[#1d2329]">
      <Container className="py-8 relative z-20 overflow-hidden">
        <div className="flex justify-center items-center gap-6">
          <LineIcons className="w-10" />
          <div className="lg:text-3xl font-semibold text-center justify-center">
            <h2 className="text-white-100 uppercase">
              Experience the Highlights
            </h2>
            <h2 className="text-yellow-200 uppercase">
              Sneak Peek into BSides GOA
            </h2>
          </div>
          <ArrowRightIcon className="w-10" />
        </div>
        <SwiperSlider />
        <div className="flex justify-center items-center gap-6">
          <LineIcons className="w-10" />

          <div className="lg:text-3xl font-semibold text-center md:flex gap-4 justify-center">
            <h2 className="text-white-100">BSIDES GOA</h2>
            <span className="text-yellow-200">SPONSORS</span>
          </div>
          <ArrowRightIcon className="w-10" />
        </div>
        <p className="text-sm md:text-base font-semibold text-center text-white-100/80 mt-2 lg:px-10">
          BSIDES GOA extends its sincere appreciation to our esteemed sponsors
          whose generous support will make this event possible in 2024. We will
          proudly acknowledge their commitment to cybersecurity innovation and
          knowledge sharing
        </p>
      </Container>
    </div>
  );
};

export default Glimpse;
