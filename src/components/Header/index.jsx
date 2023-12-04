import { IconStar } from "./icon-star";

export default function Header({faq}){
    return(
        <header className="flex items-center gap-2 mb-8">
          <IconStar/>
          <h1 className="text-3xl font-bold">{faq}</h1>
        </header>
    )
}