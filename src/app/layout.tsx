import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";

const linuxBiolinum = localFont({
  src: [
    {
      path: "../../public/fonts/linux-biolinum/LinBiolinum_R.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/linux-biolinum/LinBiolinum_RB.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/linux-biolinum/LinBiolinum_RI.woff",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-linux-biolinum",
});

const linuxBiolinumK = localFont({
  src: [
    {
      path: "../../public/fonts/linux-biolinum/LinBiolinum_K.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-linux-biolinum-k",
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    images: [
      {
        url: "/images/ogp.png",
        width: 1200,
        height: 630,
        alt: customMetadata.title || aboutMe.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/ogp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${linuxBiolinum.variable} ${linuxBiolinumK.variable} ${notoSerifJP.variable} antialiased`}
      >
        <main className="">{children}</main>
      </body>
    </html>
  );
}
