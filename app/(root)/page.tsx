import Link from "next/link";

import LocalSearch from "@/components/Search/LocalSearch";
import {Button} from "@/components/ui/button";
import ROUTES from "@/constants/routes";



const Home = async () => {
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
               <LocalSearch imgSrc="/icons/search.svg" placeholder="Search questions..." otherClasses="flex-1" route="/"/>
            </section>
            HomeFilter
            <div className="mt-10 flex w-full gap-6 flex-col">
                <p>Question Card</p>
                <p>Question Card</p>
                <p>Question Card</p>
                <p>Question Card</p>
            </div>
        </>
    );
};

export default Home;