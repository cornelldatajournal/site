import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GetInvolvedPage() {
    return (
        <main className="container py-12 px-4 sm:px-6 max-w-6xl mx-auto overflow-x-hidden items-center">
            <section className="mb-16">
                <h1 className="text-2xl font-eb-garamond mb-6">Get Involved</h1>

                <Card className="mb-6 p-6">
                    <p className="font-space-grotesk text-lg font-bold mb-2">
                        Our Fall 2026 applications are now open!
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400 font-space-grotesk text-sm mb-4">
                        Applications are due on September 15th, 2026. To learn more about the club, you can schedule a <a href="https://forms.gle/irqbH9jEjGAiFUhE9" className="underline hover:text-neutral-950 dark:hover:text-neutral-100">coffee chat</a>, or attend an <a href="https://www.instagram.com/cornelldatajournal/" className="underline hover:text-neutral-950 dark:hover:text-neutral-100">information session</a>.
                    </p>
                    <a href="/apply" className="inline-block text-white font-space-grotesk bg-[#3E32BA] hover:bg-[#3E32BA]/90 dark:bg-[#3E32BA] dark:hover:bg-[#3E32BA]/90 px-4 py-2 rounded-md transition-colors">
                        Apply
                    </a>
                </Card>
            </section>

            <h1 className="text-2xl font-eb-garamond mb-2">FAQ</h1>

            <p className="text-neutral-600 dark:text-neutral-400 font-space-grotesk text-sm mb-6">
                Below are answers to some common questions about the club and our recruitment process.
            </p>
            <Card>
                <section className="p-6">
                    <p className="font-space-grotesk font-bold mb-4">
                        Q: What does a semester look like for a Cornell Data Journal (CDJ) member?
                    </p>
                    <p className="font-space-grotesk mb-6">
                        A: At the start of the semester, members will be placed into project teams based on their preferences. From there, Project Leads will guide members through weekly meetings and checkpoints towards the goal of publishing an article on a selected topic by the end of the semester, and presenting during our Symposium.
                    </p>

                    <p className="font-space-grotesk font-bold mb-4">
                        Q: What is Symposium?
                    </p>
                    <p className="font-space-grotesk mb-6">
                        A: Symposium is CDJ&apos;s culminating event. Members create research posters based on their projects, and present their work to other CDJ members, Cornell students, and professors. The event is typically kicked off with an industry-leading guest speaker, to talk about data journalism. The most recent speaker was <a href="https://en.wikipedia.org/wiki/Paul_Ginsparg" target="_blank" className="underline hover:text-neutral-950 dark:hover:text-neutral-100">Paul Ginsparg</a>, founder of <a href="https://arxiv.org/" target="_blank" className="underline hover:text-neutral-950 dark:hover:text-neutral-100">arXiv.org</a>.
                    </p>

                    <p className="font-space-grotesk font-bold mb-4">
                        Q: How are Project Leads selected?
                    </p>
                    <p className="font-space-grotesk mb-6">
                        A: The Project Lead role is typically reserved for returning members. At the beginning of the semester, they share their ideas with Leadership and&mdash;if approved&mdash;they pitch their project to the rest of the club. Impactful projects typically seek to answer some question about the world, using data as evidence.
                    </p>

                    <p className="font-space-grotesk font-bold mb-4">
                        Q: How does New Member Education (NME) work?
                    </p>
                    <p className="font-space-grotesk mb-6">
                        A: NME consists of 6 hour-long meetings. During each meeting, the instructor will walk through <a href="https://github.com/nikhilc52/cdj_nme" target="_blank" className="underline hover:text-neutral-950 dark:hover:text-neutral-100">interactive notebooks</a> on various data science concepts, with members following along on a forked copy. There are no “take home” assignments, nor is there baseline knowledge required. In addition to NME, there are also optional workshops that teach members miscellaneous coding and writing skills.
                    </p>

                    <p className="font-space-grotesk font-bold mb-4">
                        Q: When does G-Body take place?
                    </p>
                    <p className="font-space-grotesk mb-6">
                        A: G-Body is on Mondays, from 5-6pm. Attendance is required.
                    </p>

                    <p className="font-space-grotesk font-bold mb-4">
                        Q: What does the application process look like?
                    </p>
                    <p className="font-space-grotesk mb-6">
                        A: Within a few days of submitting an application, students that are selected to move forward will be invited to an interview with a handful of current CDJ Leaders and members. After we complete all interviews, we will send invites to join CDJ to a select batch of applicants. There will only be one “round” of interviews.
                    </p>

                    <p className="font-space-grotesk font-bold mb-4">
                        Q: Is there any technical knowledge required?
                    </p>
                    <p className="font-space-grotesk mb-6">
                        A: No. CDJ accepts students at Cornell from all backgrounds, majors, and levels of experience. We prioritize learning and exposure to the discipline of data journalism. Please do not hesitate to apply, even if you have no formal background in this field&mdash;there is a place for everyone in CDJ!
                    </p>

                    <p className="font-space-grotesk font-bold mb-4">
                        Q: Are coffee chats available?
                    </p>
                    <p className="font-space-grotesk">
                        A: Yes! A form to submit a coffee chat request will be posted on our <a href="https://www.instagram.com/cornelldatajournal" className="underline hover:text-neutral-900 dark:hover:text-neutral-100">Instagram</a> page and on this site, near the start of the semester. Shortly after submitting the form (within 3 days), a CDJ member or Leader will reach out to you to schedule a meeting time.
                    </p>
                </section>
            </Card>


            {/* <section>
                <h2 className="text-2xl font-eb-garamond mb-6">Upcoming Events</h2>
                <div className="w-full overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 mb-8">
                    <iframe
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=America%2FNew_York&src=Y29ybmVsbGRhdGFqb3VybmFsQGdtYWlsLmNvbQ&color=%237CB342&showTz=0&showCalendars=0&showTabs=0&showPrint=0&showDate=1&showNav=1&showTitle=0"
                        height="600"
                        width="100%"
                        scrolling="no"
                        title="CDJ Event Calendar"
                        className="border-0 w-full bg-white dark:bg-neutral-900"
                    ></iframe>
                </div>
            </section> */}
        </main>
    );
}
