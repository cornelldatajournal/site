import type { ArticlePlots } from "@/types";

export const articlePlots: ArticlePlots = {
  plots: [
    {
      id: "stacked-bar-plot-1",
      type: "stacked-bar",
      data: [
        { Year: "2018", Unique_Vessels: 1.88, Number_Of_Detections: 21.35, category: "A" },
        { Year: "2019", Unique_Vessels: 1.99, Number_Of_Detections: 1.29, category: "B" },
        { Year: "2020", Unique_Vessels: 1.88, Number_Of_Detections: 61.95, category: "A" },
        { Year: "2021", Unique_Vessels: 1.17, Number_Of_Detections: 16.54, category: "B" },
        { Year: "2022", Unique_Vessels: 2.82, Number_Of_Detections: 31.91, category: "A" }
      ],
      config: {
        xAxis: "Year",
        yAxis: "Count",
        title: "Stacked Bar Plot",
        colorKey: "category"
      }
    }
  ]
}; 