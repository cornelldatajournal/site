import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';
import { Article } from '@/types';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';

export default async function ArticleListPage() {
    const articles = await getAllArticles();

    // Group articles by section
    const articlesBySection = articles.reduce((acc, article) => {
        const section = article.section || 'Uncategorized';
        if (!acc[section]) {
            acc[section] = [];
        }
        acc[section].push(article);
        return acc;
    }, {} as Record<string, Article[]>);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold font-geist-sans">Articles</h1>
                <Button asChild variant="outline">
                    <Link href="/">
                        Back to Home
                    </Link>
                </Button>
            </div>

            {Object.entries(articlesBySection).map(([section, sectionArticles]) => (
                <section key={section} className="mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                            {section}
                        </h2>
                        <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {sectionArticles.map((article) => (
                            <Link
                                key={article.slug}
                                href={`/article/${article.slug}`}
                                className="group relative"
                            >
                                <article className="h-full p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                                    {/* Section Tag */}
                                    <div className="text-md text-neutral-600 dark:text-neutral-400 mb-2 font-space-mono uppercase font-bold">
                                    {article.section}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
                                        {article.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                                        {article.description}
                                    </p>

                                    {/* Metadata */}
                                    <div className="flex flex-col gap-2">
                                        {/* Authors */}
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="text-neutral-500">By</span>
                                            <div className="flex gap-1">
                                                {article.author.map((author, idx) => (
                                                    <span key={author} className="font-medium">
                                                        {author}
                                                        {idx < article.author.length - 1 && ", "}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Date and Tags */}
                                        <div className="flex items-center gap-4 text-sm text-neutral-500">
                                            <time dateTime={article.publishedDate}>
                                                {formatDate(article.publishedDate)}
                                            </time>
                                            <div className="flex gap-2 flex-wrap">
                                                {article.tags.map(tag => (
                                                    <span
                                                        key={tag}
                                                        className="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </section>
            ))}

            {/* Empty State */}
            {articles.length === 0 && (
                <div className="text-center py-12">
                    <h3 className="text-xl font-medium text-neutral-600 dark:text-neutral-400">
                        No articles found
                    </h3>
                    <p className="text-neutral-500 mt-2">
                        Check back later for new content
                    </p>
                </div>
            )}
        </div>
    );
}