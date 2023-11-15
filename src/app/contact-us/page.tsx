"use client";
import React from "react";
import BackgroundImg from "@/assets/Images/bsidesgoa-bg.png";
import DotImg from "@/assets/Images/dotsimg.png";
import ContactForm from "@/components/ContactForm/ContactForm";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { conf } from "@/conf/conf";
import SocialIcons from "@/components/SocialIcons/SocialIcons";

const page = () => {
  return (
    <>
      <GoogleReCaptchaProvider reCaptchaKey={conf.recaptchaSiteKey}>
        <div className="relative" id="contact">
          <div
            className="bg-cover w-full bg-no-repeat"
            style={{
              backgroundImage: `url(${BackgroundImg.src})`,
            }}
          >
            <div className="lg:flex justify-between items-center w-full lg:px-24">
              <div
                className="px-10 pt-16 lg:pb-0 font-montserrat"
                style={{
                  textShadow: "0px 4px  4px #00000094",
                }}
              >
                <div className="w-full lg:px-0">
                  <h2 className="text-[40px] text-shadow-ts2 text-white-100 uppercase font-bold">
                    25th - 27th April 2K24
                  </h2>
                  <p className="mt-4 lg:mt-2 max-w-[500px] text-md font-semibold font-montserrat text-shadow-ts1 text-white-100">
                    Watch Out This Space For More News On The Biggest Cyber
                    Security Event of 2K24.
                  </p>
                </div>
              </div>
              {/* Form */}
              <div className="py-16 sm:px-10">
                <div
                  className="relative bg-gradient
                outline-blue_gray-400_c1 p-8 rounded-[17px] shadow-bs md:w-[28rem]"
                >
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Form End */}
        <div className="w-full" id="info">
          <div className="relative bg-cover overflow-hidden bg-gray-900 bg-no-repeat flex flex-col items-center justify-start pt-16">
            <div className="w-full">
              <img
                src={DotImg.src}
                alt="bg-dot"
                className="absolute max-w-[400%] animate-spin-slowest -top-[200px] -left-[200px] sm:-left-[1100px] sm:-top-[400px]"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-full z-50 font-montserrat">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start max-w-[1217px] mx-auto md:px-5 w-full">
                  <div className="lg:flex flex-col justify-start w-full">
                    <div
                      className="lg:px-40 sm:px-10 px-2"
                      style={{
                        textShadow: "0px 4px  4px #00000094",
                      }}
                    >
                      <div className="flex flex-col justify-center items-center text-white-100">
                        <p className="text-3xl font-medium text-shadow-ts1 tracking-[7.05px] uppercase">
                          BSides Goa 2K24
                        </p>
                        <div className="flex items-center mt-2 min-w-[380px]">
                          <span className="bg-yellow-200 w-[15%] h-[3px]"></span>
                          &nbsp;
                          <p className="font-medium text-yellow-200 font-montserrat text-lg">
                            Security by the Beach
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[41px] items-center justify-start mt-10 w-full text-white-100">
                      <div className="bg-white-100 h-px w-full" />
                      <div className="sm:flex justify-between w-full px-10 lg:px-40">
                        <div className="flex flex-col gap-6 items-start justify-start">
                          <p className="text-2xl font-semibold">What</p>
                          <p className="text-xl font-light">
                            <>
                              Cyber Security
                              <br />
                              Conference 2k24
                            </>
                          </p>
                        </div>
                        <div className="mt-10 sm:mt-0 flex flex-col gap-2 md:gap-10 items-start justify-start">
                          <p className="text-2xl font-semibold">When</p>
                          <p className="text-xl font-light">
                            25th - 27th April 2K24
                          </p>
                        </div>
                        <div className="flex mt-10 sm:mt-0 flex-col gap-2 md:gap-10 items-start justify-start">
                          <p className="text-2xl font-semibold">Where</p>
                          <p className="text-xl font-light">
                            Planet Hollywood <br /> Beach Resort, Goa, India
                          </p>
                        </div>
                      </div>
                      <div className="bg-white-100 h-px w-full" />
                    </div>
                  </div>
                </div>
                {/* Newsletter */}
                <div className="w-full lg:w-1/2 sm:px-10 px-2">
                  <h2 className="text-center mt-14 sm:text-2xl font-montserrat font-medium text-white-100 tracking-[12px] uppercase">
                    Let&apos;s connect
                  </h2>
                </div>
                <SocialIcons className="mt-6 gap-10" />

                <div
                  className="flex blur-[8px] justify-center items-center gap-x-8
              bg-cover bg-no-repeat h-[80px] w-full"
                  style={{
                    backgroundImage: "url('/img_group14.svg')",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="bg-white-A700 relative w-full">
          <div className="w-full pb-14">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13866.169072876486!2d73.90332168231483!3d15.31745476268616!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb6e55dc86433%3A0x343f2d8ad5194dc1!2sPlanet%20Hollywood%20Beach%20Resort!5e0!3m2!1sen!2sin!4v1697722409102!5m2!1sen!2sin"
              width="100%"
              height="500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </GoogleReCaptchaProvider>
    </>
  );
};

export default page;
