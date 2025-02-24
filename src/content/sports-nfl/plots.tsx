import type { ArticlePlots } from "@/types";

export const articlePlots: ArticlePlots = {
  plots: [
    {
      id: "sports-nfl-featured-table",
      type: "table",
      data: [
        { QB_A: "68.2%", Variable: "Comp %", QB_B: "62.5%" },
        { QB_A: "485", Variable: "Yards", QB_B: "531" },
        { QB_A: "7.3", Variable: "YPA", QB_B: "6.6" },
        { QB_A: "5", Variable: "TDs", QB_B: "4" },
        { QB_A: "7.6%", Variable: "TD %", QB_B: "5.0%" },
      ],
      config: {
        xAxis: "QB_A",
        yAxis: "QB_B",
        title: "Blind QB Comparison"
      }
    }
  ]
}; 