import Speakers from "@/components/Speakers/Speakers";
import Glimpse from "@/components/GlimpseSection/Glimse";
import Sponsors from "@/components/Sponsors/Sponsors";
import { BgCircleIcon } from "@/assets/Icons";
import Hero from "@/components/Hero/Hero";
import Mentors from "@/components/Speakers/Mentors";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative overflow-hidden">
        <BgCircleIcon className="absolute top-0" />
        {/* <Speakers /> */}
        <Mentors />
        <Glimpse />
        <Sponsors />
      </div>
    </>
  );
}
