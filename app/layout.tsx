import type {Metadata} from "next";
import "./globals.css";
import localFont from "next/font/local";

const inter = localFont({
    src: './fonts/InterVF.ttf',
    variable: "--font-inter",
    weight: "100 200 300 400 500 600 700 800 900",
});
const spaceGrotesk = localFont({
    src: './fonts/SpaceGrotesk.ttf',
    variable: "--font-space-grotesk",
    weight: "300 400 500 600 700 800 ",
});

export const metadata: Metadata = {
    title: "Bug Up",
    description: "Get your bug related queries sorted out here",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
