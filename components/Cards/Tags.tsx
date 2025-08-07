import Link from "next/link";
import React from 'react';

import {Badge} from "@/components/ui/badge";
import ROUTES from "@/constants/routes";
import {getDevIconsClassName} from "@/lib/utils";


interface TagProps {
    _id: string,
    name: string,
    showCount?: boolean,
    questions: number,
    compact?: boolean
}

const Tags = ({name, _id, showCount, compact, questions}: TagProps) => {
    const iconClass = getDevIconsClassName(name);
    return (
        <Link href={ROUTES.TAG(_id)} className="flex justify-between gap-2">{name}
            <Badge className="background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2">
                <div className="flex-center space-x-2">
                    <i className={`${iconClass}`}>

                    </i>
                    <span>{name}</span>
                </div>
            </Badge>
            {
                showCount && <p className="small-medium text-dark500_light700">
                    {questions}
                </p>
            }
        </Link>
    );
};

export default Tags;