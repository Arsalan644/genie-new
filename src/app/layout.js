import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

import { Montserrat, Libre_Baskerville,MuseoModerno } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"], // characters (latin, devanagari, etc.)
  weight: ["400", "700", "800"], // pick weights you need
  variable: "--font-montserrat", // optional: CSS variable (for Tailwind)
});

export const museoModerno = MuseoModerno({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-museo-moderno",
});


export const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"], // characters (latin, devanagari, etc.)
  weight: ["400", "700"], // pick weights you need
  variable: "--font-baskerville", // optional: CSS variable (for Tailwind)
});

export const mainlux = localFont({
  src: "../../public/digitype-studio-mainlux-light.otf",
  variable: "--font-mainlux", // optional CSS variable
  display: "swap",
});


export const eula = localFont({
  src: "../../public/font/moggie.regular.otf",
  variable: "--font-eula", // optional CSS variable
  display: "swap",
});

export const metropolis = localFont({
  src: "../../public/font/metropolis/Metropolis-Regular.otf",
  variable: "--font-eula", // optional CSS variable
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Genie - Matrimonial Matchmaking",
  description: "Find your perfect match with Genie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mainlux.className}>{children}</body>
    </html>
  );
}
