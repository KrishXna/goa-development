import React from "react";
import Container from "@/components/Container";
import BannerImg from "@/assets/Images/mentors_hero_section_image.jpg";
import Banner from "@/components/Banner/Banner";
import { MentorsCard } from "@/components/Card";
import { BgCircuitRight } from "@/assets/Icons";
import Tamanghna from "@/assets/cfp/tamaghna-basu.png";
import NeeluTripathy from "@/assets/cfp/neelu-tripathy.png";
import RiyazWalikar from "@/assets/cfp/riyaz-walikar.png";
import BryceKunz from "@/assets/cfp/bryce-kunz.png";
import AnantSrivastava from "@/assets/cfp/anant-srivastav.png";
import AvkashKathiriya from "@/assets/cfp/avkash-kathiriya.png";
import PranjalKulkarni from "@/assets/cfp/pranjal-kulkarni.png";

const page = () => {
  const data = [
    {
      image: Tamanghna,
      name: "Tamanghna Basu",
      bio: "Tamaghna Basu is the founder and CEO of DeTaSECURE India and DeTaSECURE UAE, companies that provide top-notch cybersecurity solutions for businesses of all sizes, including those in the emerging web3 space. He also developed GetSECURED.ai, a cost-effective SaaS platform designed to help startups and small businesses implement essential security measures from the get-go. With nearly two decades of experience in entrepreneurship, mentoring, advising, and fields like web3, cybersecurity, AI, and technology, Tamaghna has become a well-respected figure in these industries. His career highlights include working with renowned companies such as PayPal, eBay, Walmart, and PwC, where he gained substantial knowledge about various products and services. Before launching DeTaSECURE, Tamaghna founded neoEYED.com in the US, focusing on AI and protection against financial fraud. There, his team created an advanced AI algorithm and a behavioral analytics-based authentication solution to protect company data from cyber threats. Tamaghna's innovative contributions have earned him over 20 awards from prestigious organizations like Polygon, ETHNYC, Solana, the Government of India, Mastercard, Citi Bank, NPCI, and BBVA Mexico, cumulatively valued at over $200K. He is also a prominent figure on LinkedIn, with a following of over 30K, where he shares his insights and contributes to industry growth. As an international speaker and startup advisor, Tamaghna has trained over 1000 individuals worldwide, including government and defense personnel, corporate employees, and university students. In his advisory roles, Tamaghna has contributed to GIET University and served as a mentor in Stanford's cybersecurity program and multiple startups. He has also played a key role in a non-profit organization called NULL since 2010, building it into Asia's largest cybersecurity community, which now boasts over 30K members and 24 chapters across 7 countries. Tamaghna has been featured in YourStory articles and Darkreading interviews and has given numerous talks on AI, cybersecurity, and technology at various conferences.",
      alter: true,
    },
    {
      image: NeeluTripathy,
      name: "Neelu Tripathy",
      bio: "She is working as an independent Security Consultant & Practitioner for Product Security. Her area of work includes developing & managing large scale Security implementation programs, threat identification, vulnerability assessments & management, building security mindset through trainings & automation with the goal of Building Security Into the application ecosystems. She has an extensive background in offensive security across Vulnerability Assessments and Penetration testing, Red Teaming, Social Engineering, reconnaissance along with experience in Threat Modelling, Design Reviews and Security Code Reviews. She is an OSCP and has spoken/trained at various security conferences such as BlackHat(Primary Trainer, Basic Infrastructure Hacking-2017), speaker- DevSecCon24(keynote), OWASP APAC, Agile India, AllDayDevOps, c0c0n, rootconf & BSidesDelhi and organised villages at DefCon(Recon) and Nullcon(Social Engg.). She started & organised the corporate security conference for Thoughtworks - SecConf in 2021-22. She started & runs the technical security podcast- br3akp0int. She is also on the review board for BSides Singapore , CySEK Marketplace(Karnataka Gov) and NullCon Security Conference, India.",
      alter: false,
    },
    {
      image: RiyazWalikar,
      name: "Riyaz Walikar",
      bio: "Riyaz Walikar loves to break things for fun and profit. He is the Chief Hacker and Co-Founder at Kloudle, a company built to make the lives of the heroes who implement and maintain Cloud services and SaaS easier. Riyaz also plays the role of the Chief Technical Advisor at Appsecco, a boutique cybersecurity consulting company. He has over a decade of experience in offensive security, hacking his way into web applications, mobile apps, wireless networks, thick clients and cloud, container-based infrastructure, kubernetes and even off shore anchored ships! Riyaz also is a closet standup comic and loves teaching security which he does through various online blogs and publications, in-person and online training programs, community talks, conference presentations, and beer sessions. He loves to evangelize and speak on cloud security topics and has done so at numerous conferences and tech events. He also fumbles at pointed questions and is easily distracted by shiny tech things and alien conspiracy theories",
      alter: true,
    },
    {
      image: BryceKunz,
      name: "Bryce Kunz",
      bio: "Bryce Kunz (@TweekFawkes) is an Information Security Researcher located in Salt Lake City, Utah, who specializes in exploiting cloud environments through researching and developing access vectors for key systems (e.g. containers, orchestration systems, web applications, etc…). As a security professional, Bryce has spent time at various agencies (i.e. NSA, DoD, DHS, CBP) and at tech companies (i.e. Adobe) focusing on vulnerability research, penetration testing, and incident response. Previously, Bryce received an MBA from a NSA designated &apos;Center of Excellence&apos; Idaho State University (ISU) program with an emphasis in Information Assurance (IA) on a full academic scholarship from the National Science Foundation (NSF). Bryce holds numerous certifications (e.g. OSCP, CISSP, ...) and has spoken at various security conferences (i.e. BlackHat, DerbyCon, BSidesLV, etc...).",
      alter: false,
    },
    {
      image: AnantSrivastava,
      name: "Anant Srivastava",
      bio: "Anant Shrivastava is a highly experienced information security professional with over 15 years of corporate experience. He is a frequent speaker and trainer at international conferences, and is the founder of Cyfinoid Research, a cyber security research firm. He leads open source projects such as Tamer Platform and CodeVigilant, and is actively involved in information security communities such as null, OWASP and various bsides and defcon groups.",
      alter: true,
    },
    {
      image: AvkashKathiriya,
      name: "Avkash Kathiriya",
      bio: "Avkash is the Sr. VP of Research at a US-based cybersecurity product startup. Astute cybersecurity professional with over 14+ years of experience in core security technology domains including Cyber Fusion, Cyber Defense, Security Orchestration, and Threat Intelligence. Besides leading the research and innovation at Cyware, Avkash is also a well-known speaker at various security conferences in India and abroad. He is also a visiting faculty member at IIIT, Sri City, and a Cyber Threat Intelligence Committee member at OASIS, a global non-profit consortium that works on the development, convergence, and adoption of open standards for cybersecurity.",
      alter: false,
    },
    {
      image: PranjalKulkarni,
      name: "Pranjal Kulkarni",
      bio: "Prajal Kulkarni brings over 14 years of expertise in securing infrastructure, designing robust security frameworks, and assisting startups in their initial security journey. As the current Chief Information Security Officer at Groww, he leads a team of talented and dynamic security engineers. Before joining Groww, Prajal held the position of Senior Security Architect at Flipkart, where he was responsible for ensuring the security of the entire ecommerce business. He also managed comprehensive security charters for Flipkart's M&A companies, contributing significantly to their secure operations. Beyond his corporate experience, Prajal actively participates in the Indian security community. He serves as the lead contributor to Code Vigilant, an open security project that promotes responsible disclosures and enhances the security of open source software.",
      alter: true,
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
            <h2 className="text-white-100 font-bold text-3xl">
              CFP Review Panel
            </h2>
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
