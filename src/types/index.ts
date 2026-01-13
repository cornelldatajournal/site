export type ArticleType = 'default' | 'image' | 'feature' | 'quote' | 'multimedia';
export type SectionType = 'Environment' | 'Culture' | 'Politics' | 'Finance' | 'Health';

export interface BaseArticle {
    title: string;
    description: string;
    content: string;
    author: string[];
    editors: string[];
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
    order: number; // if order is -1 then the article is hidden from 'articles' tab, but still accessible with proper link (i.e. unlisted)
    thumbnailCredit: string;//for image caption on main page
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

export type PlotType = 'line' | 'scatter' | 'bar' | 'grouped-bar' | 'pie' | 'stacked-bar' | 'stacked-line' | 'table' | 'box' | 'heatmap' | 'button-image';

export interface PlotData {
    id: string;
    type: PlotType;
    data: any[];
    config: {
        xAxis: string;
        yAxis: string;
        title?: string;
        colorKey?: string;
        xAxisMin?: number;
        xAxisMax?: number;
        yAxisMin?: number;
        yAxisMax?: number;
        xLabelUp?: boolean;
        seriesKeys?: string[];
        seriesNames?: string[];
        colors?: string[];
        colorAxis?: string;
        colorMin?: number;
        colorMax?: number;
        imagePath?: string;
        [key: string]: string | number | boolean | string[] | undefined;
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