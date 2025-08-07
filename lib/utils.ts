
import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

import {techMap} from "@/constants/techmap";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const getDevIconsClassName = (techName: string) => {
    const normalizeTechName = techName.replace(/[.]/g, "").toLowerCase();

    return techMap[normalizeTechName] ? `${techMap[normalizeTechName]} colored` : "devicon-devicon-plain";
}