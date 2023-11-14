import React from "react";
import Container from "@/components/Container";
import Pentera from "@/assets/Images/pentera.png";
import SecureNexus from "@/assets/SponsorsLogo/secure.png";
import Dnif from "@/assets/SponsorsLogo/dnif.png";
import Enciipheres from "@/assets/SponsorsLogo/enciipheres.png";
import Armorcode from "@/assets/SponsorsLogo/armorcode.png";
import Appsecco from "@/assets/SponsorsLogo/appsecco.png";
import Cobalt from "@/assets/SponsorsLogo/cobalt.png";
import Appsec from "@/assets/SponsorsLogo/appsec.png";
import Bugcrowd from "@/assets/SponsorsLogo/bugcrowd.png";
import appsecure from "@/assets/SponsorsLogo/appsecure.png";
import Levo from "@/assets/SponsorsLogo/levo.png";
import Riskprofiler from "@/assets/SponsorsLogo/riskprofiler.png";
import compliancecow from "@/assets/SponsorsLogo/compliancecow.png";
import Secops from "@/assets/SponsorsLogo/secure.png";
import bugdiscover from "@/assets/SponsorsLogo/bugdiscover.png";
import psyo from "@/assets/SponsorsLogo/psyo.png";
import Akto from "@/assets/SponsorsLogo/akto.png";
import Conveyor from "@/assets/SponsorsLogo/conveyor.png";
import Pentester from "@/assets/SponsorsLogo/pentester.png";
import Cybersmithsecure from "@/assets/SponsorsLogo/cybersmithsecure.png";
import Cloudsek from "@/assets/SponsorsLogo/cloudsek.png";
import infosec from "@/assets/SponsorsLogo/ingosec.png";
import SecOps from "@/assets/SponsorsLogo/seoOps.png";
import Logo from "@/assets/SponsorsLogo/sponsorslogo.png";
const Sponsors = () => {
  // const data = [
  //   { title: "OFFICIAL DISTRIBUTION PARTNER", img: Spire },
  //   { title: "LEAD STRATEGIC PARTNER", img: Huawei },
  //   { title: "STRATEGIC PARTNER", img: DuBusiness },
  //   { title: "STRATEGIC PARTNER", img: Microsoft },
  //   { title: "STRATEGIC PARTNER", img: Etisalat },
  //   { title: "DIAMOND PARTNER", img: Pvotal },
  //   { title: "PLATINUM SPONSOR", img: Pentera },
  //   { title: "GOLD SPONSOR", img: CiscoSecure },
  //   { title: "GOLD SPONSOR", img: Cpx },
  //   { title: "SILVER SPONSOR", img: Cloudfare },
  //   { title: "STRATEGIC PARTNER", img: Crowdstrike },
  //   { title: "DIAMOND PARTNER", img: Edgio },
  //   { title: "OFFICIAL DISTRIBUTION", img: Port },
  //   { title: "LEAD STRATEGIC PARTNER", img: Secureworks },
  //   { title: "STRATEGIC PARTNER", img: Threatlocker },
  //   { title: "STRATEGIC PARTNER", img: Synack },
  //   { title: "STRATEGIC PARTNER", img: Votiro },
  //   { title: "DIAMOND PARTNER", img: Spidersilk },
  // ];
  // const data2 = [
  //   { sponsorTitle: ["krishna", "Kumar"], img: [Spidersilk, Votiro, Synack] },
  // ];

  // const data1 = [{ sponsorTitle: ["DIAMOND", "SPONSORS"], img: [SecureNexus] }];
  return (
    // <div className="relative z-20">
    //   <Container className="max-w-6xl py-20">
    //     <SponsorsLogo data={data1} />;
    //     <SponsorsLogo data={data2} />;
    //   </Container>
    // </div>

    <Container className="relative z-20">
      {/* <h2 className="text-center first-letter:text-center text-white-100 font-bold uppercase text-3xl mt-4 block relative before:w-40 before:h-1 before:bg-yellow-100 before:absolute before:bottom-0">
        Partners
      </h2> */}

      <div className="font-bold text-3xl mx-auto w-full text-center flex flex-col gap-10 py-10">
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-white-100">DIAMOND </span>
            <span className="text-yellow-200">SPONSORS</span>
          </div>
          <div>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-1">
                <img src={Logo.src} alt="Secure" className="h-20" />
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-white-100">PLATINUM </span>
            <span className="text-yellow-200">SPONSORS</span>
          </div>
          <div>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-1">
                <img src={Logo.src} alt="Secure" className="h-16" />
              </div>
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-1">
                <img src={Logo.src} alt="Secure" className="h-16" />
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-white-100">GOLD </span>
            <span className="text-yellow-200">SPONSORS</span>
          </div>
          <div>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-1">
                <img src={Logo.src} alt="Secure" className="w-40" />
              </div>
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-1">
                <img src={Logo.src} alt="Secure" className="w-40" />
              </div>
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-1">
                <img src={Logo.src} alt="Secure" className="w-40" />
              </div>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-white-100">SILVER </span>
            <span className="text-yellow-200">SPONSORS</span>
          </div>
          <div>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-1">
                <img src={Logo.src} alt="Secure" className="h-14" />
              </div>
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-1">
                <img src={Logo.src} alt="Secure" className="h-14" />
              </div>
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-1">
                <img src={Logo.src} alt="Secure" className="h-14" />
              </div>
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-1">
                <img src={Logo.src} alt="Secure" className="h-14" />
              </div>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-white-100">BUG BOUNTY </span>
            <span className="text-yellow-200">SPONSORS</span>
          </div>
          <div>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-2">
                <img src={Logo.src} alt="Secure" className="h-12" />
              </div>
            </div>
          </div>
        </div>
        {/* 6 */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-white-100">BRONZE </span>
            <span className="text-yellow-200">SPONSORS</span>
          </div>
          <div>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-1">
                <img src={Logo.src} alt="Secure" className="h-12" />
              </div>
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-1">
                <img src={Logo.src} alt="Secure" className="h-12" />
              </div>
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-1">
                <img src={Logo.src} alt="Secure" className="h-12" />
              </div>
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-1">
                <img src={Logo.src} alt="Secure" className="h-12" />
              </div>
            </div>
          </div>
        </div>
        {/* 7 */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-white-100">SPECIAL </span>
            <span className="text-yellow-200">SPONSORS</span>
          </div>
          <div>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-1">
                <img src={Logo.src} alt="Secure" className="h-12" />
              </div>
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-1">
                <img src={Logo.src} alt="Secure" className="h-12" />
              </div>
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-1">
                <img src={Logo.src} alt="Secure" className="h-12" />
              </div>
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-1">
                <img src={Logo.src} alt="Secure" className="h-12" />
              </div>
            </div>
          </div>
        </div>
        {/* 8 */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-white-100">COMMUNITY </span>
            <span className="text-yellow-200 uppercase">Partnership</span>
          </div>
          <div>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-1">
                <img src={Logo.src} alt="Secure" className="h-10" />
              </div>
            </div>
          </div>
        </div>
        {/* 9 */}
        {/* <div className="flex flex-col gap-4">
          <div>
            <span className="text-white-100">GOODIE BAG </span>
            <span className="text-yellow-200">SPONSORS</span>
          </div>
          <div>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="bg-white-100 flex justify-center items-center rounded-md px-4 py-1">
                <img src={Logo.src} alt="Secure" className="h-10" />
              </div>
            </div>
          </div>
        </div> */}

        {/*  */}
      </div>
    </Container>
  );
};

export default Sponsors;
