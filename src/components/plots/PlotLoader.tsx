"use client";
import dynamic from 'next/dynamic';
import { PlotData } from '@/types';
import { usePlotData } from '@/contexts/ArticlePlotsContext';

const LinePlot = dynamic(() => import('./LinePlot'), {
    loading: () => <div>Loading plot...</div>
});

const ScatterPlot = dynamic(() => import('./ScatterPlot'), {
    loading: () => <div>Loading plot...</div>
});

interface PlotLoaderProps {
    plotId: string;
    className?: string;
}

type PlotType = 'line' | 'scatter';

const plotComponents = {
    line: LinePlot,
    scatter: ScatterPlot,
} as const;

export function PlotLoader({ plotId, className }: PlotLoaderProps) {
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

    return <PlotComponent plotData={plotData} className={className} />;
} 