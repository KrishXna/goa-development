"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import Image from "next/image";
import Logo from "@/assets/Images/logo.png";
import BgCircuit from "@/assets/Icons/BgCircuit";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNavbar = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <>
      <div className="relative">
        {showNav ? (
          <div
            className={`bg-[#1A1D23] z-50 border absolute top-6 ${
              showNav ? "" : "right-[0px]"
            } border-white-100 w-1/2`}
          >
            <div
              className="flex justify-end text-yellow-100 p-5 relative"
              onClick={() => setShowNav(false)}
            >
              <span className="w-8 h-[3px] rounded-full bg-yellow-200 -rotate-45 absolute"></span>
              <span className="w-10 h-[3px] rounded-full bg-yellow-200 rotate-45"></span>
            </div>
            <div className="px-5 py-4">
              <div className="flex">
                <div className="uppercase text-white-100 font-bold text-2xl px-4 w-full">
                  <ul className="flex flex-col gap-4 justify-end items-end">
                    <li className="flex items-center gap-4">
                      <a href="/">Home</a>
                      <span className="w-20 border border-white-100 rotate-"></span>
                      <span className="">00</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <a href="/about">About</a>
                      <span className="w-20 border border-white-100 rotate-"></span>
                      <span className="">01</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <a href="/schedule">Schedule</a>
                      <span className="w-20 border border-white-100 rotate-"></span>
                      <span className="">02</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <a
                        href="
                      sponsors"
                      >
                        Sponsors
                      </a>
                      <span className="w-20 border border-white-100 rotate-"></span>
                      <span className="">03</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <a href="#">Register</a>
                      <span className="w-20 border border-white-100 rotate-"></span>
                      <span className="">04</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <a href="#">Contact us</a>
                      <span className="w-20 border border-white-100 rotate-"></span>
                      <span className="">05</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="absolute z-0 left-0 top-0 w-full overflow-hidden">
          <BgCircuit />
        </div>
      </div>
      <div>
        <Container className="relative z-20">
          <div className="flex justify-between items-center py-2 border-b border-yellow-100">
            <div>
              <Image src={Logo} alt="Besides_Goa_Logo" className="w-40" />
            </div>
            <div className="">
              <div className="flex gap-4 items-center justify-center">
                <div className="flex gap-4">
                  <div className="hidden md:block">
                    <ul className="flex gap-x-8 text-white-200/80">
                      <li>About</li>
                      <li>Schedule</li>
                      <li>Sponsors</li>
                      <li>Contact Us</li>
                      <li className="border border-white-" />
                    </ul>
                  </div>
                  <div>
                    <button
                      className="flex flex-col gap-2 items-end"
                      onClick={handleNavbar}
                    >
                      <span className="w-8 h-[3px] rounded-full bg-yellow-200"></span>
                      <span className="w-10 h-[3px] rounded-full bg-yellow-200"></span>
                      <span className="w-6 h-[3px] rounded-full bg-yellow-200"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
