import React from "react";
import Accordion from "../Accordion/Accordion";
type Props = {
  question: string;
  answer: string;
  className?: string;
};

export const EventAccordion = ({ question, answer, className }: Props) => {
  const head: JSX.Element = (
    <h6 className="text-white-100 text-xl font-normal">{question}</h6>
  );
  const body: JSX.Element = (
    <div className="text-white-100/90 text-base font-normal">{answer}</div>
  );
  return (
    <div className={`flex ${className}`}>
      <Accordion head={head} body={body} />
    </div>
  );
};

export default EventAccordion;
