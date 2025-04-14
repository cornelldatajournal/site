import type { ArticlePlots } from "@/types";
import Crowd from "./data.json";

export const articlePlots: ArticlePlots = {
    plots: [
        {
            id: "crowd-bar-1",
            type: "bar",
            data: Crowd.majors,
            config: {
              xAxis: "Major",
              yAxis: "Frequency",
              title: "Frequency of Top 10 Majors",
              xLabelUp: true,
              yAxisMin: 0,
              yAxisMax: 15
            }
        },
        {
            id: "crowd-bar-2",
            type: "bar",
            data: Crowd.colleges,
            config: {
              xAxis: "College",
              yAxis: "Frequency",
              title: "Responses by College",
              xLabelUp: true,
              yAxisMin: 0,
              yAxisMax: 35
            }
        },
        {
            id: "crowd-bar-3",
            type: "bar",
            data: Crowd.years,
            config: {
              xAxis: "Graduation Year",
              yAxis: "Frequency",
              title: "Responses by Graduation Year"
            }
        },
        {
            id: "crowd-image-1",
            type: "button-image",
            data: Crowd.social,
            config: {
              xAxis: "xAxis",
              yAxis: "yAxis",
              title: "Heat Map of Self-Reported Top Socialization Spots",
              imagePath: "public/images/crowdflow-social.png",
            }
        },
        {
            id: "crowd-image-2",
            type: "button-image",
            data: Crowd.leisure,
            config: {
              xAxis: "xAxis",
              yAxis: "yAxis",
              title: "Heat Map of Self-Reported Top Leisure Spots",
              imagePath: "public/images/crowdflow-leisure.png",
            }
        },
        {
            id: "crowd-image-3",
            type: "button-image",
            data: Crowd.study,
            config: {
              xAxis: "xAxis",
              yAxis: "yAxis",
              title: "Heat Map of Self-Reported Top Studying Spots",
              imagePath: "public/images/crowdflow-study.png",
            }
        },
        {
            id: "crowd-image-4",
            type: "button-image",
            data: Crowd.eat,
            config: {
              xAxis: "xAxis",
              yAxis: "yAxis",
              title: "Heat Map of Self-Reported Top Dining Spots",
              imagePath: "public/images/crowdflow-eat.png",
            }
        },
    ]
}