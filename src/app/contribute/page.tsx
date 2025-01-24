import Link from 'next/link';

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Get Involved</h1>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-8">
              We're always looking for passionate individuals to join our community. 
              Whether you're a writer, data scientist, designer, or just interested 
              in data journalism, there's a place for you here.
            </p>

            <div className="grid gap-8 md:grid-cols-2 mb-12">
              <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Write for Us</h3>
                <ul className="space-y-2 mb-4">
                  <li>Data-driven articles</li>
                  <li>Technical tutorials</li>
                  <li>Analysis pieces</li>
                  <li>Visualization projects</li>
                </ul>
                <Link 
                  href="/contribute/writing"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                >
                  Learn more →
                </Link>
              </div>

              <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Join the Team</h3>
                <ul className="space-y-2 mb-4">
                  <li>Editorial positions</li>
                  <li>Data visualization</li>
                  <li>Web development</li>
                  <li>Community management</li>
                </ul>
                <Link 
                  href="/contribute/team"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                >
                  View openings →
                </Link>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4">Submission Guidelines</h2>
            <div className="space-y-4 mb-8">
              <p>
                We welcome submissions that:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Are based on data and include visualizations</li>
                <li>Present clear and compelling narratives</li>
                <li>Follow ethical data practices</li>
                <li>Are accessible to a general audience</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold mb-4">Ready to Contribute?</h3>
              <p className="mb-4">
                Send us your pitch or article draft along with any relevant data visualizations.
              </p>
              <a 
                href="mailto:submissions@cornelldatajournal.com"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
              >
                submissions@cornelldatajournal.com
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 