import type { ArticlePlots } from "@/types";
import Patients from "./data.json";

export const articlePlots: ArticlePlots = {
  plots: [
    {
      id: "patients-table",
      type: "table",
      data: Patients.patients,
      config: {
        xAxis: "Patients",
        yAxis: "Attributes",
        title: "Patient Attributes"
      }
    },
    {
      id: "patients-bar-1",
      type: "bar",
      data: Patients.readmission,
      config: {
        xAxis: "Race",
        yAxis: "Percentage_Readmitted",
        title: "Race vs Readmitted",
        yAxisMin: 0,
        yAxisMax: 1
      }
    },
    {
        id: "patients-bar-2",
        type: "bar",
        data: Patients.disposition,
        config: {
          xAxis: "Discharge_Disposition_ID",
          yAxis: "Percentage_Readmitted",
          title: "Discharge Disposition ID vs Readmitted",
          yAxisMin: 0,
          yAxisMax: 1
        }
    },
    {
        id: "roc-curve",
        type: "line",
        data: Patients.roc,
        config: {
          xAxis: "False_Positive_Rate",
          yAxis: "True_Positive_Rate",
          title: "ROC Curve",
          xAxisMin: 0,
          xAxisMax: 1,
          yAxisMin: 0,
          yAxisMax: 1.2
        }
    }
  ]
};