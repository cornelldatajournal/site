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
    const articleLink = article.external_link || `/articles/${article.slug}`;
    
    if (article.layout === 'image') {
      return (
        <div className="mb-4">
          <Image
            src={`/${article.image_path.replace('public/', '')}`}
            alt=""
            width={800}
            height={400}
          />
          <div className="text-xl text-black dark:text-neutral-400 mb-2 mt-3 font-space-mono uppercase font-bold">
            {article.section}
          </div>
          <Link href={articleLink}>
            <h2 className={`text-4xl ${Math.random() < 0.5 ? 'font-space-grotesk font-medium' : 'font-eb-garamond font-normal'} mb-2 hover:underline hover:decoration-[#3E32BA] dark:hover:underline dark:hover:decoration-[#3E32BA]`}>
              {article.title}
            </h2>
          </Link>
          <p className="text-neutral-600 dark:text-neutral-400 font-helvetica">
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
          <Link href={articleLink}>
          <h2 className={`text-4xl ${Math.random() < 0.5 ? 'font-space-grotesk font-medium' : 'font-eb-garamond font-normal'} mb-2 hover:underline hover:decoration-[#3E32BA] dark:hover:underline dark:hover:decoration-[#3E32BA]`}>
          "{article.quote}"
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
          <Link href={articleLink}>
          <h2 className={`text-6xl ${Math.random() < 0.5 ? 'font-space-grotesk font-medium' : 'font-eb-garamond font-normal'} mb-2 hover:underline hover:decoration-[#3E32BA] dark:hover:underline dark:hover:decoration-[#3E32BA]`}>
              {article.title}
            </h2>
          </Link>
          <p className="text-neutral-600 dark:text-neutral-400 font-helvetica">
            {article.description}
          </p>
        </div>
      );
    }
    else if (article.layout === 'link') {
      return (
        <div className="mb-4">
          <a href={article.external_link} target="_blank" rel="noopener noreferrer">
            <h2 className={`text-4xl ${Math.random() < 0.5 ? 'font-space-grotesk font-medium' : 'font-eb-garamond font-normal'} mb-2 hover:underline hover:decoration-[#3E32BA] dark:hover:decoration-[#3E32BA]`}>
              {article.title}
            </h2>
          </a>
          <p className="text-neutral-600 dark:text-neutral-400">
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
          <Link href={articleLink}>
            <h2 className={`text-4xl ${Math.random() < 0.5 ? 'font-space-grotesk font-medium' : 'font-eb-garamond font-normal'} mb-2 hover:underline hover:decoration-[#3E32BA] dark:hover:decoration-[#3E32BA]`}>
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
