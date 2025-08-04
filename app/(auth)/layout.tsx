import Image from "next/image";
import React, {ReactNode} from 'react';
import SocialAuthForm from "@/components/Forms/page";

const AuthLayout = ({children}: { children: ReactNode }) => {
    return (
        <main
            className="flex items-center justify-center min-h-screen   px-4 py-10">
            <section
                className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full border px-4 py-10 rounded-[10px] shadow-md sm:min-w-[520px] sm:px-8">
                <div className="flex items-center justify-center gap-2">
                    <div className="space-y-2.5">
                        <h1 className="h2-bold text-dark-100_light900">
                            Start here!!!Bug Up
                        </h1>
                        <p className="text-dark500_light400  ">
                            Solve your bugs by seeking help and helping others.
                        </p>
                    </div>
                    <Image src="/images/site-logo.svg" alt="site-logo" width={50} height={50}
                           className="dark:brightness-0 dark:invert"/>
                </div>
                {children}
                <SocialAuthForm/>
            </section>
        </main>
    );
};

export default AuthLayout;