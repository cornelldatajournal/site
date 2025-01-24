import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';
import { formatDate } from '@/lib/utils';

export default async function HomePage() {
  const articles = await getAllArticles();
  const [latestArticle, ...otherArticles] = articles;

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-mono text-center font-bold mb-2">
            Cornell Data Journal
          </h1>
          <p className="text-center text-neutral-600 dark:text-neutral-400 font-mono">
            "RADICAL CANDOR" | {formatDate(new Date().toISOString())}
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-8">
            <Link
              href="/about"
              className="py-4 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              About Us
            </Link>
            <Link
              href="/contribute"
              className="py-4 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {otherArticles.slice(0, Math.ceil(otherArticles.length / 2)).map(article => (
              <div key={article.slug} className="border-b pb-8 border-neutral-200 dark:border-neutral-800">
                <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                  {article.section}
                </div>
                <Link href={`/article/${article.slug}`}>
                  <h2 className="text-xl font-serif mb-2 hover:text-blue-600 dark:hover:text-blue-400">
                    {article.title}
                  </h2>
                </Link>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {article.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Column - Featured Article */}
          <div className="border-l border-r px-8 border-neutral-200 dark:border-neutral-800">
            {latestArticle && (
              <div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                  {latestArticle.section}
                </div>
                <Link href={`/article/${latestArticle.slug}`}>
                  <h2 className="text-3xl font-serif mb-4 hover:text-blue-600 dark:hover:text-blue-400">
                    {latestArticle.title}
                  </h2>
                </Link>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                  {latestArticle.description}
                </p>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {otherArticles.slice(Math.ceil(otherArticles.length / 2)).map(article => (
              <div key={article.slug} className="border-b pb-8 border-neutral-200 dark:border-neutral-800">
                <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                  {article.section}
                </div>
                <Link href={`/article/${article.slug}`}>
                  <h2 className="text-xl font-serif mb-2 hover:text-blue-600 dark:hover:text-blue-400">
                    {article.title}
                  </h2>
                </Link>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {article.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
