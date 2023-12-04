import { useState } from "react";
import { IconMinus } from "./icon-minus";
import { IconPlus } from "./icon-plus";

export default function Accordion({title, answer}){
    const [accordionOpen, setAccordionOpen] = useState(false);
    return(
        <div className=" border-t-[1px] border-slate-300 pt-6">
            <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex items-center justify-between hover:text-purple-600 hover:transition-all hover:duration-300 hover:ease-out">
                <h2 className="font-bold max-w-lg text-left">{title}</h2>
                {accordionOpen ? (<IconMinus/>): (<IconPlus/>)}
            </button>
            <div className={`grid overflow-hidden transition-all text-left duration-300 ease-in-out text-slate-600 ${
                accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}>
                <p className="overflow-hidden pt-2 max-w-lg">{answer}</p>
            </div>
        </div>
    )
}