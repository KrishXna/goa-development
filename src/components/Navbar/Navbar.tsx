"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import Image from "next/image";
import Logo from "@/assets/Images/logo.png";
import BgCircuit from "@/assets/Icons/BgCircuit";
import { DownArrowIcon } from "@/assets/Icons";
import { NavMenuItems } from "../NavMenuItems/NavMenuItems";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(-1);

  const handleNavbar = () => {
    setShowNav((prev) => !prev);
  };

  const handleOpenMenu = (index: number) => {
    setOpenMenuIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <>
      <div className="relative">
        {showNav ? (
          <div
            className={`bg-[#1A1D23] z-50 border absolute right-0 w-full md:w-1/2 ${
              showNav ? "" : "right-[0px]"
            } border-white-100 w-1/2`}
          >
            <div
              className="flex justify-end text-yellow-100 py-10 px-5 relative"
              onClick={() => {
                setShowNav(false);
                setOpenMenuIndex(-1);
              }}
            >
              <span className="w-8 h-[3px] rounded-full bg-yellow-200 -rotate-45 absolute"></span>
              <span className="w-10 h-[3px] rounded-full bg-yellow-200 rotate-45"></span>
            </div>

            <div className="w-full text-white-100 p-6 flex flex-col gap-6">
              {NavMenuItems.map((navMenu, index) => (
                <div
                  className={`flex gap-4 justify-end ${
                    openMenuIndex === 1 ? "items-center" : "items-start"
                  } w-full`}
                  key={index}
                >
                  <div className="text-righ flex flex-col gap-2">
                    <div className="flex justify-center items-center gap-2">
                      <div onClick={() => handleOpenMenu(index)}>
                        {navMenu?.children && navMenu.children.length > 0 && (
                          <div className="border p-1">
                            <DownArrowIcon className="w-4" />
                          </div>
                        )}
                      </div>
                      <div className="text-white-100 font-bold text-2xl uppercase">
                        <a href={navMenu.slug}>{navMenu.name}</a>
                      </div>
                      <div className="w-20 h-0 border"></div>
                      <div className="font-bold text-2xl">0{index}</div>
                    </div>

                    {openMenuIndex === index && (
                      <ul className="relative -left-28 text-white-100 font-bold text-xl flex flex-col items-end gap-2">
                        {navMenu?.children &&
                          navMenu?.children.length > 0 &&
                          navMenu?.children.map((child, childIndex) => (
                            <div
                              className="flex justify-end gap-2"
                              key={childIndex}
                            >
                              <div>
                                <li>
                                  <a href={child.slug}>{child.name}</a>
                                </li>
                              </div>
                            </div>
                          ))}
                      </ul>
                    )}
                  </div>
                  {/* <div className="w-20 h-0 border"></div>
                  <div className="font-bold text-2xl">0{index}</div> */}
                </div>
              ))}
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
              <a href="/">
                <Image src={Logo} alt="Besides_Goa_Logo" className="w-40" />
              </a>
            </div>
            <div className="">
              <div className="flex gap-4 items-center justify-center">
                <div className="flex gap-4">
                  <div className="hidden md:block">
                    <ul className="flex gap-x-8 text-white-200/80">
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        {/* <a href="#">Schedule</a> */}
                        <a href="/mentors">Mentors</a>
                      </li>
                      <li>
                        <a href="/sponsors">Sponsors</a>
                      </li>
                      <li>
                        {/* <a href="#">Contact Us</a> */}
                        <a href="/reviewpanel">Review Panel</a>
                      </li>
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
