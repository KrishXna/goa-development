import React from "react";
import Image from "next/image";
import Container from "@/components/Container";
import ButtonBackground from "@/assets/Images/button_frame.png";
import Timer from "../Timer/Timer";
import { Button } from "../Button";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <div className="relative">
        <Container>
          <div className="md:flex justify-between pt-2">
            <div className="text-3xl md:text-5xl font-bold max-w-sm text-yellow-200 text-left">
              BSIDES GOA <br />
              <span className="text-white-100">SECURITY</span> CONFERENCE
              <p className="text-xl text-white-100">25th-27th April 2K24</p>
            </div>
            <div className="flex flex-col gap-y-4 pr-20 mt-6 md:mt-0">
              <p className="max-w-xs text-white-100 lg:text-white-200/80">
                Hurry! Go and grab your passes in early bird discount.
              </p>
              <div>
                <Button variant="colored">
                  REGISTER <br /> (Coming Soon)
                </Button>
              </div>
            </div>
          </div>
        </Container>
        <div className="relative mt-4 md:mt-0">
          <div
            className="absolute top-0 inset-x-0 md:h-[200px] z-10"
            style={{
              background:
                "linear-gradient(rgb(26, 29, 35) 0%, rgba(30, 34, 41, 0) 100%)",
            }}
          ></div>
        </div>
        {/* Video */}
        <div className="relative">
          <video
            src="/goa.mp4"
            muted
            loop
            autoPlay
            className="w-full h-full"
          ></video>
          {/* Social Links */}
          <div className="absolute top-[50%] translate-y-[-90%] right-10 xl:right-36">
            <div className="hidden lg:flex flex-col gap-y-8 pt-8 justify-center items-center text-lg text-yellow-300">
              <Link
                href="https://www.instagram.com/bsides_goa/"
                target="_blank"
              >
                <div className="w-10 h-10 rounded-full bg-[#000]">
                  <div className="flex justify-center items-center h-10">
                    <i className="fa-brands fa-instagram text-yellow-200"></i>
                  </div>
                </div>
              </Link>
              <Link href="https://twitter.com/bsidesgoa" target="_blank">
                <div className="w-10 h-10 rounded-full bg-[#000]">
                  <div className="flex justify-center items-center h-10">
                    <i className="fa-brands fa-x-twitter text-yellow-200"></i>
                  </div>
                </div>
              </Link>

              <Link href="https://www.facebook.com/bsidesgoa" target="_blank">
                <div className="w-10 h-10 rounded-full bg-[#000]">
                  <div className="flex justify-center items-center h-10">
                    <i className="fa-brands fa-facebook text-yellow-200"></i>
                  </div>
                </div>
              </Link>
              <a href="mailto:hello@bsidesgoa.in" target="_blank">
                <div className="w-10 h-10 rounded-full bg-[#000]">
                  <div className="flex justify-center items-center h-10">
                    <i className="fa-solid fa-envelope text-yellow-200"></i>
                  </div>
                </div>
              </a>
              <Link
                href="https://www.linkedin.com/company/bsidesgoa/"
                target="_blank"
              >
                <div className="w-10 h-10 rounded-full bg-[#000]">
                  <div className="flex justify-center items-center h-10">
                    <i className="fa-brands fa-linkedin-in text-yellow-200"></i>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -bottom-1 inset-x-0 h-[200px] z-10"
            style={{
              background:
                "linear-gradient(0deg, rgb(26, 29, 35) 0%, rgba(30, 34, 41, 0) 100%)",
            }}
          ></div>
        </div>
      </div>

      <Container className="relative z-20 lg:pt-20">
        <div className="md:flex justify-between gap-y-4">
          <div className="max-w-md w-full md:w-1/2 flex flex-col gap-4">
            <h2 className="text-4xl font-medium text-white-100">Overview</h2>
            <p className="text-md font-normal text-white-100 lg:text-white-200/80">
              BSides Goa is a community-driven effort that brings cybersecurity
              enthusiasts together. We organize independent BSides-approved
              events in Goa, fostering open discussions, demos, and
              interactions. Our aim is to encourage collaborative learning and
              explore cybersecurity challenges in a friendly, accessible
              environment. Join us at BSides Goa to be part of a growing
              community that shares knowledge and insights, shaping the future
              of cybersecurity.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <video
              src="/overview.mp4"
              muted
              loop
              autoPlay
              className="w-full h-full"
            ></video>
          </div>
        </div>
      </Container>

      <div
        className="w-full mt-16 lg:bg-cover relative z-20"
        style={{ backgroundImage: `url(${ButtonBackground.src})` }}
      >
        <Timer />
      </div>
    </>
  );
};

export default Hero;
