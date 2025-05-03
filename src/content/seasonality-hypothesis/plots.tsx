import type { ArticlePlots } from "@/types";
import Seasonality from "./data.json";

export const articlePlots: ArticlePlots = {
  plots: [
    {
      id: "excess-returns-bar",
      type: "bar",
      data: Seasonality.excess_returns,
      config: {
        xAxis: "Cap_Size",
        yAxis: "Excess_Return_(%)",
        title: "Excess Returns by Cap Size",
        xLabelUp: true,
        yAxisMin: 0,
        yAxisMax: 0.0175
      }
    },
    {
      id: "returns-comparison-plot",
      type: "box",
      data: Seasonality.dist_returns,
      config: {
        xAxis: "Month",
        yAxis: "%_Returns",
        title: "Distribution of Returns",
        yAxisMin: -0.02,
        yAxisMax: 0.06
      }
    },
    {
      id: "mean-returns-comparison-plot",
      type: "bar",
      data: Seasonality.mean_returns_comparison,
      config: {
        xAxis: "Month",
        yAxis: "%_Returns",
        title: "Mean Returns Comparison",
        xLabelUp: false,
        yAxisMin: 0.00,
        yAxisMax: 0.05
      }
    },
    {
      id: "seasonality-index-bar",
      type: "grouped-bar",
      data: Seasonality.seasonality_index,
      config: {
        xAxis: "Month",
        yAxis: "Monthly_Returns (Avg)",
        title: "Mean Returns Comparison",
        seriesKeys: ["SP500", "Dow_Jones", "NASDAQ", "Russell", "Consumer_Disc", "Tech_Sect"],
        seriesNames: ["S&P 500", "Dow Jones", "NASDAQ", "Russell", "Consumer Disc.", "Technology"], 
        xLabelUp: true,
        yAxisMin: -0.2,
        yAxisMax: 0.4
      }
    },
    {
      id: "seasonality-heatmap-1",
      type: "heatmap",
      data: Seasonality.seasonality_heat_1,
      config: {
        xAxis: "Month",
        yAxis: "Ticker_Names",
        title: "Heatmap for Technology",
        colorAxis: "value",
        xLabelUp: true,
        colorMin: 10,
        colorMax: 70
      }
    },
    {
      id: "seasonality-heatmap-2",
      type: "heatmap",
      data: Seasonality.seasonality_heat_2,
      config: {
        xAxis: "Month",
        yAxis: "Ticker_Names",
        title: "Heatmap for Airline",
        colorAxis: "value",
        xLabelUp: true,
        colorMin: 10,
        colorMax: 70
      }
    },
    {
      id: "seasonality-heatmap-3",
      type: "heatmap",
      data: Seasonality.seasonality_heat_3,
      config: {
        xAxis: "Month",
        yAxis: "Ticker_Names",
        title: "Heatmap for Entertainment",
        colorAxis: "value",
        xLabelUp: true,
        colorMin: 10,
        colorMax: 70
      }
    },
    {
      id: "seasonality-heatmap-4",
      type: "heatmap",
      data: Seasonality.seasonality_heat_4,
      config: {
        xAxis: "Month",
        yAxis: "Industry_Names",
        title: "Heatmap for Industry Correlation",
        colorAxis: "value",
        xLabelUp: true,
        colorMin: 10,
        colorMax: 70
      }
    }
  ]
}