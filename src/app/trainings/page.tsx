import React from "react";
import Container from "@/components/Container";
import TrainingsImg from "@/assets/Images/trainings.png";
import Sponsors from "@/components/Sponsors/Sponsors";
import Banner from "@/components/Banner/Banner";

const page = () => {
  return (
    <>
      <Container>
        <Banner text="" image={TrainingsImg.src} />
        <div className="flex flex-col gap-8">
          <h2 className="text-white-100 font-bold text-3xl">Trainings</h2>
          <p className="text-white-100/80 text-xl font-normal">
            Elevate Your Security Expertise at BSides Goa Training Courses!
            Unlock your potential and sharpen your security skills at BSides
            Goa&apos;s premier training sessions. From [dates], immerse yourself
            in intensive 2-day and 3-day training experiences designed to
            empower you with cutting-edge knowledge and hands-on practice.
            Navigate the dynamic landscape of cybersecurity with our expert
            trainers who bring real-world insights to the forefront. Whether
            you&apos;re a seasoned professional or just starting your security
            journey, these unique training opportunities will equip you with the
            tools and techniques you need to stay ahead in the ever-evolving
            world of cybersecurity. Secure your spot today and be part of a
            transformative learning experience at BSides Goa!
          </p>
          <h2 className="text-white-100 font-bold text-3xl">COURSE CONTENT</h2>
          <p className="text-white-100 text-xl font-normal">
            Important Information for BSides Goa Training courses:-
          </p>
          <ul className="text-white-100 text-xl font-normal flex flex-col pl-2 md:pl-6">
            <li className="list-decimal">Terms and Conditions:</li>
            <li className="list-disc text-white-100/80 ">
              By registering for a training course, participants are agreeing to
              abide by the Terms and Conditions set forth by BSides Goa. These
              terms may be subject to periodic updates; the most current version
              can be accessed here.
            </li>
          </ul>
          <ul className="text-white-100/80 text-xl font-normal flex flex-col pl-2 md:pl-6">
            <li className="list-decimal">Pricing and Taxes:</li>
            <li className="list-disc">
              The quoted course fees are inclusive of all applicable taxes. 
            </li>
            <li className="list-disc">
              Additional charges may be incurred for payment gateway usage.
              Participants should review these charges before finalizing their
              registration.
            </li>
          </ul>
          <ul className="text-white-100/80 text-xl font-normal flex flex-col pl-2 md:pl-6">
            <li className="list-decimal">Payment and Refund Policy:</li>
            <li className="list-disc">
              All training course registrations are considered final sales and
              are non-refundable.
            </li>
            <li className="list-disc">
              Participants are required to make a 100% advance payment for
              registration to secure their spot in the chosen training course.
            </li>
          </ul>
          <ul className="text-white-100/80 text-xl font-normal flex flex-col pl-2 md:pl-6">
            <li className="list-decimal">
              Accommodation and Conference Access:
            </li>
            <li className="list-disc">
              Accommodation is not provided as part of the training course
              registration.
            </li>
            <li className="list-disc">
              It&apos;s important to note that the training course fee does not
              grant participants access to the leading conference. Separate
              registration is required for conference attendance.
            </li>
          </ul>
          <ul className="text-white-100/80 text-xl font-normal flex flex-col pl-2 md:pl-6">
            <li className="list-decimal">
              Minimum Enrollment and Location Changes:
            </li>
            <li className="list-disc">
              BSides Goa reserves the right to cancel a training course if there
              are an insufficient number of registrations. In such cases,
              registered participants will be informed well in advance of the
              scheduled training date.
            </li>
            <li className="list-disc">
              The training location may be subject to change within the
              specified vicinity. Attendees will be notified in advance if there
              is a change in the training location.
            </li>
          </ul>

          <ul className="text-white-100/80 text-xl font-normal flex flex-col pl-2 md:pl-6">
            <li className="list-decimal">Participant Requirements:</li>
            <li className="list-disc">
              Participants are expected to bring their laptops or any other
              equipment specified in the course description.
            </li>
            <li className="list-disc">
              Specific courses may have prerequisites or recommended knowledge
              levels. Participants should review the course details before
              registering.
            </li>
          </ul>
          <ul className="text-white-100/80 text-xl font-normal flex flex-col pl-2 md:pl-6">
            <li className="list-decimal">Code of Conduct:</li>
            <li className="list-disc">
              All participants are expected to adhere to the BSides Goa Code of
              Conduct throughout the training course. The Code of Conduct can be
              found here.
            </li>
          </ul>
          <ul className="text-white-100/80 text-xl font-normal flex flex-col pl-2 md:pl-6">
            <li className="list-decimal">Contact Information:</li>
            <li className="list-disc">
              For any inquiries or assistance related to training courses,
              please contact training@bsidesgoa.org.
            </li>
          </ul>
          <p className="text-white-100/80 text-xl font-normal">
            Please note that the above information is subject to change and
            participants are encouraged to review all details before completing
            their registration.
          </p>
        </div>
        <Sponsors />
      </Container>
    </>
  );
};

export default page;
