export default function GetInvolvedPage() {
    return (
        <main className="container py-12 px-4 sm:px-6 max-w-6xl mx-auto overflow-x-hidden items-center mt-12">
            <h1 className="text-2xl font-eb-garamond mb-6">Get Involved</h1>

            <section className="mb-12">
                <p className="font-space-grotesk">
                    We welcome students of all backgrounds and disciplines to come create with us. Whether you&apos;ve worked with data before or not, anyone is welcome to contribute and publish with us.
                </p>
            </section>

            <section className="mb-16">
                <p className="font-space-grotesk">
                    If you&apos;ve never heard of us before,{" "}
                    <a href="/about" className="text-blue-600 hover:underline">
                        check this out!
                    </a>
                </p>
            </section>

            <section className="mb-16 bg-[#3E32BA] text-white rounded-lg p-6 shadow-lg">
                <p className="font-space-grotesk text-lg font-bold">
                    🎉 Spring 2025 Applications Now Open! 🎉
                </p>
                <p className="font-space-grotesk mt-2">
                    Due on February 5, 2025 -{" "}
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScVZzhbwTYL5-kRxSnB_kLoUmO3MEb0InVEP_Ap_VpkFGhwRg/viewform" className="text-white underline hover:text-neutral-200">
                        Apply here!
                    </a>
                </p>
                <p className="font-space-grotesk mt-4 text-sm">
                    CDJ accepts (and welcomes!) students at Cornell from all backgrounds, majors, and levels of experience. We prioritize learning and exposure to the disciplines of data science, data visualization, and data journalism. Please do not hesitate to apply, even if you have no formal background in those fields—there is a place for everyone in CDJ!
                </p>
            </section>

            <section>
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
            </section>
        </main>
    );
}
