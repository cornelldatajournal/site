import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NewspaperIcon, UsersIcon, ChartBarIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

export default function AboutPage() {
    return (
        <main className="container py-12 max-w-6xl mx-auto">
            {/* Mission Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                <Card>
                    <CardHeader>
                        <h1 className="font-eb-garamond text-2xl">What is <i>CDJ</i>?</h1>
                    </CardHeader>
                    <CardContent className="font-space-grotesk">
                        Founded in Fall 2020, and revived in Spring 2023, the <i>Cornell Data Journal</i> is an online investigative journalism publication featuring data visualization, data communication, and interdisciplinary research pieces.
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <h1 className="font-eb-garamond text-2xl">What is Data Journalism?</h1>
                    </CardHeader>
                    <CardContent className="font-space-grotesk">
                        Data journalism combines data, visual, and narrative reporting into digital stories. Examples include isometric illustrations, statistical explorations, and interactive essays.
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
        </main>
    );
}
