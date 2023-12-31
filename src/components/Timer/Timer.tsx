"use client";
import React, { useCallback, useEffect, useState } from "react";
import Container from "@/components/Container";

const Timer = () => {
  const getTime = useCallback(() => {
    const eventDate = new Date("2024-04-02T05:30:00.000Z");
    const now = new Date();
    const diff = eventDate.getTime() - now.getTime();

    const seconds = Math.max(Math.floor(diff / 1000), 0);
    const minutes = Math.max(Math.floor(seconds / 60), 0);
    const hours = Math.max(Math.floor(minutes / 60), 0);
    const days = Math.max(Math.floor(hours / 24), 0);

    return {
      days: days.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      }),
      hours: (hours % 24).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      }),
      minutes: (minutes % 60).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      }),
      seconds: (seconds % 60).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      }),
    };
  }, []);

  const [date, setDate] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

  useEffect(() => {
    getTime();
    const interval = setInterval(() => setDate(getTime), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid className="py-8">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-10">
        <div
          className="inline-block px-2 py-2 rounded-2xl"
          style={{
            boxShadow: "0px 4px 24px -1px #00000033",
            background:
              "linear-gradient(126.59deg, rgba(255, 255, 255, 0.4) 12.11%, rgba(255, 255, 255, 0.1) 73.08%)",
          }}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-white-100 font-bellefair">
              {date.days}
            </h2>
            <p className="text-yellow-200 text-[10px] sm:text-sm  uppercase">
              [Days]
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-1 h-1 md:w-2 md:h-2 bg-white-100"></div>
          <div className="w-1 h-1 md:w-2 md:h-2 bg-white-100"></div>
        </div>
        <div
          className="inline-block px-2 py-2 rounded-2xl"
          style={{
            boxShadow: "0px 4px 24px -1px #00000033",
            background:
              "linear-gradient(126.59deg, rgba(255, 255, 255, 0.4) 12.11%, rgba(255, 255, 255, 0.1) 73.08%)",
          }}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <h2
              className="text-2xl sm:text-4xl lg:text-5xl font-normal text-white-100
            font-bellefair"
            >
              {date.hours}
            </h2>
            <p className="text-yellow-200 text-[10px] sm:text-sm  uppercase">
              [Hours]
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-1 h-1 md:w-2 md:h-2 bg-white-100"></div>
          <div className="w-1 h-1 md:w-2 md:h-2 bg-white-100"></div>
        </div>
        <div
          className="inline-block px-2 py-2 rounded-2xl"
          style={{
            boxShadow: "0px 4px 24px -1px #00000033",
            background:
              "linear-gradient(126.59deg, rgba(255, 255, 255, 0.4) 12.11%, rgba(255, 255, 255, 0.1) 73.08%)",
          }}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl  font-normal font-bellefair text-white-100">
              {date.minutes}
            </h2>
            <p className="text-yellow-200 text-[10px] sm:text-sm  uppercase">
              [Minutes]
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-1 h-1 md:w-2 md:h-2 bg-white-100"></div>
          <div className="w-1 h-1 md:w-2 md:h-2 bg-white-100"></div>
        </div>
        <div
          className="inline-block px-2 py-2 rounded-2xl"
          style={{
            boxShadow: "0px 4px 24px -1px #00000033",
            background:
              "linear-gradient(126.59deg, rgba(255, 255, 255, 0.4) 12.11%, rgba(255, 255, 255, 0.1) 73.08%)",
          }}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal font-bellefair text-white-100">
              {date.seconds}
            </h2>
            <p className="text-yellow-200 text-[10px] sm:text-sm uppercase">
              [seconds]
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Timer;
