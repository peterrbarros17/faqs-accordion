import { IconMinus } from "./icon-minus";
import { IconPlus } from "./icon-plus";

export default function Accordion({
  question,
  answer,
  onClick,
  index,
  activeIndex,
}) {
  const isActive = index === activeIndex;

  return (
    <li className={`border-t-[1px] border-slate-300 p-4 overflow-hidden`}>
      <button
        onClick={() => onClick(index)}
        className={`flex w-full gap-4 text-left hover:text-purple-600
            hover: transition ease-in duration-150 focus:text-purple-600
        `}
      >
        <h2 className="font-bold">{question}</h2>
        <span>{isActive ? <IconMinus /> : <IconPlus />}</span>
      </button>
      {isActive && (
        <article className={`transition ease-in-out duration-300`}>
          <p className="py-2">{answer}</p>
        </article>
      )}
    </li>
  );
}
