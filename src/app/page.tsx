import Link from 'next/link';
import Image from 'next/image';
import { getAllArticles } from '@/lib/articles';
import { BaseArticle } from '@/types/index';
import { PlotLoader } from '@/components/plots/PlotLoader';
import { ArticlePlotsProvider } from '@/contexts/ArticlePlotsContext';

export default async function HomePage() {
  const articles = await getAllArticles();
  const [latestArticle, ...otherArticles] = articles;

  // Take only the next 8 articles, after the main one (3 left, 2 center, 3 right), center most is latest
  // Above and below can be changed as need be
  const displayedArticles = otherArticles.slice(0, 8);
  // console.log(displayedArticles)
  
  const leftColumnArticles = displayedArticles.slice(0, 3);
  const centerColumnArticles = displayedArticles.slice(3, 5);
  const rightColumnArticles = displayedArticles.slice(5, 8);

  const renderArticle = async (article: BaseArticle, isFeatured = false) => {
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
          <div className="text-sm text-black dark:text-neutral-400 mb-2 mt-3 font-space-mono uppercase font-bold">
            {article.section}
          </div>
          <Link href={articleLink}>
            <h2 className={`${isFeatured ? 'text-[38px]' : 'text-2xl'} ${Math.random() < 0.5 ? 'font-space-grotesk font-medium' : 'font-eb-garamond font-normal'} mb-2 hover:underline hover:decoration-[#3E32BA] dark:hover:underline dark:hover:decoration-[#3E32BA]`}>
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
      return (
        <div className="mb-4">
          <div className="text-sm text-black dark:text-neutral-400 mb-2 mt-3 font-space-mono uppercase font-bold">
            {article.section}
          </div>
          <Link href={articleLink}>
            <h2 className={`${isFeatured ? 'text-[38px]' : 'text-2xl'} ${Math.random() < 0.5 ? 'font-space-grotesk font-medium' : 'font-eb-garamond font-normal'} mb-2 hover:underline hover:decoration-[#3E32BA] dark:hover:underline dark:hover:decoration-[#3E32BA]`}>
              &ldquo;{article.quote}&rdquo;
            </h2>
          </Link>
          <p className="text-neutral-600 dark:text-neutral-400 font-helvetica">
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
      } catch {
        console.debug(`No plots found for ${article.slug}`);
      }

      return (
        <div className="mb-4">
          <div className="mb-4">
            <ArticlePlotsProvider plots={articlePlots}>
              <PlotLoader plotId={article.featured_plot} />
            </ArticlePlotsProvider>
          </div>
          <div className="text-sm text-black dark:text-neutral-400 mb-2 font-space-mono uppercase font-bold">
            {article.section}
          </div>
          <Link href={articleLink}>
            <h2 className={`${isFeatured ? 'text-[38px]' : 'text-2xl'} ${Math.random() < 0.5 ? 'font-space-grotesk font-medium' : 'font-eb-garamond font-normal'} mb-2 hover:underline hover:decoration-[#3E32BA] dark:hover:underline dark:hover:decoration-[#3E32BA]`}>
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
            <div className="text-sm text-black dark:text-neutral-400 mb-2 font-space-mono uppercase font-bold">
              {article.section}
            </div>
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
          <div className="text-sm text-black dark:text-neutral-400 mb-2 font-space-mono uppercase font-bold">
            {article.section}
          </div>
          <Link href={articleLink}>
            <h2 className={`${isFeatured ? 'text-[38px]' : 'text-2xl'} ${Math.random() < 0.5 ? 'font-space-grotesk font-medium' : 'font-eb-garamond font-normal'} mb-2 hover:underline hover:decoration-[#3E32BA] dark:hover:decoration-[#3E32BA]`}>
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
    <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden">
      {/* Main Content */}
      <main className="container max-w-8xl mx-auto px-4 py-8 overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr),minmax(0,1.5fr),minmax(0,1fr)] gap-8 max-w-full">
          {/* Left Column */}
          <div className="space-y-8 max-w-full">
            {leftColumnArticles.map(article => (
              <div key={article.slug} className="border-b pb-8 border-neutral-200 dark:border-neutral-800">
                {renderArticle(article, false)}
              </div>
            ))}
          </div>

          {/* Center Column - Featured Article + Additional Articles */}
          <div className="border-l border-r px-8 border-neutral-200 dark:border-neutral-800">
            {/* Featured Article */}
            {latestArticle && (
              <div className="text-center mb-8 border-b pb-8 border-neutral-200 dark:border-neutral-800">
                {renderArticle(latestArticle, true)}
              </div>
            )}
            {/* Additional Center Column Articles */}
            {centerColumnArticles.map(article => (
              <div key={article.slug} className="border-b pb-8 mt-8 border-neutral-200 dark:border-neutral-800">
                {renderArticle(article, false)}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8 max-w-full">
            {rightColumnArticles.map(article => (
              <div key={article.slug} className="border-b pb-8 border-neutral-200 dark:border-neutral-800">
                {renderArticle(article, false)}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}