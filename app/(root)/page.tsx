import Link from "next/link";

import LocalSearch from "@/components/Search/LocalSearch";
import {Button} from "@/components/ui/button";
import ROUTES from "@/constants/routes";


interface HomeProps {
    searchParams: Promise<{ [key: string]: string }>,
}

const questions = [
    {
        _id: "1",
        title: "How to learn React?",
        description: "I want to learn React, can anyone help me?",
        tags: [
            {_id: "1", name: "React"},
            {_id: "2", name: "JavaScript"}
        ],
        author: {_id: "1", name: "Batman"},
        upvotes: 10,
        answers: 5,
        views: 100,
        createdAt: new Date()
    },
    {
        _id: "2",
        title: "Best way to optimize MongoDB queries?",
        description: "My queries are getting slower as data grows. Any tips for improving MongoDB performance?",
        tags: [
            {_id: "3", name: "MongoDB"},
            {_id: "4", name: "Database"}
        ],
        author: {_id: "2", name: "Iron Man"},
        upvotes: 7,
        answers: 3,
        views: 75,
        createdAt: new Date()
    },
    {
        _id: "3",
        title: "What is Docker and how to use it in development?",
        description: "I have heard about Docker but never used it. How do I start with Docker for my local projects?",
        tags: [
            {_id: "5", name: "Docker"},
            {_id: "6", name: "DevOps"}
        ],
        author: {_id: "3", name: "Wonder Woman"},
        upvotes: 12,
        answers: 4,
        views: 150,
        createdAt: new Date()
    }
];


const Home = async ({searchParams}: HomeProps) => {
    const {query =""} = await searchParams;
    const filteredQuestions = questions.filter(question => question.title.toLowerCase().includes(query?.toLowerCase()));
    return (
        <>
            <section className="w-full flex  flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
                <h1 className="h1-bold text-dark100_light900">All Questions</h1>
                <Button className="primary-gradient min-h[46px] px-4 py3 !text-light-900" asChild>
                    <Link href={ROUTES.ASK_QUESTIONS}>
                        Ask A Question
                    </Link>
                </Button>
            </section>
            <section className="mt-11">
                <LocalSearch imgSrc="/icons/search.svg" placeholder="Search questions..." otherClasses="flex-1"
                             route="/"/>
            </section>
            {/*HomeFilter*/}
            <div className="mt-10 flex w-full gap-6 flex-col">
                {filteredQuestions.map(question => <h1 key={question._id}>{question.title}</h1>)}
            </div>
        </>
    );
};

export default Home;