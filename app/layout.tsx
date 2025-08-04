import type {Metadata} from "next";
import "./globals.css";
import localFont from "next/font/local";
import {SessionProvider} from "next-auth/react";
import {Toaster} from "sonner";

import {auth} from "@/auth";
import {ThemeProvider} from "@/context/Themes";



const inter = localFont({
    src: './fonts/InterVF.ttf',
    variable: "--font-inter",
    weight: "100 200 300 400 500 600 700 800 900",
});
const spaceGrotesk = localFont({
    src: './fonts/SpaceGroteskVF.ttf',
    variable: "--font-space-grotesk",
    weight: "300 400 500 600 700 800 ",
});

export const metadata: Metadata = {
    title: "Bug Up",
    description: "Get your bug related queries sorted out here",
};

const RootLayout = async ({
                              children,
                          }: Readonly<{
    children: React.ReactNode;
}>) => {
    const session = await auth();
    return (
        <html lang="en" suppressHydrationWarning>
        <SessionProvider session={session}>
            <body
                className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
            >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                {children}
            </ThemeProvider>
            <Toaster richColors/>
            </body>
        </SessionProvider>
        </html>
    );
}
export default RootLayout;
