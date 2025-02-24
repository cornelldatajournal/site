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
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey={config.xAxis}
                        label={{ value: config.xAxis, position: 'bottom' }}
                    />
                    <YAxis
                        label={{ value: config.yAxis, angle: -90, position: 'left' }}
                    />
                    <Tooltip />
                    <Legend />
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