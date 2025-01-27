import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';
import { Article } from '@/types';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';

export default async function ArticleListPage() {
    const articles = await getAllArticles();

    return (
        <div className="container max-w-8xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-12">
                <h1 className="text-4xl font-eb-garamond">The <i>Archives</i></h1>
            </div>

            <div className="space-y-6">
                {articles.map((article) => (
                    <div
                        key={article.slug}
                        className="border-b border-neutral-200 dark:border-neutral-800 pb-6"
                    >
                        <Link href={`/articles/${article.slug}`} className="group">
                            <div className="flex justify-between items-start gap-8">
                                <div>
                                    <h3 className="text-xl font-space-mono mb-2 hover:italic">
                                        {article.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm text-neutral-500 font-helvetica">
                                        <span>By {article.author.join(', ')}</span>
                                    </div>
                                </div>
                                <div className="text-sm text-neutral-500 font-space-grotesk">
                                    {article.section}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

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