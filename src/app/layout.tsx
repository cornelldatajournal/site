"use client"
import "./globals.css";
import { Space_Mono, Space_Grotesk, EB_Garamond } from 'next/font/google';
import Link from "next/link";
import Image from "next/image";
import cdjicon from "../../public/cdj_icon.png";
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en" className={`${spaceMono.variable} ${spaceGrotesk.variable} ${ebGaramond.variable}`}>
      <head>
        <link rel="icon" href="cdj_icon_1.png"/>
        <title>Cornell Data Journal</title></head>
      <body className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
        {/* Top Banner */}
        <div className="bg-[#3E32BA] text-white py-2">
          <div className="container max-w-8xl mx-auto px-4">
            <p className="font-space-grotesk text-sm text-center">
              🫵🏼 Sign up for a <a href="https://forms.gle/vq8uf6StLqkQ1B3T8" className="underline hover:text-neutral-200">coffee chat</a> with a CDJ member!
            </p>
          </div>
        </div>

        <header className="border-b border-neutral-200 dark:border-neutral-800 sticky top-0 bg-white dark:bg-black z-50">
          <div className="container max-w-8xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center relative">
              {/* Left Navigation - Hidden on Mobile */}
              <nav className="hidden lg:flex">
                <Link
                  href="/articles"
                  className="text-neutral-600 font-space-grotesk hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:italic py-2"
                >
                  Articles
                </Link>
              </nav>

              {/* Logo and Title - Left on Mobile, Centered on Desktop */}
              <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-start lg:items-center">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src={cdjicon}
                    alt="CDJ Icon"
                    height={40}
                    width={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                  <h1 className="text-lg sm:text-2xl lg:text-4xl font-helvetica font-medium transition-all whitespace-nowrap">
                    Cornell Data Journal
                  </h1>
                </Link>
                {pathname === '/' && (
                  <h3 className="hidden lg:block text-neutral-600 dark:text-neutral-400 font-space-grotesk text-xs sm:text-sm">
                    &ldquo;Radical Candor&rdquo; • {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </h3>
                )}
              </div>

              {/* Mobile Menu Button - Right Aligned */}
              <button
                className="lg:hidden p-2 ml-auto"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex gap-5 justify-end">
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

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
              <div className="md:hidden py-4 space-y-4">
                <Link
                  href="/articles"
                  className="block text-neutral-600 font-space-grotesk hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:italic py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Articles
                </Link>
                <Link
                  href="/about"
                  className="block text-neutral-600 font-space-grotesk hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:italic py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/masthead"
                  className="block text-neutral-600 font-space-grotesk hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:italic py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Masthead
                </Link>
                <Link
                  href="/contribute"
                  className="block text-white font-space-grotesk bg-[#3E32BA] hover:bg-[#3E32BA]/90 dark:bg-[#3E32BA] dark:hover:bg-[#3E32BA]/90 px-4 py-2 rounded-md transition-colors w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Involved
                </Link>
              </div>
            )}
          </div>
        </header>

        {/* Article Sections */}
        <div className="bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
          <div className="container max-w-8xl mx-auto px-4 py-3">
            <nav className="flex flex-wrap justify-center gap-6">
              <Link
                href="/sections/environment"
                className="text-neutral-600 font-space-grotesk hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:italic py-2"
              >
                Environment
              </Link>
              <Link
                href="/sections/culture"
                className="text-neutral-600 font-space-grotesk hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:italic py-2"
              >
                Culture
              </Link>
              <Link
                href="/sections/politics"
                className="text-neutral-600 font-space-grotesk hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:italic py-2"
              >
                Politics
              </Link>
              <Link
                href="/sections/finance"
                className="text-neutral-600 font-space-grotesk hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:italic py-2"
              >
                Finance
              </Link>
              <Link
                href="/sections/health"
                className="text-neutral-600 font-space-grotesk hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:italic py-2"
              >
                Health
              </Link>
            </nav>
          </div>
        </div>

        {children}

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
                <h3 className="text-lg font-space-mono font-bold mb-4 uppercase">Quick Links</h3>
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
                <h3 className="text-lg font-space-mono font-bold mb-4 uppercase">Connect</h3>
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
                Copyright {new Date().getFullYear()} Cornell Data Journal. All rights reserved. | This organization is a registered student organization of <a href="https://www.cornell.edu" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-900 dark:hover:text-neutral-100">Cornell University</a>. | <a href="https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-900 dark:hover:text-neutral-100">&quot;Equal Education & Employment&quot;</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}