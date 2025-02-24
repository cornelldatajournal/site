import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { PlotLoader } from '@/components/plots/PlotLoader';
import { ImageLoader } from '@/components/images/ImageLoader';
import { ArticlePlotsProvider } from '@/contexts/ArticlePlotsContext';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
    const articles = await getAllArticles();
    return articles.map((article) => ({ slug: article.slug }));
}

function remarkProcessFootnotes() {
    return (tree: any) => {
        const footnoteDefinitions = tree.children.filter(
            (node: any) => node.type === 'footnoteDefinition'
        );

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

const createComponents = (article: any) => {
    let hasProcessedFirstParagraph = false;

    return {
        PlotLoader,
        ImageLoader,
        h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
        h2: (props: any) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
        h3: (props: any) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
        p: (props: any) => {
            // Check if this is the first real paragraph and drop_cap is enabled
            const isFirstParagraph = !hasProcessedFirstParagraph && 
                props.children && 
                typeof props.children === 'string' && 
                !props.className?.includes('footnotes') && 
                article.drop_cap;
            
            if (isFirstParagraph) {
                hasProcessedFirstParagraph = true;
                const text = props.children;
                const firstLetter = text.charAt(0);
                const restOfText = text.slice(1);
                
                return (
                    <p className="mb-4 leading-relaxed">
                        <span className="float-left text-7xl font-serif leading-none mr-2 mt-1 font-eb-garamond">
                            {firstLetter}
                        </span>
                        {restOfText}
                    </p>
                );
            }
            
            return <p className="mb-4 leading-relaxed" {...props} />;
        },
        ul: (props: any) => <ul className="list-disc list-inside mb-4 ml-4" {...props} />,
        ol: (props: any) => <ol className="list-decimal list-inside mb-4 ml-4" {...props} />,
        a: (props: any) => (
            <a
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                {...props}
            />
        ),
        sup: (props: any) => (
            <sup className="text-sm text-blue-600 dark:text-blue-400" {...props} />
        ),
        section: (props: any) => {
            const isFootnotes = props.className?.includes('footnotes');
            return (
                <section
                    {...props}
                    className={`${props.className || ''} ${isFootnotes ? 'hidden' : ''}`}
                />
            );
        },
    };
};

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    const articlePlots = { plots: [] };

    try {
        const plotsModule = await import(`@/content/${article.slug}/plots`).catch(() => null);
        if (plotsModule?.articlePlots) {
            Object.assign(articlePlots, plotsModule.articlePlots);
        }
    } catch (error) {
        console.debug(`No plots found for ${article.slug}`);
    }

    const components = createComponents(article);

    return (
        <div className="max-w-1xl mx-auto">
            <ArticlePlotsProvider plots={articlePlots}>
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
            </ArticlePlotsProvider>
        </div>
    );
}