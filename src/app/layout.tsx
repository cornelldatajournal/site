import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Space_Mono, Space_Grotesk, EB_Garamond } from 'next/font/google';
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import cdjicon from "../../public/cdj_icon.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-eb-garamond',
});

export const metadata: Metadata = {
  title: "Cornell Data Journal",
  description: "Cornell's premier data journalism publication",
  icons: {
    icon: [
      {
        url: "/cdj_icon.png",
        href: "/cdj_icon.png",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${spaceGrotesk.variable} ${ebGaramond.variable} antialiased`}>
        <div>
          <header className="border-b border-neutral-500 dark:border-neutral-800 max-w-9xl mx-auto">
            <div className="container max-w-9xl mx-auto px-4 py-6">
              <div className="grid grid-cols-[1fr,auto,1fr] items-start w-full">
                {/* Left Navigation */}
                <nav className="flex gap-8 justify-start">
                  <Link
                    href="/articles"
                    className="text-neutral-600 font-space-grotesk hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 px-4 py-2"
                  >
                    Articles
                  </Link>
                </nav>

                {/* Logo and Title - Centered */}
                <div className="flex items-center gap-4">
                  <Link href="/" className="flex items-center gap-4">
                    <Image
                      src={cdjicon}
                      alt="CDJ Icon"
                      height={40}
                      className="w-10 h-10"
                    />
                    <h1 className="text-4xl font-helvetica font-medium transition-all">
                      Cornell Data Journal
                    </h1>
                  </Link>
                </div>

                {/* Right Navigation */}
                <nav className="flex gap-8 justify-end">
                  <Link
                    href="/about"
                    className="text-neutral-600 font-space-grotesk hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 px-4 py-2"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contribute"
                    className="text-white font-space-grotesk bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-4 py-2 rounded-md transition-colors"
                  >
                    Get Involved
                  </Link>
                </nav>
              </div>
            </div>
          </header>
        </div>
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}