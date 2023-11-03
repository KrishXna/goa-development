import React from "react";
import Container from "@/components/Container";
import VillagesImg from "@/assets/Images/villages.png";
import Banner from "@/components/Banner/Banner";

const page = () => {
  return (
    <>
      <Container className="relative z-20 pb-20">
        <Banner text="" image={VillagesImg.src} />
        <div className="flex flex-col gap-8">
          <h2 className="text-white-100 font-bold text-3xl">Villages</h2>
          <p className="text-white-100/80 text-xl font-normal">
            Embark on a voyage of discovery at BSides Goa&apos;s Villages!
            Immerse yourself in a world of technological marvels and exploration
            as you engage with cutting-edge concepts, hands-on activities, and
            thrilling competitions. Each Village offers a distinctive
            opportunity to broaden your horizons and hone your talents, from the
            exciting challenges of the Hacking Village to the frontiers of AI
            and the complexities of Web3 Bug Bounties. Unearth new passions,
            conquer challenges and revel in the joy of learning while vying for
            incredible prizes. Don&apos;t miss out on the chance to enrich your
            knowledge and secure fantastic rewards – the adventure awaits!
          </p>
          <ul
            className="text-white-100/80 text-xl font-normal pl-2 md:pl-8
          flex flex-col gap-4"
          >
            <li className="list-decimal">AI Village</li>
            <li className="list-decimal">Web3 Bug</li>
            <li className="list-decimal">Bounty Village</li>
          </ul>
          <h2 className="text-white-100 font-bold text-3xl">Villages</h2>

          <div>
            <p className="text-white-100/80 text-xl font-normal">
              Why Attend a Village:
            </p>
            <ul className="text-white-100/80 text-xl font-normal flex flex-col gap-4 pl-2 md:pl-8 mt-4">
              <li className="list-disc">
                Hands-On Experience: Engage in interactive exercises, demos, and
                competitions that deepen your understanding and skills.
              </li>
              <li className="list-disc">
                Focused Learning: Immerse yourself in specific areas of
                cybersecurity, gaining insights from experts in the field.
              </li>
              <li className="list-disc">
                Networking: Connect with like-minded enthusiasts, professionals,
                and experts who share your passion.
              </li>
              <li className="list-disc">
                Win Cool Goodies: Don&apos;t miss the chance to snag some
                exciting rewards by participating in our competitions. Show off
                your skills and walk away with more than just knowledge!
              </li>
            </ul>
          </div>
          <p className="text-white-100/80 text-xl font-normal">
            Don&apos;t miss out on the opportunity to take your learning to the
            next level at BSides Goa&apos;s Villages. Experience education like
            never before, and emerge with enhanced skills and insights. Join us
            in this dynamic journey of exploration and growth!
          </p>
        </div>
      </Container>
    </>
  );
};

export default page;
