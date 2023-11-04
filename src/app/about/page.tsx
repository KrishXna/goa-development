import React from "react";
import Container from "@/components/Container";
import AboutImg from "@/assets/Images/about.png";
import Sponsors from "@/components/Sponsors/Sponsors";
import Banner from "@/components/Banner/Banner";

const page = () => {
  return (
    <>
      <Container glowEffect>
        <Banner text="" image={AboutImg.src} />
        <div className="flex flex-col gap-8">
          <p className="text-white-100/80 text-xl font-normal">
            BSides Goa is a dynamic initiative driven by the cybersecurity
            community, aimed at fostering a platform that encourages meaningful
            exchange of ideas and expertise. With a global footprint, these
            community-driven events have made their mark in numerous countries
            as hubs for discussing cybersecurity research and related subjects.
            As devoted organizers of an independent BSides-approved event in
            Goa, our mission is to expand the horizons of discourse beyond the
            constraints of time and location.
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-white-100 text-xl font-semibold">Our Vision: </p>
            <p className="text-white-100/80 text-xl font-normal">
              At the heart of BSides Goa lies the aspiration to create an
              environment where discussions, demonstrations, and interactions
              converge to enrich the understanding of cybersecurity. Our event
              serves as an inclusive space that offers opportunities for diverse
              participation and presentations, nurturing an atmosphere of
              collaboration.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white-100 text-xl font-semibold">
              Why We Gather:{" "}
            </p>
            <p className="text-white-100/80 text-xl font-normal">
              As the digital landscape evolves and security challenges become
              more sophisticated, the imperative to safeguard network devices
              and digital assets grows stronger. In the ever-present context of
              the IT world, &quot;security&quot; is a paramount consideration.
              Our conferences and gatherings provide a platform where
              individuals, organizations, and experts convene to share insights,
              exchange perspectives, and learn collectively.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white-100 text-xl font-semibold">
              What We Offer:
            </p>
            <p className="text-white-100/80 text-xl font-normal">
              BSides Goa curates an environment that encourages open
              conversations and discussions about information technology,
              privacy, security, critical infosec matters, and the broader
              technical and cultural implications on society. Our commitment is
              showcased through an exceptional lineup of speakers,
              thought-provoking workshops, and interactive security challenges.
            </p>
          </div>
          <p className="text-white-100/80 text-xl font-normal">
            Join us at BSides Goa to be part of a vibrant community that shapes
            the future of cybersecurity knowledge and collaboration. Together,
            we&apos;re building a secure digital world through meaningful
            conversations and shared insights.
          </p>
        </div>
        <Sponsors />
      </Container>
    </>
  );
};

export default page;
