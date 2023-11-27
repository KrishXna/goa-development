import React from "react";
import Container from "@/components/Container";
import BannerImg from "@/assets/tinified/cfp.jpg";
import Banner from "@/components/Banner/Banner";
// import Silhoutte from "@/assets/Silhoutte.png";
import { Usercard } from "@/components/Card";
import { BgCircuitRight } from "@/assets/Icons";
import Tamanghna from "@/assets/mentors/tamaghna-basu.png";
import NeeluTripathy from "@/assets/mentors/neelu-tripathy.png";
import RiyazWalikar from "@/assets/mentors/riyaz-walikar.png";
import BryceKunz from "@/assets/mentors/bryce-kunz.png";
import AnantSrivastava from "@/assets/mentors/anant-srivastav.png";
import AvkashKathiriya from "@/assets/mentors/avkash-kathiriya.png";
import PranjalKulkarni from "@/assets/mentors/pranjal-kulkarni.png";

const page = () => {
  const data = [
    {
      name: "Tamanghna Basu",
      image: Tamanghna,
      image2: Tamanghna,
      title:
        "Founder - DeTaSECURE | WEB3, AI Security | 3-time founder | Advisor Board @ GIET University | Mentor @ Stanford Cybersecurity | Keynote Speaker | Startup Advisor | ex PayPal, Walmart, PwC | Helping orgs in security",
      twitter: "https://twitter.com/@mnkbuddh",
      linkedin: "https://www.linkedin.com/in/tamaghnabasu",
    },
    {
      name: "Neelu Tripathy",
      image: NeeluTripathy,
      image2: NeeluTripathy,
      title:
        "Senior Cyber Security Expert | OSCP | Podcast Host at Br3akp0int Security Podcast",
      twitter: "https://twitter.com/@NeeluTripathy",
      linkedin: "https://www.linkedin.com/in/neelutripathy",
    },
    {
      name: "Riyaz Walikar",
      image: RiyazWalikar,
      image2: RiyazWalikar,
      title: "Co-Founder @ Kloudle",
      twitter: "https://twitter.com/@riyazwalikar",
      linkedin: "https://in.linkedin.com/in/riyazw",
    },
    {
      name: "Bryce Kunz",
      image: BryceKunz,
      image2: BryceKunz,
      title: "Chief Strategy Officer (CSO) at UltraViolet Cyber",
      twitter: "https://twitter.com/TweekFawkes",
      linkedin: "https://www.linkedin.com/in/brycekunz/",
    },
    {
      name: "Anant Srivastava",
      image: AnantSrivastava,
      image2: AnantSrivastava,
      title:
        "Chief Researcher / Founder @ Cyfinoid Research Private Limited · Self-employed | Head of Android Security iCAMPS @ Internet and Mobile Association of India | Secretary @ null - The Open Security Community",
      twitter: "https://twitter.com/@anantshri",
      linkedin: "https://www.linkedin.com/in/anantshri/",
    },
    {
      name: "Avkash Kathiriya",
      image: AvkashKathiriya,
      image2: AvkashKathiriya,
      title:
        "Cyber Security Leader, Sr. VP - Research and Innovation at Cyware Labs, Ex- HDFC Bank, Ex- Symantec",
      twitter: "https://twitter.com/@avkashk",
      linkedin: "https://www.linkedin.com/in/avkash-kathiriya-472b2b28/",
    },
    {
      name: "Pranjal Kulkarni",
      image: PranjalKulkarni,
      image2: PranjalKulkarni,
      title: "CISO at Groww | Ex-Flipkart | Ex-PayPal",
      // twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/in/prajalkulkarni/",
    },
  ];
  return (
    <>
      <div className="relative z-20">
        <div className="absolute right-0 bottom-0">
          <BgCircuitRight className="w-full" />
        </div>

        <Banner text="CFP REVIEW PANEL" image={BannerImg.src} />
        <Container glowEffect className="relative z-20">
          <div className="flex flex-col gap-8">
            <h2 className="text-white-100 font-bold text-3xl">Review Panel </h2>
            <div className="flex flex-wrap justify-center gap-x-10 max-w-4xl mx-auto">
              {data.map((item, i) => (
                <Usercard
                  key={i}
                  src={item.image.src}
                  img={item.image2?.src}
                  name={item.name}
                  title={item.title}
                  twitter={item.twitter}
                  linkedin={item.linkedin}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default page;
