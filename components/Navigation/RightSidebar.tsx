
import Image from "next/image";
import Link from "next/link";
import React from 'react';

import Tags from "@/components/Cards/Tags";
import ROUTES from "@/constants/routes";

const RightSidebar = () => {
    const hotQuestions = [
        {_id: "1", title: "How to create a custom hook in React"},
        {_id: "2", title: "What is the difference between useEffect and useLayoutEffect?"},
        {_id: "3", title: "How to manage global state with Context API in React?"},
        {_id: "4", title: "What are the benefits of using TypeScript with React?"},
        {_id: "5", title: "How to optimize performance in a large React application?"},

    ];
    const popularTags = [
        {_id: "1", name: "react", questions: 100},
        {_id: "2", name: "javascript", questions: 120},
        {_id: "3", name: "typescript", questions: 85},
        {_id: "4", name: "node.js", questions: 95},
        {_id: "5", name: "redux", questions: 70},
    ];


    return (
        <section
            className="pt-36 custom-scrollbar background-light900_dark200 sticky light-border right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden ">
            <div>
                <h3 className="h3-bold text-dark200_light900">
                    Top Questions
                </h3>
                <div className="mt-7 flex w-full  flex-col gap-[30px] ">
                    {
                        hotQuestions.map(({_id, title}) => <Link key={_id} href={ROUTES.PROFILE(_id)}
                                                                 className="cursor-pointer items-center justify-between gap-7">
                            <p className="body-medium text-dark500_light700">{title}</p>
                            <Image src={'/icons/chevron-right.svg'} alt="Chevron" width={20} height={20}
                                   className="invert-colors"/>
                        </Link>)
                    }
                </div>
            </div>
            <div className="mt-16 ">
                <h3 className="h3-bold text-dark300_light900">Popular Tags</h3>
                <div className="mt-7 flex flex-col gap-4">
                    {
                        popularTags.map(({_id, name, questions}) => (
                            <Tags _id={_id} name={name} questions={questions} key={_id} showCount compact/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default RightSidebar;