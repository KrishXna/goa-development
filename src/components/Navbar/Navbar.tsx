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
  const [showNavMenus, setShowNavMenus] = useState(-1);

  const [openMenuIndex, setOpenMenuIndex] = useState(-1);

  const pathname = usePathname();

  const handleNavbar = () => {
    setShowNav((prev) => !prev);
  };

  const handleOpenMenu = (index: number) => {
    setOpenMenuIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const handleOpenNavMenus = (index: number) => {
    setShowNavMenus((prevIndex) => (prevIndex === index ? -1 : index));
  };

  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const menuContainer = document.getElementById("submenubox");
      if (menuContainer && !menuContainer.contains(event.target as Node)) {
        setShowNavMenus(-1);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const getVariableName = (index: any) => {
    const variableNames = ["a", "b", "c", "d", "e", "f", "g"];
    return variableNames[index];
  };

  return (
    <>
      {showNav && <div className="fixed inset-0 z-[25] backdrop-blur-md" />}

      <div>
        {/* <div className="absolute z-0 left-0 top-0 w-full overflow-hidden">
          {pathname !== "/" && <BgCircuit />}
        </div> */}
        <div className={`${showNav ? "" : "overflow-hidden"} relative z-50`}>
          <div
            className={`${
              showNav
                ? "translate-x-0 translate-y-auto overflow-auto h-scree"
                : "translate-x-full"
            }
          lg:mr-6 xl:mr-20 bg-white-100 z-50 absolute right-0 duration-300 delay-150 w-full sm:1/2 md:w-1/3 lg:w-1/4`}
          >
            <div>
              <div className="w-full text-white-100 pb-10 flex flex-col justify-center items-center gap-2 mt-20">
                {NavMenuItems.map((navMenu, index) => (
                  <div
                    className={`flex gap-4 justify-end ${
                      openMenuIndex === 1 ? "items-center" : "items-start"
                    } w-full`}
                    key={index}
                  >
                    <div className="flex flex-col gap-2 group w-full">
                      <div className="flex justify-end pr-10 md:pr-20 items-center gap-2 bg-white-100 group-hover:bg-gray-100/20 duration-150 py-2 rounded-ful">
                        <div className="flex justify-end items-center gap-2 duration-300 w-full">
                          <div onClick={() => handleOpenMenu(index)}>
                            {navMenu?.children &&
                              navMenu.children.length > 0 && (
                                <div className="border border-[#000]">
                                  <DownArrowIcon
                                    className="w-3 cursor-pointer text-[#000]"
                                    fill="black"
                                  />
                                </div>
                              )}
                          </div>
                          <div className="text-[#000] font-bold text-base uppercase">
                            <Link
                              href={navMenu.slug}
                              onClick={() => setShowNav(false)}
                            >
                              {navMenu.name}
                            </Link>
                          </div>
                        </div>
                      </div>

                      {openMenuIndex === index && (
                        <ul className="relative text-[#000] font-semibold text-base flex flex-col items-end gap-1 w-full lg:pr-10">
                          {navMenu?.children &&
                            navMenu?.children.length > 0 &&
                            navMenu?.children.map((child, childIndex) => (
                              <div
                                className="flex justify-end gap-2 w-full"
                                key={childIndex}
                              >
                                <div className="w-full">
                                  <li className="hover:bg-gray-100/20 rounded-ful py-2 text-end pr-10">
                                    <Link
                                      href={child.slug}
                                      onClick={() => setShowNav(false)}
                                    >
                                      {getVariableName(childIndex)}.{" "}
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
        {/* Mobile Menu */}
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
                    className={`hidden lg:block ${showNav ? "opacity-0" : ""}`}
                  >
                    {/* <ul className="flex gap-x-6 text-white-200">
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
                        <Link href="/cfp">CFP</Link>
                      </li>
                      <li>
                        <Link href="/contact-us">Contact Us</Link>
                      </li>
                      <li className="border border-white-100" />
                    </ul> */}
                    <ul className="flex text-white-100 gap-8" id="submenubox">
                      {NavMenuItems.map((navMenu, index) => (
                        <div
                          key={index}
                          className="flex flex-col duration-500 delay-500 cursor-pointer relative"
                        >
                          <li
                            className="uppercase flex justify-center items-center gap-1"
                            onClick={() => handleOpenNavMenus(index)}
                          >
                            <Link href={navMenu.slug}>{navMenu.name}</Link>
                            {navMenu?.children &&
                              navMenu?.children.length > 0 && (
                                <DownArrowIcon
                                  className={`w-4 cursor-pointer text-[#000] ${
                                    showNavMenus === index ? "rotate-180" : ""
                                  }`}
                                  fill="white"
                                />
                              )}
                          </li>

                          {showNavMenus === index && (
                            <div
                              className={`opacity- overflow-hidde duration-75 group-hover:opacity-100 absolute top-10 bg-white-100 lg:w-60 rounded-md`}
                            >
                              {navMenu?.children?.map((child, childIndex) => (
                                <Link
                                  key={childIndex}
                                  href={child.slug}
                                  onClick={() => setShowNavMenus(-1)}
                                >
                                  <li className="text-[#000] px-4 py-2 font-semibold hover:bg-gray-100 hover:text-white-100">
                                    {child.name}
                                  </li>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </ul>
                  </div>
                  {/* Hamburger */}
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
