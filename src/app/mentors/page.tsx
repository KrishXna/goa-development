import React from "react";
import Container from "@/components/Container";
import BannerImg from "@/assets/Images/mentors.png";
import Banner from "@/components/Banner/Banner";
import { MentorsCard } from "@/components/Card";
import JackDaniel from "@/assets/mentors/jackdaniel.png";
import VandanaVerma from "@/assets/mentors/vandana.png";
import AdityaSood from "@/assets/mentors/adityasood.png";
import Fernando from "@/assets/mentors/fernando.png";
import Sapan from "@/assets/mentors/sapna.png";
import ArjunThusu from "@/assets/mentors/arjjunthusu.png";
import { BgCircuitRight } from "@/assets/Icons";

const page = () => {
  const data = [
    {
      image: JackDaniel,
      name: "Jack Daniel",

      bio: "Jack Daniel is a storyteller, blacksmith, luthier, woodcarver, comic, bartender, and motorcyclist. In other words, Jack is retired. Jack is also a community builder and historian, he is a co-founder of Security BSides and the creator of the Shoulders of InfoSec Project. In a past life, he added things like technologist, security professional, admin, podcaster, and blogger to his bio, but no longer. Jack also used to list things like jobs, such as the many he held at Tenable before retiring. He has over 20 years' experience in network and system administration and security, and has worked in a variety of practitioner and management positions. Jack used to put letters after his name, but he doesn't anymore; some fell off, others were pushed. Now he just worries about people putting the letters “deceased” after his name.",
      alter: true,
    },
    {
      image: VandanaVerma,
      name: "Vandana Verma",
      bio: "Vandana is a Security Relations Leader at Snyk with a current focus on DevSecOps. Vandana is a seasoned speaker and trainer. She presented at various public events ranging from Global OWASP AppSec events to BlackHat events, to regional events such as BSides events in India. She is on the OWASP Global Board of directors. She also works in various communities towards diversity initiatives such as InfosecGirls, and InfosecKids. She is a recipient of multiple awards and is listed as one of India's top women leaders in technology and cybersecurity.",

      alter: false,
    },
    {
      image: AdityaSood,
      name: "Aditya Sood",
      bio: "Aditya K Sood (Ph.D.) is a cybersecurity leader, advisor, practitioner, and researcher. With the experience of more than 16 years, he provides strategic leadership in the field of information security covering products and infrastructure. During his career, he has worked with cross-functional teams, management, and customers thereby providing them with the best-of-the-breed information security experience. Dr. Sood has research interests in cloud security, IoT security, malware automation and analysis, application security, and secure software design. He has authored several papers for various magazines and journals including IEEE, Elsevier, Crosstalk, ISACA, Virus Bulletin, and Usenix.  Dr. Sood obtained his Ph.D. from Michigan State University in Computer Sciences. Dr. Sood is also the author of &apos;Targeted Cyber Attacks &apos; and  &apos;Empirical Cloud Security &apos; books. His work has been featured in several media outlets including the Associated Press, Fox News, The Register, Guardian, Business Insider, CBC, and others. He has been an active speaker at industry conferences and presented at Blackhat, DEFCON, HackInTheBox, RSA, Virus Bulletin, OWASP, and many others. On the professional front, he held positions such as Senior Director of Threat Research and Security Strategy, Head (Director) of Cloud Security, Chief Architect of Cloud Threat Labs, Lead Architect and Researcher, Senior Consultant, and others while working for companies such as F5 Networks, Symantec, Blue Coat, Elastica, IOActive, Coseinc, and KPMG.",

      alter: true,
    },
    {
      image: Fernando,
      name: "Jack Daniel",
      bio: "Fernando Gont specializes in the field of communications protocols security, andhas consulted for private and governmental organizations from around the worldfor more than 20 years.Fernando Gont currently serves as Staff Platform Security Engineer at Yalo.Before joining Yalo, he served as Security Consultant and Researcher at SI6Networks, Director of Information Security at EdgeUno, and consulted fororganizations such as the UK National Infrastructure Security Co-ordinationCentre (NISCC), the UK Centre for the Protection of National Infrastructure(CPNI), and Huawei Technologies Ltd.Gont has been active in the Internet Engineering Task Force (IETF) for morethan 20 years, and has published 40 IETF RFCs (Request For Comments).Gont has also been involved in a number of open source projects, including theSI6 Networks&apos; IPv6 Toolkit — a portable and comprehensive security asessmenttoolkit for the IPv6 protocol suite. He has also contributed to the OpenBSD andFreeBSD operating systems, and to the Linux kernel.Gont has been a speaker at a number of conferences and technical meetingsabout   information   security,   operating   systems,   and   Internet   engineering,including: CanSecWest 2005, Kernel Conference Australia 2009, DEEPSEC2009, HACK.LU 2011, Hackito Ergo Sum 2012, Hack In Paris 2013, Troopers2018, H2HC 2022, and KubeCon/CloudNativeCon Europe 2023. Additionally,he is a regular attendee of the Internet Engineering Task Force (IETF) meetings",
      alter: false,
    },
    {
      image: Sapan,
      name: "Jack Daniel",
      bio: "Sapan is a seasoned practitioner with 25+ years of industry experience in areas including Information Technology, Information Security,  Cyber Resilience,  Cyber & Digital Transformation, Data privacy and Information Risk management. He holds extensive Global experience in establishing Technology programs, Security Centre of Excellence, Risk management & Compliance frameworks while leading and managing highly skilled teams.In a prolonged career, Sapan has been associated with multinationals including IBM, Hughes, Canon, Genpact, Aon, Adobe, Tower Research Capital and Perfetti Van Melle in various individual, team and senior management roles, working towards producing desired results, while partnering with stakeholders to enable business growth.",

      alter: true,
    },
    {
      image: ArjunThusu,
      name: "Jack Daniel",
      bio: "Arjun Thusu is Chief Information Officer at Mercury Financial, where he applies his experience and expertise to guide technology initiatives that ensure the integrity, availability, and confidentiality of customer and corporate data, infrastructure, and services. He brings more than 15 years of experience in technology, cyber security and risk management to his role. Prior to Mercury Financial, he held leadership positions at Viasat, Worldpay, YapStone, Home Depot, and Dell SecureWorks. Thusu holds a B.S. in Computer Information Systems and an M.B.A. in International Business from Saginaw Valley State University.",
      alter: false,
    },
  ];
  return (
    <>
      <div className="relative z-20">
        <div className="absolute right-0 bottom-0">
          <BgCircuitRight className="w-full" />
        </div>
        <Banner text="Mentors" image={BannerImg.src} />
        <Container glowEffect>
          <div className="flex flex-col gap-8">
            <h2 className="text-white-100 font-bold text-3xl">Mentors</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {data.map((item, index) => (
                <MentorsCard
                  key={item.name}
                  img={item.image.src}
                  name={item.name}
                  bio={item.bio}
                  alter={item.alter}
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
