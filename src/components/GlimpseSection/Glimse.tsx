import React from "react";
import Container from "@/components/Container";
import { LinesLeftIcon, LinesRightIcon } from "@/assets/Icons";
import Slider from "@/assets/Images/Group.png";
import Image from "next/image";
const Glimpse = () => {
  return (
    <div className="w-full bg-cover bg-no-repeat bg-center object-contain bg-[#1d2329]">
      <Container className="py-8">
        <div className="flex justify-center md:gap-6">
          <LinesRightIcon className="w-10" />
          <div className="lg:text-3xl font-semibold text-center md:flex justify-center">
            <h2 className="text-white-100">RELIVE THE MOMENTS :&nbsp;</h2>
            <span className="text-yellow-200">A GLIMPSE OF BSIDES GLOBAL</span>
          </div>
          <LinesLeftIcon className="w-10" />
        </div>
        {/* Slider */}
        <div className="flex justify-center items-center py-14">
          <img src={Slider.src} alt="Group_img" />
        </div>
        <div className="flex justify-center md:gap-6">
          <LinesRightIcon className="w-10" />

          <div className="lg:text-3xl font-semibold text-center md:flex justify-center">
            <h2 className="text-white-100">BSIDES GOA :&nbsp;</h2>
            <span className="text-yellow-200">SECURITY BY THE BEACH</span>
          </div>
          <LinesLeftIcon className="w-10" />
        </div>
        <p className="text-sm text-center text-white-200/80 mt-2">
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
