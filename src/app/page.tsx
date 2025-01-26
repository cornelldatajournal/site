import Link from 'next/link';
import Image from 'next/image';
import { getAllArticles } from '@/lib/articles';
import { formatDate } from '@/lib/utils';
import { BaseArticle } from '@/types/index';
import { PlotLoader } from '@/components/plots/PlotLoader';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ArticlePlotsProvider } from '@/contexts/ArticlePlotsContext';
import cdjicon from '/public/cdj_icon.png';
import { Button } from '@/components/ui/button';
export default async function HomePage() {
  const articles = await getAllArticles();
  const [latestArticle, ...otherArticles] = articles;

  const renderArticle = async (article: BaseArticle) => {
    if (article.layout === 'image') {
      return (
        <div className="mb-4">

          <Image
            src={`/${article.image_path.replace('public/', '')}`}
            alt="Data Visualization Infographics Blog"
            width={800}
            height={400}
          />
          <div className="text-xl text-black dark:text-neutral-400 mb-2 font-space-mono uppercase font-bold">
            {article.section}
          </div>
          <Link href={`/articles/${article.slug}`}>
            <h2 className="text-xl font-serif mb-2 hover:text-blue-600 dark:hover:text-blue-400">
              {article.title}
            </h2>
          </Link>
          <p className="text-neutral-600 dark:text-neutral-400">
            {article.description}
          </p>
        </div>
      );
    }
    else if (article.layout === 'quote') {
      // console.log("Quote: ", article.quote, article);
      return (
        <div className="mb-4">
          <div className="text-xl text-black dark:text-neutral-400 mb-2 font-space-mono uppercase font-bold">
            {article.section}
          </div>
          <Link href={`/articles/${article.slug}`}>
            <h2 className="text-4xl font-eb-garamond mb-2 hover:text-blue-600 dark:hover:text-blue-400">
              "{article.caption}"
            </h2>
          </Link>
          <p className="text-neutral-600 dark:text-neutral-400">
            — {article.attribution}
          </p>
        </div>
      );
    }
    else if (article.layout === 'plot') {
      // Load the plots data for this article
      let articlePlots = { plots: [] };
      try {
        const plotsModule = await import(`@/content/${article.slug}/plots`).catch(() => null);
        if (plotsModule?.articlePlots) {
          articlePlots = plotsModule.articlePlots;
        }
      } catch (error) {
        console.debug(`No plots found for ${article.slug}`);
      }

      return (
        <div className="mb-4">

          <div className="mb-4">
            <ArticlePlotsProvider plots={articlePlots}>
              <PlotLoader plotId={article.featured_plot} />
            </ArticlePlotsProvider>
          </div>
          <div className="text-xl text-black dark:text-neutral-400 mb-2 font-space-mono uppercase font-bold">
            {article.section}
          </div>
          <Link href={`/articles/${article.slug}`}>
            <h2 className="text-6xl font-medium font-space-grotesk mb-2 hover:text-blue-600 dark:hover:text-blue-400">
              {article.title}
            </h2>
          </Link>
          <p className="text-neutral-600 dark:text-neutral-400 font-helvetica">
            {article.description}
          </p>
        </div>
      );
    }
    else {
      return (
        <div>
          <div className="text-xl text-black dark:text-neutral-400 mb-2 font-space-mono uppercase font-bold">
            {article.section}
          </div>
          <Link href={`/articles/${article.slug}`}>
            <h2 className="text-4xl font-eb-garamond mb-2 hover:text-blue-600 dark:hover:text-blue-400">
              {article.title}
            </h2>
          </Link>
          <p className="text-neutral-600 dark:text-neutral-400 font-helvetica">
            {article.description}
          </p>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">

      {/* Main Content */}
      <main className="container max-w-9xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,1.5fr,1fr] gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {otherArticles.slice(0, Math.ceil(otherArticles.length / 2)).map(article => (
              <div key={article.slug} className="border-b pb-8 border-neutral-200 dark:border-neutral-800">
                {renderArticle(article)}
              </div>
            ))}
          </div>

          {/* Center Column - Featured Article */}
          <div className="border-l border-r px-8 border-neutral-200 dark:border-neutral-800">
            {latestArticle && (
              <div className="text-center">
                {renderArticle(latestArticle)}
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {otherArticles.slice(Math.ceil(otherArticles.length / 2)).map(article => (
              <div key={article.slug} className="border-b pb-8 border-neutral-200 dark:border-neutral-800">
                {renderArticle(article)}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
