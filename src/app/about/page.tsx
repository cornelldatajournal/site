export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">
              The Cornell Data Journal is a student-run publication dedicated to exploring 
              the intersection of data science, technology, and society through thoughtful 
              analysis and visualization.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Our Mission</h2>
            <p className="mb-6">
              We aim to make complex data-driven insights accessible to everyone, fostering 
              a deeper understanding of the world through data visualization and analysis.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Our Values</h2>
            <ul className="list-disc list-inside space-y-3 mb-6">
              <li>Rigorous analysis and fact-based reporting</li>
              <li>Clear, accessible data visualization</li>
              <li>Ethical data practices and transparency</li>
              <li>Interdisciplinary collaboration</li>
              <li>Educational outreach and community engagement</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Our Team</h2>
            <p className="mb-6">
              Our team consists of passionate students from various disciplines, including 
              computer science, statistics, journalism, and design. We believe that diverse 
              perspectives lead to better insights and more impactful stories.
            </p>

            <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="mb-2">
                Have questions or want to learn more about our work?
              </p>
              <a 
                href="mailto:contact@cornelldatajournal.com"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
              >
                contact@cornelldatajournal.com
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 