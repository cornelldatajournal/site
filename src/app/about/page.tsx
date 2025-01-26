export default function AboutPage() {
  return (
    <main className="container px-4 py-8 max-w-3xl mx-auto items-center">
      <h1 className="text-4xl mb-8 font-space-grotesk">What is the Cornell Data Journal?</h1>
      
      <section className="mb-12">
        <p className="text-lg mb-6 font-eb-garamond">
          Founded in Fall 2020, and revived in Spring 2023, the <i>Cornell Data Journal</i> is an online investigative journalism publication featuring data visualization, data communication, and interdisciplinary research pieces.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 font-space-grotesk">What We Do</h2>
        <ul className="list-disc pl-6 text-lg space-y-2 mb-6 font-eb-garamond">
          <li>Individuals or teams collaborating on articles</li>
          <li>Published on a rolling basis</li>
          <li>Skillbuilding workshops & seminars</li>
          <li>Building data journalism presence on campus</li>
        </ul>
        <p className="text-lg mb-6 font-eb-garamond">
          We're a group of Cornell students seeking to foster a data journalism community on campus. Coders, designers, writers, or students interested in data journalism are welcome to join our community.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 font-space-grotesk">What is data journalism?</h2>
        <p className="text-lg mb-6 font-eb-garamond">
          Data journalism is an emerging subfield of journalism, and often combines data, visual, and narrative reporting into digital stories. Examples include isometric illustrations, statistical explorations, and interactive essays. Think <a href="https://www.propublica.org/datastore" className="text-blue-600 hover:underline">ProPublica Data</a>, <a href="https://www.nytimes.com/spotlight/graphics" className="text-blue-600 hover:underline">New York Times Interactive</a>, or <a href="https://pudding.cool" className="text-blue-600 hover:underline">The Pudding</a>.
        </p>
      </section>

      <section>
        <p className="text-lg font-eb-garamond">
          If you're interested in learning more,{" "}
          <a href="/contribute" className="text-blue-600 hover:underline">
            get involved!
          </a>
        </p>
      </section>
    </main>
  );
}
