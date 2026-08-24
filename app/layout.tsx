import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Archivo carries the headlines and the big figures: a signage grotesque, which
// is the register of a posted county standard rather than a product landing page.
const archivo = Archivo({
    subsets: ["latin"],
    weight: ["600", "700"],
    variable: "--font-display",
});

// Plex Mono for anything that reads as surveyed data: eyebrows, densities, dates.
const plexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-plex-mono",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://mvdensity.com"),
    title: "MV Density: Willow Springs Neighborhood",
    description:
        "Jefferson County's Long Range Plan allows about 85 homes on the Mountain Village site. The application asks for 143. Here is the case, and how to reach the commissioners before the September 1 vote.",
    openGraph: {
        title: "MV Density: Willow Springs Neighborhood",
        description:
            "Jefferson County's Long Range Plan allows about 85 homes on the Mountain Village site. The application asks for 143. Here is the case, and how to reach the commissioners before the September 1 vote.",
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
            className={cn(
                "h-full",
                "antialiased",
                "font-sans",
                inter.variable,
                archivo.variable,
                plexMono.variable,
            )}
        >
            <body className="min-h-full flex flex-col">
                {children}
                <Analytics />
            </body>
        </html>
    );
}
