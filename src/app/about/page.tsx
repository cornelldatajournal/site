"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NewspaperIcon, UsersIcon, ChartBarIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    const companies = [
        { name: "RBC Capital Markets", logo: "/images/alumni_placement_logos/webp/rbc.webp" },
        { name: "PwC", logo: "/images/alumni_placement_logos/webp/pwc.webp" },
        { name: "EY-Parthenon", logo: "/images/alumni_placement_logos/webp/ey.webp" },
        { name: "Business Insider", logo: "/images/alumni_placement_logos/webp/bi.webp" },
        { name: "The EDF Group", logo: "/images/alumni_placement_logos/edf.svg" },
        { name: "Columbia School of Journalism", logo: "/images/alumni_placement_logos/webp/columbia.webp" },
        { name: "IBM", logo: "/images/alumni_placement_logos/webp/ibm.webp" },
        { name: "Bank of America", logo: "/images/alumni_placement_logos/webp/bofa.webp" },
        { name: "Cerberus Capital Management", logo: "/images/alumni_placement_logos/webp/cerberus.webp" },
        { name: "Stripe", logo: "/images/alumni_placement_logos/webp/stripe.webp" },
        { name: "Two Sigma", logo: "/images/alumni_placement_logos/webp/two-sigma.webp" },
        { name: "MIT CSAIL", logo: "/images/alumni_placement_logos/webp/mit.webp" }
    ];

    return (
        <main className="container py-12 px-4 sm:px-6 max-w-6xl mx-auto">
            {/* Motto Section */}
            {/* <div className="text-center mb-16">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-space-mono font-medium text-[#3E32BA] mb-2">Radical Candor</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 font-space-grotesk text-sm">
                        Uncovering raw truths about the world around us.
                    </p>
                </div>
            </div> */}

            {/* Mission Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                <Card>
                    <CardHeader>
                        <h1 className="font-eb-garamond text-2xl">What is <i>CDJ</i>?</h1>
                    </CardHeader>
                    <CardContent className="font-space-grotesk">
                        Founded in Fall 2020, the <i>Cornell Data Journal</i> is an online investigative journalism publication featuring data visualization, data communication, and interdisciplinary research pieces.
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <h1 className="font-eb-garamond text-2xl">What is Data Journalism?</h1>
                    </CardHeader>
                    <CardContent className="font-space-grotesk">
                        Data journalism combines data, visual, and narrative reporting into digital stories. This includes statistical modelling, interactive essays, and succinct visualizations.
                    </CardContent>
                </Card>
            </div>

            {/* What We Do Section */}
            <div className="mb-16">
                <h2 className="text-2xl font-eb-garamond mb-6">What We Do</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <UsersIcon className="w-6 h-6 text-[#3E32BA]" />
                                <CardTitle className="font-space-grotesk text-lg">Collaborate</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="font-space-grotesk text-sm text-neutral-600">
                            Teams work together on data-driven articles
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <NewspaperIcon className="w-6 h-6 text-[#3E32BA]" />
                                <CardTitle className="font-space-grotesk text-lg">Publish</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="font-space-grotesk text-sm text-neutral-600">
                            Articles published on a rolling basis
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <ChartBarIcon className="w-6 h-6 text-[#3E32BA]" />
                                <CardTitle className="font-space-grotesk text-lg">Learn</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="font-space-grotesk text-sm text-neutral-600">
                            Skillbuilding workshops & seminars
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <RocketLaunchIcon className="w-6 h-6 text-[#3E32BA]" />
                                <CardTitle className="font-space-grotesk text-lg">Grow</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="font-space-grotesk text-sm text-neutral-600">
                            Building data journalism presence on campus
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Instagram */}
            <section className="mb-16">
                <h2 className="text-2xl font-eb-garamond mb-2">Instagram</h2>
                <p className="text-neutral-600 dark:text-neutral-400 font-space-grotesk text-sm">
                    Our <a href="https://www.instagram.com/cornelldatajournal" className="underline hover:text-neutral-900 dark:hover:text-neutral-100">Instagram</a> has the most up to date information on events and opportunities.
                </p>
                <br />
                <div className="flex justify-self-center w-[580px] max-w-[100%]">
                    <iframe 
                        src="images/embeds/instagram.html" 
                        className="h-[480px] w-[100%]"
                    >
                        Loading…
                    </iframe>
                </div>
            </section>

            {/* Alumni Section */}
            <div className="mb-16">
                <div className="mb-8">
                    <h2 className="text-2xl font-eb-garamond mb-2 justify-start">Alumni Placement</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 font-space-grotesk text-sm">
                        Our alumni mess around with data at top companies
                    </p>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center bg-neutral-50 dark:bg-neutral-900 rounded-xl p-8">
                    {companies.map((company) => (
                        <div
                            key={company.name}
                            className="w-24 h-24 relative grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                        >
                            <div className="group relative w-full h-full flex items-center justify-center">
                                <Image
                                    src={`${company.logo}`}
                                    alt={company.name}
                                    width={96}
                                    height={96}
                                    className="object-contain"
                                />
                                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-200 w-[96px] text-center text-xs font-space-grotesk bg-white dark:bg-black 
                                px-2 py-1 rounded-[10px] shadow-sm">
                                    <span className="">
                                        {company.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Equal Opportunity Statement */}
            <div className="text-center mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
                <p className="text-neutral-500 dark:text-neutral-400 font-space-grotesk text-xs">
                    <Link href="/equal-education-and-employment-opportunity" className="underline hover:text-neutral-900 dark:hover:text-neutral-100">
                        Equal Education and Employment Opportunity Statement
                    </Link>
                </p>
            </div>
        </main>
    );
}
