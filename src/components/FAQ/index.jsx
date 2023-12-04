import Accordion from "../Accordion";
import { faqs } from "../../mocks/faq";

export default function FAQ() {
  
  return (
    <ul className="flex flex-col gap-4">
      {faqs.map((item, id) => (
        <li key={id}>
          <Accordion
            title={item.question}
            answer={item.answer}
          />
        </li>
      ))}
    </ul>
  );
}
