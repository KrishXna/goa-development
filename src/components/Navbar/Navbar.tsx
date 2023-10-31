import React from "react";
import Container from "@/components/Container";
import Image from "next/image";
import Logo from "@/assets/Images/logo.png";
import MenuIcon from "@/assets/Icons/MenuIcon";
import BgCircuit from "@/assets/Icons/BgCircuit";
const Navbar = () => {
  return (
    <div className="relative">
      {/* <div className="bg-[#1A1D23] absolute top-0 right-0 z-50 border border-white-100 w-full md:w-1/4">
        <div className="flex justify-end text-yellow-100 p-5 relative">
          <span className="w-8 h-[3px] rounded-full bg-yellow-200 -rotate-45 absolute"></span>
          <span className="w-10 h-[3px] rounded-full bg-yellow-200 rotate-45"></span>
        </div>
        <div className="px-5 py-4">
          <div className="w-full h-full border border-white-100 flex items-center justify-between py-4">
            <div className="w-8 h-[1px] bg-white-100"></div>
            <div className="uppercase text-white-100 font-bold text-2xl px-4">
              Home
            </div>
          </div>
          <div className="w-full h-full border border-white-100 flex items-center justify-between py-4">
            <div className="w-8 h-[1px] bg-white-100"></div>
            <div className="uppercase text-white-100 font-bold text-2xl px-4">
              About
            </div>
          </div>
          <div className="w-full h-full border border-white-100 flex items-center justify-between py-4">
            <div className="w-8 h-[1px] bg-white-100"></div>
            <div className="uppercase text-white-100 font-bold text-2xl px-4">
              Home
            </div>
          </div>
          <div className="w-full h-full border border-white-100 flex items-center justify-between py-4">
            <div className="w-8 h-[1px] bg-white-100"></div>
            <div className="uppercase text-white-100 font-bold text-2xl px-4">
              SCHEDULE
            </div>
          </div>
          <div className="w-full h-full border border-white-100 flex items-center justify-between py-4">
            <div className="w-8 h-[1px] bg-white-100"></div>
            <div className="uppercase text-white-100 font-bold text-2xl px-4">
              SPONSORS
            </div>
          </div>
          <div className="w-full h-full border border-white-100 flex items-center justify-between py-4">
            <div className="w-8 h-[1px] bg-white-100"></div>
            <div className="uppercase text-white-100 font-bold text-2xl px-4">
              Contact us
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="absolute z-0">
        <BgCircuit />
      </div> */}
      <Container className="relative z-20">
        <div className="flex justify-between items-center py-2 border-b border-yellow-100">
          <div>
            <Image src={Logo} alt="Besides_Goa_Logo" className="w-40" />
          </div>
          <div className="hidden md:block">
            <div className="flex gap-4 items-center justify-center">
              <div className="flex gap-4">
                <div>
                  <ul className="flex gap-x-8 text-white-200/80">
                    <li>About</li>
                    <li>Schedule</li>
                    <li>Sponsors</li>
                    <li>Contact Us</li>
                    <li className="border border-white-" />
                  </ul>
                </div>
                <div>
                  <MenuIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden block">
            <MenuIcon />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
