import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';
import { PlotData } from '@/types';

interface BarPlotProps {
    plotData: PlotData;
    className?: string;
}

export default function BarPlot({ plotData, className }: BarPlotProps) {
    const { data, config } = plotData;

    return (
        <div className={`w-full h-[400px] ${className}`}>
            {config.title && (
                <h2 className="text-lg font-semibold text-center mb-2">
                    {config.title}
                </h2>
            )}
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey={config.xAxis}
                        label={{ value: config.xAxis?.replace(/_/g, ' ') || '', position: 'bottom' }}
                        domain={config.xAxisMin !== undefined && config.xAxisMax !== undefined 
                            ? [config.xAxisMin, config.xAxisMax] 
                            : ['auto', 'auto']}
                    />
                    <YAxis
                        label={{ value: config.yAxis?.replace(/_/g, ' ') || '', angle: -90, position: 'insideLeft', dx: -20, dy: 0, style: { textAnchor: 'middle' } }}
                        domain={config.yAxisMin !== undefined && config.yAxisMax !== undefined 
                            ? [config.yAxisMin, config.yAxisMax] 
                            : ['auto', 'auto']}
                    />
                    <Tooltip 
                        content={({ payload }) => {
                            if (!payload || payload.length === 0) return null;
                            const dataPoint = payload[0];
                    
                            return (
                                <div className="p-2 bg-white border rounded shadow-md">
                                    <p className="text-sm font-semibold">{config.xAxis.replace(/_/g, ' ')}: {dataPoint.payload[config.xAxis]}</p>
                                    <p className="text-sm">{config.yAxis.replace(/_/g, ' ')}: {dataPoint.value}</p>
                                </div>
                            );
                        }}
                    />
                    <Bar
                        name={config.title}
                        dataKey={config.yAxis || 'value'}
                        fill="#8884d8"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
