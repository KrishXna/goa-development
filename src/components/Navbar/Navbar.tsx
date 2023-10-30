import React from "react";
import Container from "@/components/Container";
import Image from "next/image";
import Logo from "@/assets/Images/logo.png";
import MenuIcon from "@/assets/Icons/MenuIcon";
import BgCircuit from "@/assets/Icons/BgCircuit";
const Navbar = () => {
  return (
    <div className="relative">
      <div className="absolute z-0">
        <BgCircuit />
      </div>
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
