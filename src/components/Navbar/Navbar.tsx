import React from "react";
import Container from "@/components/Container";
import Image from "next/image";
import Logo from "@/assets/Images/logo.png";
import MenuIcon from "@/assets/Icons/MenuIcon";
import BgCircuit from "@/assets/Icons/BgCircuit";
import Hero from "../Hero/Hero";
import { BgCircuitRight } from "@/assets/Icons";
const Navbar = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute z-0">
        <BgCircuit />
      </div>
      <div
        className="w-72 h-72 rounded-full absolute right-0 z-0 opacity-40 blur-3xl"
        style={{
          background: "linear-gradient(180deg, #FFE27E 0%, #FFA81C 100%)",
        }}
      ></div>
      <Container className="relative z-20">
        <div className="flex justify-between items-center py-2 border-b border-yellow-100 z-20 relative">
          <div>
            <Image src={Logo} alt="Besides_Goa_Logo" className="w-40" />
          </div>
          <div className="hidden md:block">
            <div className="flex gap-4 items-center justify-center">
              <div className="flex gap-4">
                <div>
                  <ul className="flex gap-x-8 text-white-200/80">
                    <li className="cursor-pointer hover:text-white-100">
                      About
                    </li>
                    <li className="cursor-pointer hover:text-white-100">
                      Schedule
                    </li>
                    <li className="cursor-pointer hover:text-white-100">
                      Sponsors
                    </li>
                    <li className="cursor-pointer hover:text-white-100">
                      Contact Us
                    </li>
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
      <Hero />
      <div className="absolute bottom-0 right-0 z-0">
        <BgCircuitRight />
      </div>
    </div>
  );
};

export default Navbar;
