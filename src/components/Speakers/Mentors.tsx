import React from "react";
import JackDaniel from "@/assets/Mentorslandingpage/jackdaniel.png";
import VandanaVerma from "@/assets/Mentorslandingpage/vandana.png";
import AdityaSood from "@/assets/Mentorslandingpage/adityasood.png";
import Fernando from "@/assets/Mentorslandingpage/fernando.png";
import Sapan from "@/assets/Mentorslandingpage/sapna.png";
import ArjunThusu from "@/assets/Mentorslandingpage/arjjunthusu.png";
import Container from "@/components/Container";
import DotImage from "@/assets/Images/dotsimg.png";
import { LineIcons, ArrowRightIcon } from "@/assets/Icons";
import UserCard from "../Card/UserCard";

const Mentors = () => {
  const data = [
    {
      name: "Jack Daniel",
      image: JackDaniel,
      image2: JackDaniel,
      title: "Co-founder Security BSides",
      twitter: "https://twitter.com/@jack_daniel",
      linkedin: "https://www.linkedin.com/in/jackadaniel/",
    },
    {
      name: "Vandana Verma",
      image: VandanaVerma,
      image2: VandanaVerma,
      title:
        "Security Leader @ Snyk | OWASP BoD | President InfosecGirls | DevRel, SecRel, opensource",
      twitter: "https://twitter.com/@InfosecVandana",
      linkedin: "https://www.linkedin.com/in/vandana-verma/",
    },
    {
      name: "Aditya Sood",
      image: AdityaSood,
      image2: AdityaSood,
      title:
        "Sr. Director @ F5 | Cyber Security Leader, Advisor, Author of Targeted Cyber Attacks and Empirical Cloud Security Books",
      twitter: "https://twitter.com/@AdityaKSood",
      linkedin: "https://www.linkedin.com/in/adityaks/",
    },
    {
      name: "Fernando Gont",
      image: Fernando,
      image2: Fernando,
      title: "Staff Platform Security Engineer at Yalo",
      twitter: "https://twitter.com/@FernandoGont",
      linkedin: "https://www.linkedin.com/in/fernandogont/",
    },
    {
      name: "Sapan Talwar",
      image: Sapan,
      image2: Sapan,
      title:
        "Global CISO @ Perfetti Van Melle | Founder | Board Member | Cyber and Information Risk Practitioner | Speaker | Jury member",
      twitter: "https://twitter.com/@sapytalwar",
      linkedin: "https://www.linkedin.com/in/sapantalwar/",
    },
    {
      name: "Arjun Thusu",
      image: ArjunThusu,
      image2: ArjunThusu,
      title:
        "Chief Information Officer @ Mercury® Financial | CIO | 5x CISO | Investor | Board Member",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/arjun-t-85a6952",
    },
  ];
  return (
    <div className="w-full bg-cover bg-no-repeat bg-center object-contain relative z-20 overflow-hidden">
      <div className="relative overflow-hidden z-50">
        <div className="w-full h-full">
          <img
            src={DotImage.src}
            alt="dot_img"
            className="absolute max-w-[400%] animate-spin-slowest -top-[200px -left-[200px] sm:-left-[1100px] sm:-top-[400px]"
          />
        </div>
        <Container className="py-20 relative z-20">
          <div className="flex justify-center items-center gap-6">
            <LineIcons className="w-10" />
            <div className="md:text-3xl font-semibold text-center md:flex">
              <h2 className="text-white-100">BSIDES GOA &nbsp; </h2>
              <span className="text-yellow-200">MENTORS</span>
            </div>
            <ArrowRightIcon className="w-10" />
          </div>
          <div className="flex flex-wrap justify-center gap-x-10 max-w-5xl mx-auto mt-10">
            {data.map((item) => (
              <>
                <UserCard
                  key={item.name}
                  src={item.image.src}
                  img={item.image2?.src}
                  name={item.name}
                  title={item.title}
                  twitter={item.twitter}
                  linkedin={item.linkedin}
                />
              </>
            ))}
          </div>
        </Container>
      </div>
      <div
        className="absolute -bottom-96 -left-80 w-[700px] h-[600px] rounded-full opacity-40 blur-3xl"
        style={{
          background: "linear-gradient(180deg, #FFE27E 0%, #FFA81C 100%)",
        }}
      ></div>
      <div
        className="absolute -bottom-96 -right-80 w-[700px] h-[600px] rounded-full opacity-40 blur-3xl"
        style={{
          background: "linear-gradient(180deg, #FFE27E 0%, #FFA81C 100%)",
        }}
      ></div>
    </div>
  );
};

export default Mentors;
