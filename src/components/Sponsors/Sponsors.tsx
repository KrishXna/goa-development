import React from "react";
import Container from "@/components/Container";
import ImgCard from "../Card/LogoCard";
import Spire from "@/assets/Images/spire.png";
import Huawei from "@/assets/Images/huawei.png";
import DuBusiness from "@/assets/Images/du-business.png";
import Microsoft from "@/assets/Images/microsoft.png";
import Etisalat from "@/assets/Images/etisalat.png";
import Pvotal from "@/assets/Images/pvotal-technologies.png";
import Pentera from "@/assets/Images/pentera.png";
import CiscoSecure from "@/assets/Images/cisco-secure.png";
import Cpx from "@/assets/Images/cpx.png";
import Cloudfare from "@/assets/Images/cloudfare.png";
import Crowdstrike from "@/assets/Images/crowdstrike.png";
import Edgio from "@/assets/Images/edgio.png";
import Port from "@/assets/Images/port-53.png";
import Secureworks from "@/assets/Images/secureworks.png";
import Threatlocker from "@/assets/Images/threatlocker.png";
import Synack from "@/assets/Images/synack.png";
import Votiro from "@/assets/Images/votiro.png";
import Spidersilk from "@/assets/Images/spidersilk.png";
const Sponsors = () => {
  const data = [
    { title: "OFFICIAL DISTRIBUTION PARTNER", img: Spire },
    { title: "LEAD STRATEGIC PARTNER", img: Huawei },
    { title: "STRATEGIC PARTNER", img: DuBusiness },
    { title: "STRATEGIC PARTNER", img: Microsoft },
    { title: "STRATEGIC PARTNER", img: Etisalat },
    { title: "DIAMOND PARTNER", img: Pvotal },
    { title: "PLATINUM SPONSOR", img: Pentera },
    { title: "GOLD SPONSOR", img: CiscoSecure },
    { title: "GOLD SPONSOR", img: Cpx },
    { title: "SILVER SPONSOR", img: Cloudfare },
    { title: "STRATEGIC PARTNER", img: Crowdstrike },
    { title: "DIAMOND PARTNER", img: Edgio },
    { title: "OFFICIAL DISTRIBUTION", img: Port },
    { title: "LEAD STRATEGIC PARTNER", img: Secureworks },
    { title: "STRATEGIC PARTNER", img: Threatlocker },
    { title: "STRATEGIC PARTNER", img: Synack },
    { title: "STRATEGIC PARTNER", img: Votiro },
    { title: "DIAMOND PARTNER", img: Spidersilk },
  ];
  return (
    <div className="relative z-20">
      <Container className="max-w-6xl py-20">
        <div className="flex flex-wrap justify-center gap-4">
          {data.map((item) => (
            <ImgCard key={item.title} title={item.title} src={item.img.src} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Sponsors;
