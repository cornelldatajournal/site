import { getAllArticles } from '@/lib/articles';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
    const sections = ["environment", "culture", "politics", "sports"];
    return sections.map((section) => ({ slug: section }));
}

interface SectionPageProps {
    params: Promise<{ slug: string }>;
}

export default async function SectionPage({ params }: SectionPageProps) {
    const { slug } = await params;
    const sections = ["environment", "culture", "politics", "sports"];

    if (!sections.includes(slug)) {
        notFound();
    }

    const articles = await getAllArticles();
    const filteredArticles = articles.filter(article => article.section.toLowerCase() === slug.toLowerCase());

    return (
        <div className="container max-w-8xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-12">
                <h1 className="text-4xl font-eb-garamond capitalize">{slug}</h1>
            </div>

            <div className="space-y-6">
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article) => {
                        const articleLink = article.external_link || `/articles/${article.slug}`;

                        return (
                            <div key={article.slug} className="border-b border-neutral-200 dark:border-neutral-800 pb-6">
                                {article.external_link ? (
                                    <a href={articleLink} target="_blank" rel="noopener noreferrer" className="group">
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
                                    </a>
                                ) : (
                                    <Link href={articleLink} className="group">
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
                                )}
                            </div>
                        );
                    })
                ) : (
                    <p className="mb-4 leading-relaxed">No articles found in this section.</p>
                )}
            </div>
        </div>
    );
}
