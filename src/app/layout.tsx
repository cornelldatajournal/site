"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Space_Mono, Space_Grotesk, EB_Garamond } from 'next/font/google';
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import cdjicon from "../../public/cdj_icon.png";
import { usePathname } from 'next/navigation';

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

// export const metadata: Metadata = {
//   title: "Cornell Data Journal",
//   description: "Cornell's premier data journalism publication",
//   icons: {
//     icon: [
//       {
//         url: "/cdj_icon.png",
//         href: "/cdj_icon.png",
//       }
//     ],
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${spaceGrotesk.variable} ${ebGaramond.variable} antialiased min-h-screen flex flex-col`}>
        <div className="flex-1">
          <header className="border-b border-neutral-500 dark:border-neutral-800 max-w-8xl mx-auto">
            <div className="container max-w-8xl mx-auto px-4 py-6">
              <div className="grid grid-cols-[1fr,auto,1fr] items-start w-full">
                {/* Left Navigation */}
                <nav className="flex justify-start">
                  <Link
                    href="/articles"
                    className="text-neutral-600 font-space-grotesk hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 px-0 py-2 hover:italic"
                  >
                    Articles
                  </Link>
                </nav>

                {/* Logo and Title - Centered */}
                <div className="flex flex-col items-center gap-2">
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      src={cdjicon}
                      alt="CDJ Icon"
                      height={40}
                      width={40}
                      className="w-10 h-10 object-contain"
                    />
                    <h1 className="text-4xl font-helvetica font-medium transition-all">
                      Cornell Data Journal
                    </h1>
                  </Link>
                  {pathname === '/' && (
                    <h3 className="text-neutral-600 dark:text-neutral-400 font-space-grotesk text-sm">
                      "Radical Candor" • {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </h3>
                  )}
                </div>

                {/* Right Navigation */}
                <nav className="flex gap-5 justify-end">
                  <Link
                    href="/about"
                    className="text-neutral-600 font-space-grotesk hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:italic py-2"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/masthead"
                    className="text-neutral-600 font-space-grotesk hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:italic px-4 py-2"
                  >
                    Masthead
                  </Link>
                  <Link
                    href="/contribute"
                    className="text-white font-space-grotesk bg-[#3E32BA] hover:bg-[#3E32BA]/90 dark:bg-[#3E32BA] dark:hover:bg-[#3E32BA]/90 px-4 py-2 rounded-md transition-colors"
                  >
                    Get Involved
                  </Link>
                </nav>
              </div>
            </div>
          </header>
          <div>
            {children}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-neutral-500 dark:border-neutral-800">
          <div className="container max-w-8xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Logo and Description */}
              <div className="space-y-4">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src={cdjicon}
                    alt="CDJ Icon"
                    height={30}
                    width={30}
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-2xl font-helvetica font-medium">
                    Cornell Data Journal
                  </span>
                </Link>
                <p className="text-neutral-600 dark:text-neutral-400 font-space-grotesk">
                  Offering data-driven perspectives on current events, academics, politics, and beyond.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-space-grotesk font-medium mb-4">Quick Links</h3>
                <nav className="space-y-3">
                  <Link href="/articles" className="block text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 font-space-grotesk">
                    Articles
                  </Link>
                  <Link href="/about" className="block text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 font-space-grotesk">
                    About Us
                  </Link>
                  <Link href="/masthead" className="block text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 font-space-grotesk">
                    Masthead
                  </Link>
                  <Link href="/contribute" className="block text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 font-space-grotesk">
                    Get Involved
                  </Link>
                </nav>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-space-grotesk font-medium mb-4">Connect</h3>
                <div className="space-y-3 font-space-grotesk">
                  <a
                    href="https://www.instagram.com/cornelldatajournal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/company/cornell-data-journal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/cornelldatajournal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  >
                    GitHub
                  </a>
                  <a
                    href="mailto:cornelldatajournal@gmail.com"
                    className="block text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-center text-neutral-600 dark:text-neutral-400 font-space-mono text-sm">
                Copyright {new Date().getFullYear()} Cornell Data Journal. All rights reserved. | This organization is a registered student organization of <a href="https://www.cornell.edu" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-900 dark:hover:text-neutral-100">Cornell University</a>.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}