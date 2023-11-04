import React from "react";
import Container from "@/components/Container";
import BannerImg from "@/assets/Images/register.png";
import Banner from "@/components/Banner/Banner";
import Button from "@/components/Button/Button";
import EventAccordion from "@/components/EventAccordion/EventAccordion";

const page = () => {
  return (
    <>
      <Container glowEffect>
        <Banner text="" image={BannerImg.src} />

        <div className="relative overflow-x-auto flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-white-100">Group Discounts</h2>
          <table className="w-full text-white-100 text-xl font-normal border-separate">
            <thead className="">
              <tr
                style={{
                  background:
                    "linear-gradient(180deg, #F5BE3D 0%, #FFA503 100%)",
                }}
              >
                <th scope="co" className="px-10 py-4 rounded-l-lg">
                  Quantity
                </th>
                <th scope="col" className="px-10 py-4 rounded-r-lg">
                  Discount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center text-white-100/90 text-base bg-gray-100">
                <td scope="" className="rounded-l-lg">
                  For 4 or more participants
                </td>
                <td className="px-6 py-4 rounded-r-lg">5%</td>
              </tr>
            </tbody>
          </table>
          <h2 className="text-3xl font-bold text-white-100">Pass Pricing</h2>
          <table className="w-ful table-fixed text-white-100 text-xl font-normal border-separate">
            <thead>
              <tr
                style={{
                  background:
                    "linear-gradient(180deg, #F5BE3D 0%, #FFA503 100%)",
                }}
              >
                <th className="px-10 py-4 rounded-l-lg">PASSES</th>
                <th className="px-10 py-4 rounded-r-lg col-span-3 ">
                  AT-CON RATES(1ST AUGUST - TILL SOLD OUT)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                className="text-center text-white-100/90 text-base"
                style={{
                  background:
                    "linear-gradient(180deg, #F5BE3D 0%, #FFA503 100%)",
                }}
              >
                <td className="rounded-l-lg"></td>
                <td>INR</td>
                <td className="px-6 py-4 rounded-r-lg ">USD</td>
              </tr>
              <tr className="text-center text-white-100/90 text-base">
                <td className="rounded-l-lg">STUDENT PASS</td>
                <td className="px-6 py-4 rounded-r-lg">4499</td>
                <td className="px-6 py-4 rounded-r-lg">85</td>
              </tr>
              <tr className="text-center text-white-100/90 text-base bg-gray-100">
                <td className="rounded-l-lg">INDIVIDUAL PASS</td>
                <td className="px-6 py-4 rounded-r-lg">9999</td>
                <td className="px-6 py-4 rounded-r-lg">185</td>
              </tr>
              <tr className="text-center text-white-100/90 text-base">
                <td className="rounded-l-lg">CORPORATE PASS</td>
                <td className="px-6 py-4 rounded-r-lg">14999</td>
                <td className="px-6 py-4 rounded-r-lg">275</td>
              </tr>
              <tr className="text-center text-white-100/90 text-base bg-gray-100">
                <td className="rounded-l-lg">3 DAYS TRAINING PASS</td>
                <td className="px-6 py-4 rounded-r-lg">45499</td>
                <td className="px-6 py-4 rounded-r-lg">840</td>
              </tr>
            </tbody>
          </table>
          <p className="text-base font-semibold text-white-100">
            *All rates are exculsive of taxes, GST 18%, and payment gateway fee
            will be charged additionally.
          </p>
          <div className="mx-auto">
            <Button
              variant="colored"
              externalLink={true}
              blank={true}
              href=""
              className="inline-block"
            >
              Register Now
            </Button>
          </div>
          <table className="w-full text-white-100 text-base font-semibold border-separate">
            <thead className="">
              <tr
                style={{
                  background:
                    "linear-gradient(180deg, #F5BE3D 0%, #FFA503 100%)",
                }}
              >
                <th className="px-10 py-4 rounded-l-lg">FEATURES</th>
                <th className="px-10 py-4">STUDENT PASS</th>
                <th className="px-10 py-4">INDIVIDUAL PASS</th>
                <th className="px-10 py-4">CORPORATE PASS</th>
                <th className="px-10 py-4 rounded-r-lg">
                  3 DAYS TRAINING PASS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center text-white-100/90 text-base">
                <td className="rounded-l-lg">ACCESS TO THE CONFERENCE</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
              </tr>
              <tr className="text-center text-white-100/90 text-base bg-gray-100">
                <td className="rounded-l-lg">LUNCH / TEA - COFFEE</td>
                <td className="px-6 py-4 rounded-r-lg">21</td>
                <td className="px-6 py-4 rounded-r-lg">85</td>
              </tr>
              <tr className="text-center text-white-100/90 text-base ">
                <td className="rounded-l-lg">BSIDES GOA HACKER T-SHIRT</td>
                <td className="px-6 py-4 rounded-r-lg">9999</td>
                <td className="px-6 py-4 rounded-r-lg">185</td>
              </tr>
              <tr className="text-center text-white-100/90 text-base">
                <td className="rounded-l-lg">CORPORATE PASS</td>
                <td className="px-6 py-4 rounded-r-lg">14999</td>
                <td className="px-6 py-4 rounded-r-lg">275</td>
              </tr>
              <tr className="text-center text-white-100/90 text-base bg-gray-100">
                <td className="rounded-l-lg">
                  ACCESS TO THE BSIDES NETWORKING PARTY
                </td>
                <td className="px-6 py-4 rounded-r-lg">45499</td>
                <td className="px-6 py-4 rounded-r-lg">840</td>
              </tr>
              <tr className="text-center text-white-100/90 text-base">
                <td className="rounded-l-lg">
                  ACCESS TO THE SELECTED THREE DAYS TRAINING
                </td>
                <td className="px-6 py-4 rounded-r-lg">45499</td>
                <td className="px-6 py-4 rounded-r-lg">840</td>
              </tr>
              <tr className="text-center text-white-100/90 text-base bg-gray-100">
                <td className="rounded-l-lg">
                  TRAINING COMPLETION E-CERTIFICATE
                </td>
                <td className="px-6 py-4 rounded-r-lg">45499</td>
                <td className="px-6 py-4 rounded-r-lg">840</td>
              </tr>
            </tbody>
          </table>
          <div className="mx-auto">
            <Button
              variant="colored"
              externalLink={true}
              blank={true}
              href=""
              className="inline-block"
            >
              Register Now
            </Button>
          </div>
          <EventAccordion
            question="Terms & Conditions"
            answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque incidunt animi omnis laborum quibusdam doloremque unde nihil, placeat nostrum hic?"
          />
        </div>
      </Container>
    </>
  );
};

export default page;
