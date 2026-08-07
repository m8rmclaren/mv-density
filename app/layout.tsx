import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://mvdensity.com"),
    title: "MV Density — Willow Springs Neighborhood",
    description:
        "The proposed Mountain Village development is twice as dense as Jefferson County's Long Range Plan allows. Learn our position, upcoming meeting details, and how to get a lawn sign.",
    openGraph: {
        title: "MV Density — Willow Springs Neighborhood",
        description:
            "The proposed Mountain Village development is twice as dense as Jefferson County's Long Range Plan allows. Learn our position, upcoming meetings, and how to get a lawn sign.",
        url: "https://mvdensity.com",
        siteName: "MV Density",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
        >
            <body className="min-h-full flex flex-col">
                {children}
                <Analytics />
            </body>
        </html>
    );
}
