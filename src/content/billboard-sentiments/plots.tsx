import type { ArticlePlots } from "@/types";

export const articlePlots: ArticlePlots = {
  plots: [
    {
      id: "scatter-plot-1",
      type: "scatter",
      data: [
        { x: 10, y: 20, category: "A" },
        { x: 15, y: 25, category: "B" },
        { x: 20, y: 30, category: "A" },
        { x: 25, y: 35, category: "B" },
        { x: 30, y: 40, category: "A" }
      ],
      config: {
        xAxis: "x",
        yAxis: "y",
        title: "Basic Scatter Plot",
        colorKey: "category"
      }
    },
    {
      id: "line-plot-1",
      type: "line",
      data: [
        { month: "Jan", value: 100 },
        { month: "Feb", value: 120 },
        { month: "Mar", value: 115 },
        { month: "Apr", value: 130 },
        { month: "May", value: 145 }
      ],
      config: {
        xAxis: "month",
        yAxis: "value",
        title: "Monthly Trend"
      }
    }
  ]
}; 