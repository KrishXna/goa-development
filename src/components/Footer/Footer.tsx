import React from "react";
import Container from "@/components/Container";
import SocialIcons from "../SocialIcons/SocialIcons";
import Logo from "@/assets/Images/logo.png";
import { BgCircuitRight } from "@/assets/Icons";
const Footer = () => {
  return (
    <>
      <div className="w-full relative">
        <div className="absolute right-0 bottom-0">
          <BgCircuitRight />
        </div>
        <Container className="z-20 relative">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-5xl mx-auto py-4 md:flex justify-between text-white-200/90 text-base border-b border-yellow-200">
              <div>
                <ul className="w-full md:1/4 flex flex-col gap-2 md:gap-4">
                  <li className="text-white-100 text-xl">Event Information</li>
                  <li>25th - 27th April 2023</li>
                  <li>8:30 AM - 7:00 PM</li>
                  <li>Planet Hollywood Resort, Goa</li>
                  <li className="font-bold">Admin@bsidesgoa.in</li>
                  <li className="font-bold">Sponsor@bsidesgoa.in</li>
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <ul className="w-full md:1/4  flex flex-col gap-2 md:gap-4">
                  <li className="text-white-100 text-xl">
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/">BSides Goa</a>
                  </li>
                  <li>
                    <a href="/coreteam">Core Team</a>
                  </li>
                  <li>
                    <a href="/volunteer">Volunteers</a>
                  </li>
                  <li>
                    <a href="/mentors">Mentors</a>
                  </li>
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <ul className="w-full md:1/4  flex flex-col gap-2 md:gap-4">
                  <li className="text-white-100 text-xl">Schedule</li>
                  <li>
                    <a href="/trainings">Trainings</a>
                  </li>
                  <li>
                    <a href="#">Speakers</a>
                  </li>
                  <li>
                    <a href="/ctf">CTF</a>
                  </li>
                  <li>Live Hacking Event</li>
                  <li>Career Carnival</li>
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <ul className="w-full md:1/4  flex flex-col gap-2 md:gap-4">
                  <li className="text-white-100 text-xl">
                    <a href="/sponsors">Sponsors</a>
                  </li>
                  <li>Community Partner</li>
                  <li className="font-bold">
                    <a href="/register">Register</a>
                  </li>
                  <li>Community Partner</li>
                  <li className="font-bold">Contact Us</li>
                  <li>
                    <SocialIcons />
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center py-4">
              <div>
                <a href="/">
                  <img src={Logo.src} alt="Logo" className="w-40" />
                </a>
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
