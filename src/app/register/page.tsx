import React from "react";
import Container from "@/components/Container";
import BannerImg from "@/assets/tinified/register.jpg";
import Banner from "@/components/Banner/Banner";
import Button from "@/components/Button/Button";
import EventAccordion from "@/components/EventAccordion/EventAccordion";
import RightTickIcon from "@/assets/Icons/RightTickIcon";
import WrongTickIcon from "@/assets/Icons/WrongTickIcon";
import { BgCircuitRight } from "@/assets/Icons";

const page = () => {
  return (
    <div className="relative z-20">
      <div className="absolute right-0 bottom-0">
        <BgCircuitRight className="w-full h-[60vh]" />
      </div>
      <Banner text="Register" image={BannerImg.src} />
      <Container glowEffect>
        <div className="relative flex flex-col gap-20 w-full">
          <div className="w-full mx-auto overflow-x-auto">
            <table className="w-full text-white-100 border-separate ">
              <thead>
                <tr
                  className="text-base font-semibold"
                  style={{
                    background:
                      "linear-gradient(180deg, #F5BE3D 0%, #FFA503 100%)",
                  }}
                >
                  <th className="px-10 py-4 rounded-l-lg border-r-2 border-black">
                    FEATURES
                  </th>
                  {/* <th className="px-10 py-4 border-r-2 border-black">
                    STUDENT PASS
                  </th> */}
                  <th className="px-10 py-4 border-r-2 border-black">
                    INDIVIDUAL PASS
                  </th>
                  <th className="px-10 py-4 border-r-2 border-black">
                    CORPORATE PASS
                  </th>
                  <th className="px-10 py-4 rounded-r-lg w-1/5">
                    2 DAYS TRAINING PASS
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm font-semibold">
                <tr className="text-center text-white-100/90">
                  <td className="rounded-l-lg py-4 w-1/5 border-r border-white-100">
                    ACCESS TO THE <br /> CONFERENCE
                  </td>
                  {/* <td className="px-6 py-4 border-r border-white-100">
                    <RightTickIcon />
                  </td> */}
                  <td className="px-6 py-4 border-r border-white-100">
                    <RightTickIcon />
                  </td>
                  <td className="px-6 py-4 border-r border-white-100">
                    <RightTickIcon />
                  </td>
                  <td className="px-6 py-4">
                    <WrongTickIcon />
                  </td>
                </tr>
                <tr className="text-center text-white-100/90 bg-gray-100">
                  <td className="rounded-l-lg py-4 border-r border-white-100">
                    LUNCH / TEA - <br /> COFFEE
                  </td>
                  {/* <td className="px-6 py-4 border-r border-white-100">
                    <RightTickIcon />
                  </td> */}
                  <td className="px-6 py-4 border-r border-white-100">
                    <RightTickIcon />
                  </td>
                  <td className="px-6 py-4 border-r border-white-100">
                    <RightTickIcon />
                  </td>
                  <td className="px-6 py-4 rounded-r-lg">
                    <RightTickIcon />
                  </td>
                </tr>
                <tr className="text-center text-white-100/90 ">
                  <td className="rounded-l-lg py-4 border-r border-white-100">
                    BSIDES GOA <br /> HACKER T-SHIRT
                  </td>
                  {/* <td className="px-6 py-4 border-r border-white-100">
                    <RightTickIcon />
                  </td> */}
                  <td className="px-6 py-4 border-r border-white-100">
                    <RightTickIcon />
                  </td>
                  <td className="px-6 py-4 border-r border-white-100">
                    <RightTickIcon />
                  </td>
                  <td className="px-6 py-4 rounded-r-lg">
                    <WrongTickIcon />
                  </td>
                </tr>

                <tr className="text-center text-white-100/90 bg-gray-100">
                  <td className="rounded-l-lg py-4 border-r border-white-100">
                    ACCESS TO THE BSIDES <br /> NETWORKING PARTY
                  </td>
                  {/* <td className="px-6 py-4 border-r border-white-100">
                    <WrongTickIcon />
                  </td> */}
                  <td className="px-6 py-4 border-r border-white-100">
                    <WrongTickIcon />
                  </td>
                  <td className="px-6 py-4 border-r border-white-100">
                    <RightTickIcon />
                  </td>
                  <td className="px-6 py-4 rounded-r-lg">
                    <WrongTickIcon />
                  </td>
                </tr>
                <tr className="text-center text-white-100/90">
                  <td className="rounded-l-lg py-4 border-r border-white-100">
                    ACCESS TO THE SELECTED <br /> THREE DAYS TRAINING
                  </td>
                  {/* <td className="px-6 py-4 border-r border-white-100">
                    <WrongTickIcon />
                  </td> */}
                  <td className="px-6 py-4 border-r border-white-100">
                    <WrongTickIcon />
                  </td>
                  <td className="px-6 py-4 border-r border-white-100">
                    <WrongTickIcon />
                  </td>
                  <td className="px-6 py-4 rounded-r-lg">
                    <RightTickIcon />
                  </td>
                </tr>
                <tr className="text-center text-white-100/90 bg-gray-100 mt-4">
                  <td className="rounded-l-lg py-4 border-r border-white-100">
                    TRAINING COMPLETION <br /> E-CERTIFICATE
                  </td>
                  {/* <td className="px-6 py-4 border-r border-white-100">
                    <WrongTickIcon />
                  </td> */}
                  <td className="px-6 py-4 border-r border-white-100">
                    <WrongTickIcon />
                  </td>
                  <td className="px-6 py-4 border-r border-white-100">
                    <WrongTickIcon />
                  </td>
                  <td className="px-6 py-4 rounded-r-lg">
                    <RightTickIcon />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold text-white-100">
              Group Discounts
            </h2>
            <div className="w-full mx-auto overflow-x-auto">
              <table className="w-full text-white-100 border-separate">
                <thead>
                  <tr
                    className="font-bold text-xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #F5BE3D 0%, #FFA503 100%)",
                    }}
                  >
                    <th
                      scope="co"
                      className="px-10 py-5 rounded-l-lg border-r-2 border-black"
                    >
                      Quantity
                    </th>
                    <th scope="col" className="px-10 py-5 rounded-r-lg">
                      Discount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center text-white-100/90 text-base font-semibold bg-gray-100">
                    <td
                      scope=""
                      className="rounded-l-lg py-5 border-r-2 border-black"
                    >
                      For 4 or more participants
                    </td>
                    <td className="px-6 rounded-r-lg py-5">TBD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold text-white-100">Pass Pricing</h2>
            <div className="w-full mx-auto overflow-x-auto">
              <table className="w-full text-white-100 border-separate">
                <thead>
                  <tr
                    className="text-xl font-bold"
                    style={{
                      background:
                        "linear-gradient(180deg, #F5BE3D 0%, #FFA503 100%)",
                    }}
                  >
                    <th
                      className="px-10 rounded-l-lg py-5 border-r-2 border-black"
                      // rowSpan={2}
                    >
                      PASSES
                    </th>
                    <th className="px-10 py-5 rounded-r-lg" colSpan={2}>
                      AT-CON RATES(1ST NOVEMBER - TILL SOLD OUT)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    className="text-center text-white-100/90 text-base text-semibold"
                    style={{
                      background:
                        "linear-gradient(180deg, #F5BE3D 0%, #FFA503 100%)",
                    }}
                  >
                    <td className="rounded-l-lg py-5 border-r-2 border-black"></td>
                    <td className="py-5 border-r-2 border-black">INR</td>
                    <td className="px-6 rounded-r-lg py-5">USD</td>
                  </tr>
                  {/* <tr className="text-center text-white-100/90 text-xl font-semibold">
                    <td className="rounded-l-lg py-5 border-r border-white-100">
                      STUDENT PASS
                    </td>
                    <td className="px-6 py-4 border-r border-white-100">TBD</td>
                    <td className="px-6 py-4">TBD</td>
                  </tr> */}
                  <tr className="text-center text-white-100/90 text-xl font-semibold bg-gray-100">
                    <td className="rounded-l-lg py-5 border-r border-white-100">
                      INDIVIDUAL PASS
                    </td>
                    <td className="px-6 py-4 border-r border-white-100">TBD</td>
                    <td className="px-6 py-4 rounded-r-lg">TBD</td>
                  </tr>
                  <tr className="text-center text-white-100/90 text-xl font-semibold">
                    <td className="rounded-l-lg py-5 border-r border-white-100">
                      CORPORATE PASS
                    </td>
                    <td className="px-6 py-4 border-r border-white-100">TBD</td>
                    <td className="px-6 py-4">TBD</td>
                  </tr>
                  <tr className="text-center text-white-100/90 text-xl font-semibold bg-gray-100">
                    <td className="rounded-l-lg py-5 border-r border-white-100">
                      2 DAYS TRAINING PASS
                    </td>
                    <td className="px-6 py-4 border-r border-white-100">TBD</td>
                    <td className="px-6 py-4 rounded-r-lg">TBD</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base font-semibold text-white-100">
              *All rates are exculsive of taxes, GST 18%, and payment gateway
              fee will be charged additionally.
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
                <br /> (Comming Soon)
              </Button>
            </div>
          </div>

          {/* <div className="mx-auto">
            <Button
              variant="colored"
              externalLink={true}
              blank={true}
              href=""
              className="inline-block"
            >
              Register Now
            </Button>
          </div> */}
          <EventAccordion question="Terms & Conditions" answer="" />
        </div>
      </Container>
      {/* <div className="absolute right-0 bottom-0">
        <BgCircuitRight className="w-full h-[400px]" />
      </div> */}
    </div>
  );
};

export default page;
