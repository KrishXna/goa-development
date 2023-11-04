import React from "react";
import Container from "@/components/Container";
import BannerImg from "@/assets/Images/schedule.png";
import Banner from "@/components/Banner/Banner";

const page = () => {
  return (
    <>
      <Container glowEffect className="pb-20">
        <Banner text="" image={BannerImg.src} />
        <div className="flex flex-col gap-8">
          <h2 className="text-white-100 font-bold text-4xl">Schedule</h2>
          <div className="bg-[#000] text-white-100 font-bold text-xl p-4 pb-40  rounded-md">
            <h2>Registration and Welcome Coffee</h2>
            <h3 className="mt-4">Time - 8:30 AM</h3>
          </div>
        </div>
      </Container>
    </>
  );
};

export default page;
