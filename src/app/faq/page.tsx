import React from "react";
// import EventAccordion from "@/components/EventAccordion/EventAccordion";
import Container from "@/components/Container";
import BannerImg from "@/assets/tinified/faq.jpg";
import Banner from "@/components/Banner/Banner";
import { BgCircleIcon, BgCircuitRight } from "@/assets/Icons";

const page = () => {
  const data = [
    {
      question: "What is Bsides?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, a hic voluptatibus amet facilis dolores voluptate odit ipsam sunt eum.",
    },
    {
      question: "When and Where is Bsides Goa 2024?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, a hic voluptatibus amet facilis dolores voluptate odit ipsam sunt eum.",
    },
    {
      question: "What’s the conference code of conduct?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, a hic voluptatibus amet facilis dolores voluptate odit ipsam sunt eum.",
    },
    {
      question: "What can I expect from the conference?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, a hic voluptatibus amet facilis dolores voluptate odit ipsam sunt eum.",
    },
    {
      question: "Will there be networking opportunities?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, a hic voluptatibus amet facilis dolores voluptate odit ipsam sunt eum.",
    },
    {
      question: "How can I stay updated on conference announcements?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, a hic voluptatibus amet facilis dolores voluptate odit ipsam sunt eum.",
    },
  ];
  return (
    // <div className="w-full overflow-hidden relative z-20">
    //   <div className="absolute right-0 bottom-0">
    //     <BgCircuitRight className="w-full" />
    //   </div>
    //   <BgCircleIcon className="absolute z-0" />
    //   <Banner text="FAQ" image={BannerImg.src} />
    //   <Container glowEffect className="relative z-20 lg:pb-10">
    //     <div className="flex flex-col gap-8">
    //       <div>
    //         <h2 className="text-white-100 font-bold text-2xl md:text-4xl">
    //           General FAQ
    //         </h2>
    //         {data.map((item) => (
    //           <EventAccordion
    //             key={item.question}
    //             question={item.question}
    //             answer={item.answer}
    //           />
    //         ))}
    //       </div>
    //       <div>
    //         <h2 className="text-white-100 font-bold text-2xl md:text-4xl">
    //           CFP AND TALKS
    //         </h2>
    //         {data.map((item) => (
    //           <EventAccordion
    //             key={item.question}
    //             question={item.question}
    //             answer={item.answer}
    //           />
    //         ))}
    //       </div>
    //       <div>
    //         <h2 className="text-white-100 font-bold text-2xl md:text-4xl">
    //           CTF EVENTS
    //         </h2>
    //         {data.map((item) => (
    //           <EventAccordion
    //             key={item.question}
    //             question={item.question}
    //             answer={item.answer}
    //           />
    //         ))}
    //       </div>
    //       <div>
    //         <h2 className="text-white-100 font-bold text-2xl md:text-4xl">
    //           TRAININGS
    //         </h2>
    //         <h2 className="text-white-100 font-bold text-2xl md:text-4xl mt-4">
    //           REGISTRATION AND ATTENDING
    //         </h2>
    //         <EventAccordion
    //           question="How do I register for the conference?"
    //           answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, a hic voluptatibus amet facilis dolores voluptate odit ipsam sunt eum."
    //         />
    //       </div>
    //       <div>
    //         <h2 className="text-white-100 font-bold text-2xl md:text-4xl">
    //           HELP AND SUPPORT
    //         </h2>
    //         <EventAccordion
    //           question="How can I help bsides Goa?"
    //           answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, a hic voluptatibus amet facilis dolores voluptate odit ipsam sunt eum."
    //         />
    //         <EventAccordion
    //           question="Can I sponsor the conference?"
    //           answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, a hic voluptatibus amet facilis dolores voluptate odit ipsam sunt eum."
    //         />
    //       </div>
    //     </div>
    //   </Container>
    // </div>
    <div className="relative z-20">
      <div className="absolute right-0 bottom-0">
        <BgCircuitRight className="w-full" />
      </div>
      <Banner text="faq" image={BannerImg.src} />
      <Container glowEffect className="pb-20">
        <div className="flex flex-col gap-8 h-screen">
          <div className="bg-[#000] text-white-100 font-bold text-xl p-4 py-40 rounded-md">
            <p className="flex justify-center items-center h-full">
              (Coming Soon)
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
