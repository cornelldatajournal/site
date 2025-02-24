export type ArticleType = 'default' | 'image' | 'feature' | 'quote' | 'multimedia';

export type SectionType = 'Environment' | 'Culture' | 'Politics' | 'Campus' | 'People';

export interface BaseArticle {
    title: string;
    description: string;
    content: string;
    author: string[];
    publishedDate: string;
    section: SectionType;
    slug: string;
    type: ArticleType;
    image_path: string;
    caption: string;
    quote: string;
    attribution: string;
    featured_plot: string;
    external_link: string;
    drop_cap: boolean;
    layout?: 'default' | 'image' | 'quote' | 'plot' | 'link' | 'custom';
}

/* export interface ImageData extends BaseArticle {
    layout: 'image';
    path: string;
    caption?: string;
} */

export interface QuoteData extends BaseArticle {
    type: 'quote';
    line: string;
    writer?: string;
}

export interface DefaultArticle extends BaseArticle {
    type: 'default';
    headerImage?: ImageData;
}

export interface MultimediaArticle extends BaseArticle {
    type: 'multimedia';
    headerImage: ImageData;
    line?: QuoteData;
    gallery?: ImageData[];
}

export type PlotType = 'line' | 'scatter' | 'bar' | 'pie' | 'stacked-bar';

export interface PlotData {
    id: string;
    type: PlotType;
    data: Record<string, string | number | undefined>[];
    config: {
        xAxis: string;
        yAxis: string;
        title?: string;
        colorKey?: string;
        legend?: string;
        [key: string]: any;
    };
}

export interface ArticlePlots {
    plots: PlotData[];
}

export interface InteractiveArticle extends BaseArticle {
    type: 'feature';
    headerImage?: ImageData;
    line?: QuoteData;
    plots?: ArticlePlots;
}

export type Article = DefaultArticle | MultimediaArticle | InteractiveArticle;