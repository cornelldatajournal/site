import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { PlotLoader } from '@/components/plots/PlotLoader';
import { ImageLoader } from '@/components/images/ImageLoader';
import { ArticlePlotsProvider } from '@/contexts/ArticlePlotsContext';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

export async function generateStaticParams() {
    const articles = await getAllArticles();
    const sections = ["environment", "culture", "politics", "campus", "people"];

    const articleParams = articles.map((article) => ({ slug: article.slug }));
    const sectionParams = sections.map((section) => ({ slug: section }));

    return [...articleParams, ...sectionParams];
}

// Custom plugin to remove footnote definitions
function remarkProcessFootnotes() {
    return (tree: any) => {
        // Keep footnotes but ensure they're properly formatted
        const footnoteDefinitions = tree.children.filter(
            (node: any) => node.type === 'footnoteDefinition'
        );

        // Move all footnote definitions to the end of the content
        tree.children = [
            ...tree.children.filter((node: any) => node.type !== 'footnoteDefinition'),
            ...footnoteDefinitions
        ];

        return tree;
    };
}

interface ArticlePageProps {
    params: Promise<{ slug: string }>;
}

// Custom MDX components
const components = {
    PlotLoader,
    ImageLoader,
    // Add proper heading styles
    h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
    h2: (props: any) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
    h3: (props: any) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
    // Style paragraphs and lists
    p: (props: any) => <p className="mb-4 leading-relaxed" {...props} />,
    ul: (props: any) => <ul className="list-disc list-inside mb-4 ml-4" {...props} />,
    ol: (props: any) => <ol className="list-decimal list-inside mb-4 ml-4" {...props} />,
    // Style links
    a: (props: any) => (
        <a
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
            {...props}
        />
    ),
    // Style footnotes
    sup: (props: any) => (
        <sup className="text-sm text-blue-600 dark:text-blue-400" {...props} />
    ),
    // Hide footnote section
    section: (props: any) => {
        // Check if this is the footnotes section
        const isFootnotes = props.className?.includes('footnotes');
        return (
            <section
                {...props}
                className={`${props.className || ''} ${isFootnotes ? 'hidden' : ''
                    }`}
            />
        );
    },
};

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        // Check if the slug is a section
        const sections = ["environment", "culture", "politics", "campus", "people"];
        if (sections.includes(slug)) {
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
        } else {
            notFound();
        }
    }

    // Default empty plots if no plots file exists
    const articlePlots = { plots: [] };

    try {
        // Attempt to load plots if they exist
        const plotsModule = await import(`@/content/${article.slug}/plots`).catch(() => null);
        if (plotsModule?.articlePlots) {
            Object.assign(articlePlots, plotsModule.articlePlots);
        }
    } catch (error) {
        // Silently continue with empty plots
        console.debug(`No plots found for ${article.slug}`);
    }

    return (
        <div className="max-w-1xl mx-auto">
            <ArticlePlotsProvider plots={articlePlots}>
                <ArticleLayout article={article}>
                    <div className="prose dark:prose-invert">
                        <MDXRemote
                            source={article.content}
                            components={components}
                            options={{
                                mdxOptions: {
                                    remarkPlugins: [
                                        remarkGfm,
                                        remarkProcessFootnotes
                                    ],
                                }
                            }}
                        />
                    </div>
                </ArticleLayout>
            </ArticlePlotsProvider>
        </div>
    );
}