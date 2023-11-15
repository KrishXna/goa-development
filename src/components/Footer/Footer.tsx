"use client";
import React from "react";
import Container from "@/components/Container";
import SocialIcons from "../SocialIcons/SocialIcons";
import Logo from "@/assets/Images/logo.png";
import { BgCircuitRight } from "@/assets/Icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  className?: string;
};

const Footer = ({ className }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <div className="relative">
        {/* <div className="absolute right-0 bottom-0">
          <BgCircuitRight className="w-full" />
        </div> */}
      </div>
      <div className={`w-full pt-10 relative ${className}`}>
        <Container className="z-20 relative">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-5xl mx-auto py-4 md:flex justify-between text-white-200/90 text-base border-b border-yellow-200">
              <div>
                <ul className="w-full md:1/4 flex flex-col gap-2 md:gap-4">
                  <li className="text-white-100 text-xl">Event Information</li>
                  <li>25th - 27th April 2023</li>
                  <li>8:30 AM - 7:00 PM</li>
                  <li>Planet Hollywood Resort, Goa</li>
                  <Link href="https://www.hello@bsidesgoa.com" target="_blank">
                    <li className="font-bold hover:text-yellow-200">
                      hello@bsidesgoa.com
                    </li>
                  </Link>
                  <Link
                    href="https://www.sponsors@bsidesgoa.com"
                    target="_blank"
                  >
                    <li className="font-bold hover:text-yellow-200">
                      Sponsors@bsidesgoa.com
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <ul className="w-full md:1/4  flex flex-col gap-2 md:gap-4">
                  <li className="text-white-100 text-xl hover:text-yellow-200">
                    <Link href="/about">About</Link>
                  </li>
                  <li className="hover:text-yellow-200">
                    <Link href="/">BSides Goa</Link>
                  </li>
                  <li className="hover:text-yellow-200">
                    <Link href="/coreteam">Core Team</Link>
                  </li>
                  <li className="hover:text-yellow-200">
                    <Link href="/volunteer">Volunteers</Link>
                  </li>
                  <li className="hover:text-yellow-200">
                    <Link href="/mentors">Mentors</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <ul className="w-full md:1/4  flex flex-col gap-2 md:gap-4">
                  <li className="text-white-100 text-xl hover:text-yellow-200">
                    <Link href="/Schedule">Schedule </Link>
                  </li>
                  <li className="hover:text-yellow-200">
                    <Link href="/trainings">Trainings</Link>
                  </li>
                  <li className="hover:text-yellow-200">
                    <Link href="/speaker">Speakers</Link>
                  </li>
                  <li className="hover:text-yellow-200">
                    <Link href="/ctf">CTF</Link>
                  </li>
                  <li className="hover:text-yellow-200">
                    <Link href="/live-event-hacking">Live Hacking Event</Link>
                  </li>
                  <li className="hover:text-yellow-200">
                    <Link href="/career-carnival">Career Carnival</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <ul className="w-full md:1/4  flex flex-col gap-2 md:gap-4">
                  <li className="text-white-100 text-xl hover:text-yellow-200">
                    <Link href="/sponsors">Sponsors</Link>
                  </li>
                  {/* <li className="hover:text-yellow-200">Community Partner</li> */}
                  <li className="font-bold hover:text-yellow-200">
                    <Link href="/register">Register</Link>
                  </li>
                  <li className="hover:text-yellow-200">
                    <Link href="#">Community Partner</Link>
                  </li>
                  <li className="font-bold hover:text-yellow-200">
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <SocialIcons className="gap-2" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center py-4">
              <div>
                <Link href="/">
                  <img src={Logo.src} alt="Logo" className="w-40" />
                </Link>
              </div>
              <div>
                <p className="text-sm lg:text-lg font-normal text-white-200/90">
                  ©2024 BSides GOA All rights reserved
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
