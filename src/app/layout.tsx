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
        <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-[#FFFFFF]">
          <div className="flex flex-row mx-auto max-w-7xl px-6 py-12 md:flex md:items-start md:justify-between ">
            <div className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                © {new Date().getFullYear()} {aboutMe.name}.
              </p>
              {aboutMe.secretDescription && (
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-4">
                  {aboutMe.secretDescription}
                </p>
              )}
            </div>
            <div className="mb-4">
              <p className="text-sm text-neutral-500 dark:text-neutral-500 justify">
                Code largely borrowed from{" "}
                <a
                  href="https://github.com/tovacinni/research-website-template"
                  className="underline hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors"
                >
                  research-website-template
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
