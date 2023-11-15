import React from "react";
import Container from "@/components/Container";
import BannerImg from "@/assets/tinified/speaker.png";
import Banner from "@/components/Banner/Banner";
import { Usercard } from "@/components/Card";
import JackDaniel from "@/assets/mentors/jackdaniel.jpg";
import JackDaniel2 from "@/assets/mentors/jackdanielv2.jpg";
import VandanaVerma from "@/assets/mentors/vandana.jpg";
import VandanaVerma2 from "@/assets/mentors/vandanav2.jpg";
import AdityaSood from "@/assets/mentors/Aditya_Sood.png";
import Fernando from "@/assets/mentors/fernando.jpg";
import Fernando2 from "@/assets/mentors/fernandov2.jpg";
import Sapan from "@/assets/mentors/sapna.jpg";
import ArjunThusu from "@/assets/mentors/arjjunthusu.jpg";
import Mentors from "@/components/Speakers/Mentors";

const page = () => {
  // const data = [
  //   {
  //     name: "Jack Daniel",
  //     image: JackDaniel,
  //     image2: JackDaniel2,
  //     title: "Co-founder Security BSides",
  //     twitter: "@jack_daniel",
  //     linkedin: "https://www.linkedin.com/in/jackadaniel/",
  //   },
  //   {
  //     name: "Vandana Verma",
  //     image: VandanaVerma,
  //     image2: VandanaVerma2,
  //     title:
  //       "Security Leader @ Snyk | OWASP BoD | President InfosecGirls | DevRel, SecRel, opensource",
  //     twitter: "@InfosecVandana",
  //     linkedin: "https://www.linkedin.com/in/vandana-verma/",
  //   },
  //   {
  //     name: "Aditya Sood",
  //     image: AdityaSood,
  //     image2: AdityaSood,
  //     title:
  //       "Sr. Director @ F5 | Cyber Security Leader, Advisor, Author of Targeted Cyber Attacks and Empirical Cloud Security Books",
  //     twitter: "@AdityaKSood",
  //     linkedin: "https://www.linkedin.com/in/adityaks/",
  //   },
  //   {
  //     name: "Fernando",
  //     image: Fernando,
  //     image2: Fernando2,
  //     title: "Staff Platform Security Engineer at Yalo",
  //     twitter: "@FernandoGont",
  //     linkedin: "https://www.linkedin.com/in/fernandogont/",
  //   },
  //   {
  //     name: "Sapan",
  //     image: Sapan,
  //     image2: Sapan,
  //     title:
  //       "Global CISO @ Perfetti Van Melle | Founder | Board Member | Cyber and Information Risk Practitioner | Speaker | Jury member",
  //     twitter: "@sapytalwar",
  //     linkedin: "https://www.linkedin.com/in/sapantalwar/",
  //   },
  //   {
  //     name: "Arjun Thusu",
  //     image: ArjunThusu,
  //     image2: ArjunThusu,
  //     title:
  //       "Chief Information Officer @ Mercury® Financial | CIO | 5x CISO | Investor | Board Member",
  //     twitter: "",
  //     linkedin: "https://www.linkedin.com/in/arjun-t-85a6952",
  //   },
  // ];
  return (
    <>
      <Banner text="SPEAKERS" image={BannerImg.src} />
      <Container glowEffect>
        <div className="flex flex-col gap-8">
          <h2 className="text-white-100 font-bold text-3xl">Speakers</h2>
          <p className="text-white-100/80 text-xl font-normal">
            Experience insights from industry pioneers at BSides Goa! Our lineup
            of distinguished speakers brings a wealth of knowledge to the
            forefront. From [dates], join us for a series of enlightening talks
            and engaging discussions that delve into the latest trends,
            challenges, and innovations in cybersecurity. Get ready to be
            inspired and gain fresh perspectives from these thought leaders.
            Explore the speaker profiles below and prepare for an exceptional
            learning journey.
          </p>
          {/* <div className="flex flex-wrap justify-center">
            {data.map((item) => (
              <Usercard
                key={item.name}
                src={item.image.src}
                img={item.image2?.src}
                name={item.name}
                title={item.title}
              />
            ))}
          </div> */}
        </div>
      </Container>
      <Mentors />
    </>
  );
};

export default page;
