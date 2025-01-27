export default function GetInvolvedPage() {
    return (
        <main className="container max-w-6xl mx-auto items-center mt-12">
            <h1 className="text-2xl font-eb-garamond mb-6">Get Involved</h1>

            <section className="mb-12">
                <p className="font-space-grotesk">
                    We welcome students of all backgrounds and disciplines to come create with us. Whether you&apos;ve worked with data before or not, anyone is welcome to contribute and publish with us.
                </p>
            </section>

            <section className="mb-16">
                <p className="font-space-grotesk">
                    If you&apos;re interested in learning about us as an organization,{" "}
                    <a href="/about" className="text-blue-600 hover:underline">
                        check this out!
                    </a>
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
