import React from "react";
import Container from "@/components/Container";
import { LineIcons, LinesLeftIcon, LinesRightIcon } from "@/assets/Icons";
import Slider from "@/assets/Images/Group.png";
import Image from "next/image";
import SwiperSlider from "../Slider/Slider";
const Glimpse = () => {
  return (
    <div className="w-full bg-cover bg-no-repeat bg-center object-contain bg-[#1d2329]">
      <Container className="py-8 relative z-20 overflow-hidden">
        <div className="flex justify-center md:gap-6">
          <LineIcons className="w-10" />
          <div className="lg:text-3xl font-semibold text-center md:flex justify-center">
            <h2 className="text-white-100">RELIVE THE MOMENTS :&nbsp;</h2>
            <span className="text-yellow-200">A GLIMPSE OF BSIDES GLOBAL</span>
          </div>
          <LineIcons className="w-10" />
        </div>
        <SwiperSlider />
        <div className="flex justify-center md:gap-6">
          <LineIcons className="w-10" />

          <div className="lg:text-3xl font-semibold text-center md:flex justify-center">
            <h2 className="text-white-100">BSIDES GOA :&nbsp;</h2>
            <span className="text-yellow-200">SECURITY BY THE BEACH</span>
          </div>
          <LineIcons className="w-10" />
        </div>
        <p className="text-sm md:text-base font-semibold text-center text-white-100/80 mt-2 lg:px-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Container>
    </div>
  );
};

export default Glimpse;
