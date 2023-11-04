import React from "react";
import Container from "@/components/Container";
import AboutImg from "@/assets/Images/core-team.png";
import Sponsors from "@/components/Sponsors/Sponsors";
import Banner from "@/components/Banner/Banner";

const page = () => {
  return (
    <>
      <Container glowEffect>
        <Banner text="" image={AboutImg.src} />
        <div className="flex flex-col gap-8">
          <h2 className="text-white-100 font-bold text-3xl">Code Of Conduct</h2>
          <p className="text-white-100/80 text-xl font-normal">
            At BSides Goa, we are committed to fostering an inclusive and
            respectful environment for all participants. We expect everyone
            involved – attendees, speakers, sponsors, and volunteers – to adhere
            to the following code of conduct. By attending our conference, you
            are agreeing to support these principles, contributing to a safe and
            enriching experience for everyone.
          </p>
          <ul className="text-white-100/80 text-xl font-normal flex flex-col gap-8 pl-2 md:pl-8">
            <li className="list-disc">
              Respect and Diversity: BSides Goa is dedicated to providing a
              conference experience that is free from harassment or
              discrimination based on factors such as gender, sexual
              orientation, disability, appearance, body size, race, religion, or
              technological preferences. We celebrate diversity and value the
              contributions of every individual.
            </li>
            <li className="list-disc">
              Zero Tolerance for Harassment: Harassment in any form is
              unacceptable. This includes offensive comments, threats,
              intimidation, verbal or written abuse, sexualized imagery,
              stalking, disruptive behavior, and unwelcome physical contact or
              advances. Such behavior will not be tolerated.
            </li>
            <li className="list-disc">
              Immediate Action: If you experience or witness harassment, or if
              you have any concerns about inappropriate behavior, please notify
              a member of the conference staff promptly. You can also contact us
              at [email address] to report an incident. Our team is committed to
              addressing any issues promptly and discreetly.
            </li>
            <li className="list-disc">
              Consequences of Violation: Participants who violate this code of
              conduct may face sanctions, including expulsion from the
              conference without a refund, and may be prohibited from attending
              future BSides Goa events. Such actions will be determined at the
              discretion of the conference organizers.
            </li>
          </ul>
          <p className="text-white-100/80 text-xl font-normal">
            We sincerely thank all participants for their cooperation in
            creating an environment that is respectful, welcoming, and enjoyable
            for everyone. Your commitment to upholding these principles helps
            ensure a positive experience for all attendees at BSides Goa.
          </p>
        </div>
        <Sponsors />
      </Container>
    </>
  );
};

export default page;
