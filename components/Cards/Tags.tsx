import Image from "next/image";
import Link from "next/link";

import {Badge} from "@/components/ui/badge";
import ROUTES from "@/constants/routes";
import {getDevIconsClassName} from "@/lib/utils";


interface TagProps {
    _id: string,
    name: string,
    showCount?: boolean,
    questions?: number,
    compact?: boolean,
    remove?: boolean,
    isButton?: boolean,
    handleRemove?: () => void
}

const Tags = ({name, _id, showCount, compact, remove, isButton, handleRemove, questions}: TagProps) => {
    const iconClass = getDevIconsClassName(name);
    const Content = <>
        <Badge
            className="background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase flex flex-row gap-2 ">
            <div className="flex-center space-x-2">
                <i className={`${iconClass}`}>

                </i>
                <span>{name}</span>
            </div>
            {remove &&
                <Image src="/icons/close.svg" alt="close-icon"
                       className="cursor-pointer object-contain invert-0 dark:invert " width={12} height={12} onClick={handleRemove}/>
            }
        </Badge>
        {
            showCount && <p className="small-medium text-dark500_light700">
                {questions}
            </p>
        }
    </>

    function handleClick(e:React.MouseEvent) {
        e.preventDefault();
    }

    if (compact) {
        return isButton ?
            (<button onClick={handleClick} className="flex justify-between gap-2 ">
                {Content}
            </button>) : <Link href={ROUTES.TAG(_id)} className="flex justify-between gap-2">{name}
                {Content}
            </Link>
    }
};

export default Tags;