import Image from "next/image";
import Link from "next/link";
import React from 'react';

import Theme from "@/components/Navigation/Navbar/Theme";

const Navbar = () => {
    return (
        <nav
            className="flex-between background-light900_dark200 fixed z-50 w-full p-6 shadow-light-300 dark:shadow-none sm:px-12 gap-5">
            <Link href="/" className="flex items-center gap-1">
                <Image src="/images/site-logo.svg"
                       alt="site-logo"
                        className="dark:brightness-0 dark:invert"
                       width={32} height={32}
                />
                <p className="h2-bold font-space-grotesk text-white-100  max-sm:hidden">
                    Bug<span className="text-primary-500">Up</span>
                </p>
            </Link>
            <p>
                Global Search
            </p>
            <div className="flex-between gap-5"><Theme/></div>
        </nav>
    );
};

export default Navbar;