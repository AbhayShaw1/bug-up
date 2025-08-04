"use client"
import Image from "next/image";
import {signIn} from "next-auth/react";
import {toast} from "sonner";

import {Button} from "@/components/ui/button";
import ROUTES from "@/constants/routes";


const SocialAuthForm = () => {
    const buttonClass = "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5"
    const handleSignIn = async (provider:"github"|"google") => {
        try{
           await signIn(provider,{redirectTo:ROUTES.HOME})
        }catch (error){
            console.log(error);
           toast.error("Sign In Failed.");
        }
    }
    return (
        <div className="flex flex-wrap gap-2.5 mt-10">
            <Button className={buttonClass} onClick={()=>handleSignIn("github")}>
                <Image src="/icons/github.svg" alt="github-icon" width={20} height={20}
                       className="invert-colors mr-2.5 object-contain"/>
                <span>Log in with Github</span>
            </Button>
            <Button className={buttonClass} onClick={()=>handleSignIn("google")}>
                <Image src="/icons/google.svg" alt="google-icon" width={20} height={20}
                       className="invert-colors mr-2.5 object-contain"/>
                <span>Log in with Google</span>
            </Button>

        </div>
    );
};

export default SocialAuthForm;