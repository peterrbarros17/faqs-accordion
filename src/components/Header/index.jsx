import { IconStar } from "./icon-star";

export default function Header({title}){
    return(
        <header className="flex items-center gap-2">
          <IconStar/>
          <h1 className="text-3xl">{title}</h1>
        </header>
    )
}