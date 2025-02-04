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

interface StackedLinePlotProps {
    plotData: PlotData;
    className?: string;
    colors?: string[]; // New prop for custom colors
}

export default function StackedLinePlot({ plotData, className, colors }: StackedLinePlotProps) {
    const { data, config } = plotData;

    // Default colors for different categories
    const defaultColors = ['#add8e6', '#9370db'];

    // Use provided colors if available, otherwise use default colors
    const lineColors = colors || defaultColors;

    // Get data keys that should be stacked (excluding xAxis)
    const stackKeys = Object.keys(data[0] || {}).filter(
        key => key !== config.xAxis
    );

    // Function to replace underscores with spaces
    // const formatLabel = (label: string) => label.replace(/_/g, ' ');

    return (
        <div className={`w-full h-[400px] ${className}`}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey={config.xAxis}
                        label={{ value: config.xAxis?.replace('_', ' '), position: 'bottom' }}
                        axisLine={{ stroke: '#E5E7EB' }}
                        tickLine={{ stroke: '#E5E7EB' }}
                    />
                    <YAxis
                        label={{ value: config.yAxis?.replace('_', ' '), angle: -90, position: 'left' }}
                        axisLine={{ stroke: '#E5E7EB' }}
                        tickLine={{ stroke: '#E5E7EB' }}
                    />
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: 'white',
                            border: '1px solid #E5E7EB'
                        }}
                        formatter={(value, name) => [
                            value, 
                            typeof name === 'string' ? name.replace('_', ' ') : name
                        ]}
                    />
                    <Legend 
                        layout="horizontal"
                        verticalAlign="top"
                        align="center"
                        formatter={(value) => value.replace('_', ' ')}
                        wrapperStyle={{
                            marginTop: -10, // Use negative margin to move the legend up
                            backgroundColor: 'transparent',
                        }}
                    />
                    {stackKeys.map((key, index) => (
                        <Line
                            key={key}
                            type="monotone"
                            dataKey={key}
                            name={key.replace('_', ' ')}
                            stroke={lineColors[index % lineColors.length]}
                            strokeWidth={2}
                            dot={{ r: 4 }}
                            activeDot={{ r: 8 }}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
