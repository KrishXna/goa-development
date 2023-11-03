"use client";
import React, { useState, useEffect, useRef } from "react";
import { CloseArrowIcon, DownArrowIcon } from "@/assets/Icons";

type Props = {
  head: JSX.Element;
  body: JSX.Element;
};

const Accordion = ({ head, body }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) setHeight(contentRef.current.clientHeight);
  }, []);

  return (
    <div className="block w-full relative after:absolute after:inset-x-0 after:bottom-0 after:h-[1px] after:bg-white/70 py-4">
      <div
        className="w-full cursor-pointer flex justify-between items-center border-yellow-200 border-2 rounded-2xl p-4"
        onClick={() => setIsActive((prev) => !prev)}
      >
        <div className="w-full">{head} </div>
        <div
          className="w-8 
        transition-all"
        >
          {isActive ? <CloseArrowIcon /> : <DownArrowIcon />}
        </div>
      </div>
      <div className={`w-full overflow-hidden px-8`}>
        <div
          className="transition-all duration-500"
          style={{ marginTop: isActive ? "0px" : `-${height}px` }}
          ref={contentRef}
        >
          {body}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
