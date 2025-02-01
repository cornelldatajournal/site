import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';

export default async function ArticleListPage({ params }: { params: { section?: string } }) {
    const articles = await getAllArticles();
    const section = params.section || "all";

    // Filter articles based on section, unless viewing 'all' articles
    const filteredArticles = section === "all" 
        ? articles 
        : articles.filter(article => article.section.toLowerCase() === section.toLowerCase());

    return (
        <div className="container max-w-8xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-12">
                <h1 className="text-4xl font-eb-garamond">The <i>Archives</i> {section !== "all" && ` - ${section}`}</h1>
            </div>

            <div className="space-y-6">
                {filteredArticles.map((article) => {
                    const articleLink = article.external_link || `/articles/${article.slug}`;

                    return (
                        <div
                            key={article.slug}
                            className="border-b border-neutral-200 dark:border-neutral-800 pb-6"
                        >
                            <Link
                                href={articleLink}
                                target={article.external_link ? "_blank" : undefined}
                                rel={article.external_link ? "noopener noreferrer" : undefined}
                                className="group"
                            >
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
                    );
                })}
            </div>

            {filteredArticles.length === 0 && (
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
