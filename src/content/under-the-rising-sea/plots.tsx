import type { ArticlePlots } from "@/types";

export const articlePlots: ArticlePlots = {
  plots: [
    {
      id: "bar-plot-1",
      type: "bar",
      data: [
        { year: "2018", unique_vessels: 1.877256317689529, number_of_detections: 21.35379061371841, category: "A" },
        { year: "2019", unique_vessels: 1.9945848375451263, number_of_detections: 1.2906137184115494, category: "B" },
        { year: "2020", unique_vessels: 1.877256317689529, number_of_detections: 61.94945848375451, category: "A" },
        { year: "2021", unique_vessels: 1.1732851985559591, number_of_detections: 16.54332129963899, category: "B" },
        { year: "2022", unique_vessels: 2.8158844765342934, number_of_detections: 31.91335740072202, category: "A" }
      ],
      config: {
        xAxis: "x",
        yAxis: "y",
        title: "Basic Bar Plot",
        colorKey: "category"
      }
    }
  ]
}; 