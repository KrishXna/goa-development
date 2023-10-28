import React from "react";
import Container from "@/components/Container";
import SocialIcons from "../SocialIcons/SocialIcons";
import Logo from "@/assets/Images/logo.png";
const Footer = () => {
  return (
    <>
      <Container>
        <div className="py-4 md:flex justify-between text-white-200/80 text-sm border-b border-yellow-200">
          <div>
            <ul className="w-full md:1/4 flex flex-col gap-2 md:gap-4">
              <li className="text-white-100 text-xl">Event Information</li>
              <li>25th - 27th April 2023</li>
              <li>8:30 AM - 7:00 PM</li>
              <li>Planet Hollywood Resort, Goa</li>
              <li>Admin@bsidesgoa.in</li>
              <li>Sponsor@bsidesgoa.in</li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <ul className="w-full md:1/4  flex flex-col gap-2 md:gap-4">
              <li className="text-white-100 text-xl">About</li>
              <li>BSides Goa</li>
              <li>Core Team</li>
              <li>Volunteers</li>
              <li>Mentors</li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <ul className="w-full md:1/4  flex flex-col gap-2 md:gap-4">
              <li className="text-white-100 text-xl">Schedule</li>
              <li>Trainings</li>
              <li>Speakers</li>
              <li>CTF</li>
              <li>Live Hacking Event</li>
              <li>Career Carnival</li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <ul className="w-full md:1/4  flex flex-col gap-2 md:gap-4">
              <li className="text-white-100 text-xl">Sponsors</li>
              <li>Community Partner</li>
              <li>Register</li>
              <li>Community Partner</li>
              <li>Contact Us</li>
              <li>
                <SocialIcons />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-4">
          <div>
            <img src={Logo.src} alt="Logo" className="w-40" />
          </div>
          <div>
            <p className="text-sm lg:text-lg font-normal text-white-200/80">
              ©2024 BSides GOA All rights reserved
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
