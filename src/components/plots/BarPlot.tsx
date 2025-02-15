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
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey={config.xAxis}
                        label={{ value: config.xAxis?.replace(/_/g, ' ') || '', position: 'bottom' }}
                    />
                    <YAxis
                        label={{ value: config.yAxis?.replace(/_/g, ' ') || '', angle: -90, position: 'insideLeft', dx: -20, dy: 0, style: { textAnchor: 'middle' } }}
                    />
                    <Tooltip />
                    <Legend 
                        verticalAlign="top"
                        formatter={(value) => (typeof value === 'string' ? value.replace(/_/g, ' ') : value)}
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
