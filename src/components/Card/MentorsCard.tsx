"use client";
import React, { useState } from "react";
import Container from "@/components/Container";

type Props = {
  img?: string;
  name: string;
  bio: string;
  alter?: boolean;
};
const MentorsCard = ({ img, name, bio, alter = false }: Props) => {
  const [showFullBio, setShowFullBio] = useState(false);

  const handleReadmore = () => {
    setShowFullBio(!showFullBio);
  };
  return (
    <>
      <Container>
        <div className="border border-yellow-200 bg-gray-100 w-full px-4 lg:px-10 py-6 rounded-2xl">
          <div className="md:flex justify-center items-center">
            {alter ? (
              <>
                <div className="w-full md:w-1/5 md:pl-10">
                  <img
                    src={img}
                    alt={name}
                    className="w-full md:w-40 rounded-2xl"
                  />
                </div>
                <div className="mt-4 md:mt-0 max-w-5xl md:pl-10 w-full md:w-4/5 flex flex-col text-white-100 gap-2">
                  <h2 className="font-bold text-xl">{name}</h2>
                  <div className="text-base">
                    {showFullBio ? bio : `${bio.substring(0, 300)}...`}
                    <span
                      className="text-yellow-200 ml-1 font-semibold cursor-pointer"
                      onClick={handleReadmore}
                    >
                      {showFullBio ? "Read Less" : "Read More"}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="max-w-5xl w-full md:w-4/5 md:pr-10 flex flex-col text-white-100 gap-2 md:text-right">
                  <h2 className="font-bold text-xl">{name}</h2>
                  <div className="text-base">
                    {showFullBio ? bio : `${bio.substring(0, 290)}...`}
                    <span
                      className="text-yellow-200 ml-1 font-semibold cursor-pointer"
                      onClick={handleReadmore}
                    >
                      {showFullBio ? "Read Less" : "Read More"}
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-1/5 mt-4 md:mt-0 md:pr-10 flex md:justify-end">
                  <img
                    src={img}
                    alt={name}
                    className="w-full md:w-40 rounded-2xl"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default MentorsCard;
