"use client";
import { LinkedinIcon, TwitterIcon } from "@/assets/Icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  src?: string;
  img?: string;
  name: string;
  title: string;
  twitter?: string;
  linkedin?: string;
};

const UserCard = ({ src, name, title, twitter, linkedin, img }: Props) => {
  const [showSecondImg, setShowSecondImg] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowSecondImg((prev) => !prev);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [showSecondImg]);
  return (
    <>
      <div className="max-w-[300px] p-6 group">
        <div className="text-center group-hover cursor-pointer group-hover:rounded-lg">
          <Link href="/mentors">
            <div className="relative">
              <div
                className={`absolute inset-0 top-0 duration-300
            ${showSecondImg ? "opacity-0" : ""}`}
              >
                <div className="flex justify-center items-center">
                  <div className={`w-44 h-44 rounded-full overflow-hidden`}>
                    <img
                      src={img}
                      alt={`${name} img`}
                      className="group-hover:scale-105 duration-200"
                    />
                  </div>
                </div>
              </div>
              <div className={`flex justify-center items-center duration-300`}>
                <div className="w-44 h-44 rounded-full overflow-hidden">
                  <img
                    src={src}
                    alt={`${name}img`}
                    className="group-hover:scale-105 duration-200"
                  />
                </div>
              </div>
            </div>
          </Link>
          <div
            className="relative -top-4 gap-10 rounded-full py-2 inline-block px-8"
            style={{
              background:
                "linear-gradient(180deg, #303030 0%, #000000 80.37%, #000000 100%)",
            }}
          >
            <div className="flex justify-center gap-10 w-full">
              <a href={twitter} target="_blank">
                <TwitterIcon className="w-8 h-8" />
              </a>
              <a href={linkedin} target="_blank">
                <LinkedinIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="flex justify-center pb-2">
            <div className="flex flex-col gap-2 text-white-100">
              <h3 className="text-sm font-semibold uppercase">{name}</h3>
              <p className="text-xs font-normal max-w-[200px]">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
