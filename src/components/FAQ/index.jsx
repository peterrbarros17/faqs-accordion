import React, { useState } from "react";
import { faqs } from "../../mocks/faq";
import Accordion from "../Accordion";

export default function FAQ() {
  
  const [ activeIndex, setActiveIndex ] = useState(null)

  const handleClick = (index) =>{
    setActiveIndex(index === activeIndex ? null : index)
  }
  
  return (
    <ul className="p-4 my-2 flex flex-col gap-4">
      {faqs.map((faq, index) => (
          <Accordion
            key={index}
            index={index}
            activeIndex={activeIndex}
            question={faq.question}
            answer={faq.answer}
            onClick={handleClick}
          />
      ))}
    </ul>
  );
}
