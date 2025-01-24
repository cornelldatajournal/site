import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';
import { PlotData } from '@/types';

interface LinePlotProps {
    plotData: PlotData;
    className?: string;
}

export default function LinePlot({ plotData, className }: LinePlotProps) {
    const { data, config } = plotData;

    return (
        <div className={`w-full h-[400px] ${className}`}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
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
                    <Line
                        type="monotone"
                        dataKey={config.yAxis}
                        stroke="#8884d8"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
} 