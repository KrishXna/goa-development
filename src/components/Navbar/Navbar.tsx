"use client";
import React, { useState, useEffect, use } from "react";
import Container from "@/components/Container";
import Image from "next/image";
import Logo from "@/assets/Images/logo.png";
import BgCircuit from "@/assets/Icons/BgCircuit";
import { DownArrowIcon } from "@/assets/Icons";
import { NavMenuItems } from "../NavMenuItems/NavMenuItems";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(-1);

  const pathname = usePathname();

  const handleNavbar = () => {
    setShowNav((prev) => !prev);
  };

  const handleOpenMenu = (index: number) => {
    setOpenMenuIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <>
      {showNav && <div className="fixed inset-0 z-[25] backdrop-blur-md" />}

      <div>
        <div className="absolute z-0 left-0 top-0 w-full overflow-hidden">
          {pathname !== "/" && <BgCircuit />}
        </div>
        {/* <Container className="relative z-50"> */}
        <div className={`${showNav ? "" : "overflow-hidden"} relative z-50`}>
          <div
            className={`${
              showNav
                ? "translate-x-0 translate-y-auto overflow-auto h-scree"
                : "translate-x-full"
            }
            bg-[#1A1D23] border border-white-100 z-50 absolute right-0 duration-300 delay-150 w-full lg:w-1/2`}
          >
            <div className="pr-[200px]">
              <div className="w-full text-white-100 p-2 sm:p-6 pb-10 flex flex-col justify-center items-center gap-4 mt-20">
                {NavMenuItems.map((navMenu, index) => (
                  <div
                    className={`flex gap-4 justify-end ${
                      openMenuIndex === 1 ? "items-center" : "items-start"
                    } w-full`}
                    key={index}
                  >
                    <div className="flex flex-col gap-2 group w-full">
                      <div className="flex justify-end pr-10 items-center gap-2 bg-white-100 group-hover:bg-yellow-200 duration-150 py-2 rounded-full">
                        <div className="flex justify-end items-center gap-2 duration-300">
                          <div onClick={() => handleOpenMenu(index)}>
                            {navMenu?.children &&
                              navMenu.children.length > 0 && (
                                <div className="border border-[#000] p-1 -mt-2">
                                  <DownArrowIcon className="w-4 cursor-pointer text-[#000]" />
                                </div>
                              )}
                          </div>
                          <div className="text-[#000] font-bold text-2xl md:text-3xl uppercase">
                            <Link
                              href={navMenu.slug}
                              onClick={() => setShowNav(false)}
                            >
                              {navMenu.name}
                            </Link>
                          </div>
                        </div>
                        {/* <div className="w-20 group-hover:w-24 md:group-hover:w-40 duration-300 h-0 border border-white-100 group-hover:border-yellow-200"></div>
                      <div className="font-bold text-2xl md:text-5xl group-hover:text-yellow-200">
                        0{index}
                      </div> */}
                      </div>

                      {openMenuIndex === index && (
                        <ul className="relative text-[#000] font-semibold text-xl md:text-3xl flex flex-col items-end gap-5 w-full">
                          {navMenu?.children &&
                            navMenu?.children.length > 0 &&
                            navMenu?.children.map((child, childIndex) => (
                              <div
                                className="flex justify-end gap-2 w-full"
                                key={childIndex}
                              >
                                <div className="mt-2 w-full">
                                  <li className="bg-white-100 hover:bg-yellow-200 rounded-full py-2 text-end pr-10">
                                    <Link
                                      href={child.slug}
                                      onClick={() => setShowNav(false)}
                                    >
                                      {child.name}
                                    </Link>
                                  </li>
                                </div>
                              </div>
                            ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <Container className="relative z-50">
          <div
            className="absolute z-0 right-0 top-0 w-60 h-60 rounded-full overflow-hidden blur-3xl opacity-40 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, #FFDE77 0%, #FFB32E 100%)",
            }}
          ></div>
          <div
            className={`flex justify-between items-center py-2 border-b border-yellow-100 ${
              showNav ? "border-none" : "border-yellow-100"
            }`}
          >
            <div className={`${showNav ? "opacity-0" : ""}`}>
              <Link href={"/"}>
                <Image src={Logo} alt="Besides_Goa_Logo" className="w-40" />
              </Link>
            </div>
            <div>
              <div className="flex gap-4 items-center justify-center">
                <div className="flex gap-4">
                  <div
                    className={`hidden md:block ${showNav ? "opacity-0" : ""}`}
                  >
                    <ul className="flex gap-x-6 text-white-200">
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/schedule">Schedule</Link>
                      </li>
                      <li>
                        <Link href="/sponsors">Sponsors</Link>
                      </li>
                      <li>
                        <Link href="/">Contact Us</Link>
                      </li>
                      <li className="border border-white-100" />
                    </ul>
                  </div>
                  <div className="pr-4 relative z-50">
                    <button
                      className="flex flex-col gap-2 items-end"
                      onClick={handleNavbar}
                    >
                      <span
                        className={`w-8 h-[3px] rounded-full bg-yellow-200 duration-300 ${
                          showNav ? "-rotate-45 relative top-3" : ""
                        }`}
                      ></span>
                      <span
                        className={`w-10 h-[3px] rounded-full bg-yellow-200 duration-300 ${
                          showNav ? "rotate-45 " : ""
                        }`}
                      ></span>
                      <span
                        className={`w-6 h-[3px] rounded-full bg-yellow-200 duration-300 ${
                          showNav ? "hidden" : "block"
                        }`}
                      ></span>
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
