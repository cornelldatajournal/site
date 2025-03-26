"use client";
import dynamic from 'next/dynamic';
import { usePlotData } from '@/contexts/ArticlePlotsContext';

const LinePlot = dynamic(() => import('./LinePlot'), {
    loading: () => <div>Loading plot...</div>
});

const ScatterPlot = dynamic(() => import('./ScatterPlot'), {
    loading: () => <div>Loading plot...</div>
});

const BarPlot = dynamic(() => import('./BarPlot'), {
    loading: () => <div>Loading plot...</div>
});

const GroupedBarPlot = dynamic(() => import('./GroupedBarPlot'), {
    loading: () => <div>Loading plot...</div>
});

const StackedBarPlot = dynamic(() => import('./StackedBarPlot'), {
    loading: () => <div>Loading plot...</div>
});

const StackedLinePlot = dynamic(() => import('./StackedLinePlot'), {
    loading: () => <div>Loading plot...</div>
});

const Table = dynamic(() => import('./Table'), {
    loading: () => <div>Loading table...</div>
});

const Box = dynamic(() => import('./BoxPlot'), {
    loading: () => <div>Loading plot...</div>
});

const HeatMap = dynamic(() => import('./HeatMap'), {
    loading: () => <div>Loading plot...</div>
});

interface PlotLoaderProps {
    plotId: string;
    className?: string;
    colors?: string[];
    columns?: string[];
    referenceX?: number | string;
}

type PlotType = 'line' | 'scatter' | 'bar' | 'grouped-bar' | 'stacked-bar' | 'stacked-line' | 'table' | 'box' | 'heatmap';

const plotComponents = {
    line: LinePlot,
    scatter: ScatterPlot,
    bar: BarPlot,
    'grouped-bar': GroupedBarPlot,
    'stacked-bar': StackedBarPlot,
    'stacked-line': StackedLinePlot,
    table: Table,
    box: Box,
    heatmap: HeatMap
} as const;

export function PlotLoader({ plotId, className, colors, columns, referenceX }: PlotLoaderProps) {
    const plotData = usePlotData(plotId);

    if (!plotData) {
        return (
            <div className="p-4 border border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-900/50 rounded-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    Plot not found: {plotId}
                </p>
            </div>
        );
    }

    const PlotComponent = plotComponents[plotData.type as PlotType];

    if (!PlotComponent) {
        return (
            <div className="p-4 border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-900/50 rounded-lg">
                <p className="text-sm text-red-800 dark:text-red-200">
                    Unsupported plot type: {plotData.type}
                </p>
            </div>
        );
    }

    return <PlotComponent plotData={plotData} className={className} colors={colors} columns={columns} referenceX={referenceX} />;
}
