import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';
import { PlotData } from '@/types';

interface StackedBarPlotProps {
    plotData: PlotData;
    className?: string;
}

export default function StackedBarPlot({ plotData, className }: StackedBarPlotProps) {
    const { data, config } = plotData;

    // Default colors for different categories
    const defaultColors = ['#add8e6', '#9370db'];

    // Get data keys that should be stacked (excluding xAxis and colorKey)
    const stackKeys = Object.keys(data[0] || {}).filter(
        key => key !== config.xAxis && key !== config.colorKey
    );

    return (
        <div className={`w-full h-[400px] ${className}`}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                    data={data}
                    margin={{ top: 40, right: 30, left: 20, bottom: 20 }}
                >
                    <XAxis
                        dataKey={config.xAxis}
                        label={{ value: config.xAxis, position: 'bottom' }}
                        axisLine={{ stroke: '#E5E7EB' }}
                        tickLine={{ stroke: '#E5E7EB' }}
                    />
                    <YAxis
                        label={{ value: config.yAxis, angle: -90, position: 'left' }}
                        axisLine={{ stroke: '#E5E7EB' }}
                        tickLine={{ stroke: '#E5E7EB' }}
                    />
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: 'white',
                            border: '1px solid #E5E7EB'
                        }}
                    />
                    <Legend 
                        layout="horizontal"
                        verticalAlign="top"
                        align="center"
                        formatter={(value) => value.replace('_', ' ')}
                        wrapperStyle={{
                            paddingTop: 20,
                            backgroundColor: 'transparent',
                        }}
                    />
                    {stackKeys.map((key, index) => (
                        <Bar
                            key={key}
                            dataKey={key}
                            name={key.replace(/_/g, ' ')}
                            stackId="a"
                            fill={defaultColors[index % defaultColors.length]}
                        />
                    ))}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
