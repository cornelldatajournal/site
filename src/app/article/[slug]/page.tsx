import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { getArticleBySlug } from '@/lib/articles';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { PlotLoader } from '@/components/plots/PlotLoader';
import { ArticlePlotsProvider } from '@/contexts/ArticlePlotsContext';
import { notFound } from 'next/navigation';
import { generateStaticParams } from '@/lib/articles';
import remarkGfm from 'remark-gfm';

// Custom plugin to remove footnote definitions
function remarkRemoveFootnotes() {
    return (tree: any) => {
        const footnoteDefinitions = tree.children.filter(
            (node: any) => node.type === 'footnoteDefinition'
        );
        tree.children = tree.children.filter(
            (node: any) => node.type !== 'footnoteDefinition'
        );
        return tree;
    };
}

interface ArticlePageProps {
    params: Promise<{ slug: string }>;
}

// Custom MDX components
const components = {
    PlotLoader,
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
};

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        notFound();
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
        <ArticlePlotsProvider plots={articlePlots}>
            <ArticleLayout article={article}>
                <div className="prose dark:prose-invert max-w-none">
                    <MDXRemote
                        source={article.content}
                        components={components}
                        options={{
                            mdxOptions: {
                                remarkPlugins: [
                                    remarkGfm,
                                    remarkRemoveFootnotes
                                ],
                            }
                        }}
                    />
                </div>
            </ArticleLayout>
        </ArticlePlotsProvider>
    );
}

// Generate static paths
export { generateStaticParams };