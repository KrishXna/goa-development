import React from "react";
import Container from "@/components/Container";
import CTFImg from "@/assets/tinified/ctf.jpg";
// import Sponsors from "@/components/Sponsors/Sponsors";
import Banner from "@/components/Banner/Banner";
import { BgCircuitRight } from "@/assets/Icons";

const page = () => {
  return (
    <>
      <div className="relative z-20">
        <div className="absolute right-0 bottom-0">
          <BgCircuitRight className="w-full" />
        </div>
        <Banner text="CAPTURE THE FLAG (CTF)" image={CTFImg.src} />
        <Container glowEffect>
          <div className="flex flex-col gap-8">
            <h2 className="text-white-100 font-bold text-3xl">
              Capture the Flag(CTF)
            </h2>
            <p className="text-white-100/80 text-xl font-normal">
              Engage, Learn, Conquer! BSides Goa brings you the thrilling world
              of Capture The Flag (CTF) challenges. Step into the shoes of a
              cybersecurity pro as you navigate through real-world scenarios and
              test your skills in an interactive environment.
            </p>
            <div>
              <p className="text-white-100/80 text-xl font-normal">
                What to Expect:
              </p>
              <ul className="text-white-100/80 text-xl font-normal flex flex-col pl-2 md:pl-8">
                <li className="list-disc">
                  Gain practical, hands-on experience in cybersecurity.
                </li>
                <li className="list-disc">
                  Boost technical expertise while solving diverse challenges.
                </li>
                <li className="list-disc">
                  Develop creative problem-solving skills in a dynamic setting.
                </li>
                <li className="list-disc">
                  Collaborate with fellow participants to unravel complexities.
                </li>
                <li className="list-disc">
                  Network and connect with like-minded professionals.
                </li>
              </ul>
            </div>
            <p className="text-white-100/80 text-xl font-normal">
              Challenge yourself, have fun, and explore the exciting realm of
              cybersecurity with our captivating CTF competitions. Discover
              hidden flags, enhance your skills, and forge valuable connections.
              Get ready to rise to the challenge at BSides Goa CTF!
            </p>
          </div>
          {/* <Sponsors /> */}
        </Container>
      </div>
    </>
  );
};

export default page;
