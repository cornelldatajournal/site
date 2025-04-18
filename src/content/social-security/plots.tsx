import type { ArticlePlots } from "@/types";

export const articlePlots: ArticlePlots = {
  plots: [
    {
      id: "social-security-table",
      type: "table",
      data: [
        { Category: "HOUSING", EPI_Estimates: "$1,030", Wes_Adjusted_Estimate: "$700", Reason_for_Adjustment: "VA rental assistance available to reduce the cost of rent." },
        { Category: "FOOD", EPI_Estimates: "$315", Wes_Adjusted_Estimate: "$116", Reason_for_Adjustment: "SNAP eligible. Adjustment reflects estimated monthly benefit of $199 for a household size of one." },
        { Category: "CHILD CARE", EPI_Estimates: "$0", Wes_Adjusted_Estimate: "$0", Reason_for_Adjustment: "No children." },
        { Category: "TRANSPORTATION", EPI_Estimates: "$1,003", Wes_Adjusted_Estimate: "$400", Reason_for_Adjustment: "Free public transit in Houston for veterans, coverage may be limited. Adjusted estimated costs reflect the cost of ride-sharing services." },
        { Category: "HEALTH CARE", EPI_Estimates: "$410", Wes_Adjusted_Estimate: "$100", Reason_for_Adjustment: "Healthcare costs reduced by robust VA healthcare coverage." },
        { Category: "OTHER NECESSITIES", EPI_Estimates: "$476", Wes_Adjusted_Estimate: "$476", Reason_for_Adjustment: "No adjustment." },
        { Category: "GUIDE DOG CARE", EPI_Estimates: "N/A", Wes_Adjusted_Estimate: "$220", Reason_for_Adjustment: "Estimated cost of food, veterinary care, insurance, and other dog-related expenses." },
        { Category: "DEBT PAYMENTS", EPI_Estimates: "N/A", Wes_Adjusted_Estimate: "$200", Reason_for_Adjustment: "Moderate debt payments for credit cards, loans, etc." },
        { Category: "TAXES", EPI_Estimates: "$503", Wes_Adjusted_Estimate: "$0", Reason_for_Adjustment: "No taxes due on VA disability compensation or SSDI." },
        { Category: "MONTLY TOTAL", EPI_Estimates: "$3,738", Wes_Adjusted_Estimate: "$2,212", Reason_for_Adjustment: "" },
      ],
      config: {
        xAxis: "Name",
        yAxis: "Houston Area Cost of Living",
        title: "Houston Area Cost of Living"
      }
    },
    {
        id: "social-security-income-density-line-plot",
        type: "line",
        data: [
          { Income: 0, Density: 3.56 },
          { Income: 7260, Density: 5.74 },
          { Income: 15683, Density: 7.66 },
          { Income: 26430, Density: 8.55 },
          { Income: 50000, Density: 7.10 },
          { Income: 79580, Density: 5.79 },
          { Income: 100000, Density: 4.24 },
          { Income: 102815, Density: 3.86 },
          { Income: 150000, Density: 1.93 },
          { Income: 200000, Density: 0.78 },
          { Income: 250000, Density: 0.61 },
          { Income: 300000, Density: 0.29 },
        ],
        config: {
          xAxis: "Income",
          yAxis: "Density",
          title: "Density vs. Income"
        }
      },
      {
        id: "social-security-income-density-line-plot-2",
        type: "line",
        data: [
          { Income: 0, Density: 0.75 },
          { Income: 13638, Density: 1.05 },
          { Income: 43527, Density: 0.8 },
          { Income: 50000, Density: 0.7 },
          { Income: 55134, Density: 0.6 },
          { Income: 72254, Density: 0.4 },
          { Income: 100000, Density: 0.27 },
          { Income: 128000, Density: 0.2 },
          { Income: 150000, Density: 0.16 },
          { Income: 200000, Density: 0.10 },
          { Income: 250000, Density: 0.09 },
          { Income: 300000, Density: 0.04 },
        ],
        config: {
          xAxis: "Income",
          yAxis: "Density",
          title: "Income vs. Density"
        }
      },
      {
        id: "average-birth-rate-line-plot",
        type: "line",
        data: [
          { "Year": 1940, "Average_Birth_Rate": 460.4 },
          { "Year": 1941, "Average_Birth_Rate": 479.8 },
          { "Year": 1942, "Average_Birth_Rate": 525.6 },
          { "Year": 1943, "Average_Birth_Rate": 543.8 },
          { "Year": 1944, "Average_Birth_Rate": 513.6 },
          { "Year": 1945, "Average_Birth_Rate": 498.3 },
          { "Year": 1946, "Average_Birth_Rate": 588.6 },
          { "Year": 1947, "Average_Birth_Rate": 654.7 },
          { "Year": 1948, "Average_Birth_Rate": 621.7 },
          { "Year": 1949, "Average_Birth_Rate": 622.1 },
          { "Year": 1950, "Average_Birth_Rate": 618.2 },
          { "Year": 1951, "Average_Birth_Rate": 653.9 },
          { "Year": 1952, "Average_Birth_Rate": 671.8 },
          { "Year": 1953, "Average_Birth_Rate": 684.7 },
          { "Year": 1954, "Average_Birth_Rate": 708.1 },
          { "Year": 1955, "Average_Birth_Rate": 715.7 },
          { "Year": 1956, "Average_Birth_Rate": 737.9 },
          { "Year": 1957, "Average_Birth_Rate": 753.5 },
          { "Year": 1958, "Average_Birth_Rate": 739.9 },
          { "Year": 1959, "Average_Birth_Rate": 734.0 },
          { "Year": 1960, "Average_Birth_Rate": 730.7 },
          { "Year": 1961, "Average_Birth_Rate": 724.2 },
          { "Year": 1962, "Average_Birth_Rate": 692.2 },
          { "Year": 1963, "Average_Birth_Rate": 663.9 },
          { "Year": 1964, "Average_Birth_Rate": 638.1 },
          { "Year": 1965, "Average_Birth_Rate": 582.4 },
          { "Year": 1966, "Average_Birth_Rate": 544.3 },
          { "Year": 1967, "Average_Birth_Rate": 511.7 },
          { "Year": 1968, "Average_Birth_Rate": 492.9 },
          { "Year": 1969, "Average_Birth_Rate": 491.1 },
          { "Year": 1970, "Average_Birth_Rate": 496.0 },
          { "Year": 1971, "Average_Birth_Rate": 453.3 },
          { "Year": 1972, "Average_Birth_Rate": 402.0 },
          { "Year": 1973, "Average_Birth_Rate": 375.8 },
          { "Year": 1974, "Average_Birth_Rate": 367.0 },
          { "Year": 1975, "Average_Birth_Rate": 354.8 },
          { "Year": 1976, "Average_Birth_Rate": 347.6 },
          { "Year": 1977, "Average_Birth_Rate": 357.9 },
          { "Year": 1978, "Average_Birth_Rate": 352.0 },
          { "Year": 1979, "Average_Birth_Rate": 361.6 },
          { "Year": 1980, "Average_Birth_Rate": 367.9 },
          { "Year": 1981, "Average_Birth_Rate": 362.4 },
          { "Year": 1982, "Average_Birth_Rate": 365.5 },
          { "Year": 1983, "Average_Birth_Rate": 359.8 },
          { "Year": 1984, "Average_Birth_Rate": 361.3 },
          { "Year": 1985, "Average_Birth_Rate": 368.8 },
          { "Year": 1986, "Average_Birth_Rate": 367.5 },
          { "Year": 1987, "Average_Birth_Rate": 374.4 },
          { "Year": 1988, "Average_Birth_Rate": 386.8 },
          { "Year": 1989, "Average_Birth_Rate": 402.8 },
          { "Year": 1990, "Average_Birth_Rate": 416.2 },
          { "Year": 1991, "Average_Birth_Rate": 412.5 },
          { "Year": 1992, "Average_Birth_Rate": 409.2 },
          { "Year": 1993, "Average_Birth_Rate": 403.9 },
          { "Year": 1994, "Average_Birth_Rate": 400.3 },
          { "Year": 1995, "Average_Birth_Rate": 395.6 },
          { "Year": 1996, "Average_Birth_Rate": 395.2 },
          { "Year": 1997, "Average_Birth_Rate": 394.2 },
          { "Year": 1998, "Average_Birth_Rate": 399.8 },
          { "Year": 1999, "Average_Birth_Rate": 401.5 },
          { "Year": 2000, "Average_Birth_Rate": 411.2 },
          { "Year": 2001, "Average_Birth_Rate": 406.1 },
          { "Year": 2002, "Average_Birth_Rate": 404.1 },
          { "Year": 2003, "Average_Birth_Rate": 409.5 },
          { "Year": 2004, "Average_Birth_Rate": 410.3 },
          { "Year": 2005, "Average_Birth_Rate": 411.4 },
          { "Year": 2006, "Average_Birth_Rate": 421.6 },
          { "Year": 2007, "Average_Birth_Rate": 424.0 },
          { "Year": 2008, "Average_Birth_Rate": 414.4 },
          { "Year": 2009, "Average_Birth_Rate": 400.4 },
          { "Year": 2010, "Average_Birth_Rate": 386.2 },
          { "Year": 2011, "Average_Birth_Rate": 378.9 },
          { "Year": 2012, "Average_Birth_Rate": 376.1 },
          { "Year": 2013, "Average_Birth_Rate": 371.5 },
          { "Year": 2014, "Average_Birth_Rate": 372.5 },
          { "Year": 2015, "Average_Birth_Rate": 368.7 },
          { "Year": 2016, "Average_Birth_Rate": 364.1 },
          { "Year": 2017, "Average_Birth_Rate": 353.1 },
          { "Year": 2018, "Average_Birth_Rate": 345.9 },
        ],
        config: {
          xAxis: "Year",
          yAxis: "Average_Birth_Rate",
          title: "Average Birth Rate Over Time"
        }
      },
      {
        id: "total-assets-line-plot",
        type: "line",
        data: [
          { "Year": 1957, "Total_Assets_(in_trillions)": 0.023 },
          { "Year": 1958, "Total_Assets_(in_trillions)": 0.023 },
          { "Year": 1959, "Total_Assets_(in_trillions)": 0.022 },
          { "Year": 1960, "Total_Assets_(in_trillions)": 0.023 },
          { "Year": 1961, "Total_Assets_(in_trillions)": 0.022 },
          { "Year": 1962, "Total_Assets_(in_trillions)": 0.021 },
          { "Year": 1963, "Total_Assets_(in_trillions)": 0.021 },
          { "Year": 1964, "Total_Assets_(in_trillions)": 0.021 },
          { "Year": 1965, "Total_Assets_(in_trillions)": 0.020 },
          { "Year": 1966, "Total_Assets_(in_trillions)": 0.022 },
          { "Year": 1967, "Total_Assets_(in_trillions)": 0.026 },
          { "Year": 1968, "Total_Assets_(in_trillions)": 0.029 },
          { "Year": 1969, "Total_Assets_(in_trillions)": 0.034 },
          { "Year": 1970, "Total_Assets_(in_trillions)": 0.038 },
          { "Year": 1971, "Total_Assets_(in_trillions)": 0.040 },
          { "Year": 1972, "Total_Assets_(in_trillions)": 0.043 },
          { "Year": 1973, "Total_Assets_(in_trillions)": 0.044 },
          { "Year": 1974, "Total_Assets_(in_trillions)": 0.046 },
          { "Year": 1975, "Total_Assets_(in_trillions)": 0.044 },
          { "Year": 1976, "Total_Assets_(in_trillions)": 0.041 },
          { "Year": 1977, "Total_Assets_(in_trillions)": 0.036 },
          { "Year": 1978, "Total_Assets_(in_trillions)": 0.032 },
          { "Year": 1979, "Total_Assets_(in_trillions)": 0.030 },
          { "Year": 1980, "Total_Assets_(in_trillions)": 0.026 },
          { "Year": 1981, "Total_Assets_(in_trillions)": 0.025 },
          { "Year": 1982, "Total_Assets_(in_trillions)": 0.025 },
          { "Year": 1983, "Total_Assets_(in_trillions)": 0.025 },
          { "Year": 1984, "Total_Assets_(in_trillions)": 0.031 },
          { "Year": 1985, "Total_Assets_(in_trillions)": 0.042 },
          { "Year": 1986, "Total_Assets_(in_trillions)": 0.047 },
          { "Year": 1987, "Total_Assets_(in_trillions)": 0.069 },
          { "Year": 1988, "Total_Assets_(in_trillions)": 0.110 },
          { "Year": 1989, "Total_Assets_(in_trillions)": 0.163 },
          { "Year": 1990, "Total_Assets_(in_trillions)": 0.225 },
          { "Year": 1991, "Total_Assets_(in_trillions)": 0.281 },
          { "Year": 1992, "Total_Assets_(in_trillions)": 0.331 },
          { "Year": 1993, "Total_Assets_(in_trillions)": 0.378 },
          { "Year": 1994, "Total_Assets_(in_trillions)": 0.436 },
          { "Year": 1995, "Total_Assets_(in_trillions)": 0.496 },
          { "Year": 1996, "Total_Assets_(in_trillions)": 0.567 },
          { "Year": 1997, "Total_Assets_(in_trillions)": 0.656 },
          { "Year": 1998, "Total_Assets_(in_trillions)": 0.762 },
          { "Year": 1999, "Total_Assets_(in_trillions)": 0.896 },
          { "Year": 2000, "Total_Assets_(in_trillions)": 1.049 },
          { "Year": 2001, "Total_Assets_(in_trillions)": 1.213 },
          { "Year": 2002, "Total_Assets_(in_trillions)": 1.378 },
          { "Year": 2003, "Total_Assets_(in_trillions)": 1.531 },
          { "Year": 2004, "Total_Assets_(in_trillions)": 1.687 },
          { "Year": 2005, "Total_Assets_(in_trillions)": 1.859 },
          { "Year": 2006, "Total_Assets_(in_trillions)": 2.048 },
          { "Year": 2007, "Total_Assets_(in_trillions)": 2.239 },
          { "Year": 2008, "Total_Assets_(in_trillions)": 2.419 },
          { "Year": 2009, "Total_Assets_(in_trillions)": 2.540 },
          { "Year": 2010, "Total_Assets_(in_trillions)": 2.609 },
          { "Year": 2011, "Total_Assets_(in_trillions)": 2.678 },
          { "Year": 2012, "Total_Assets_(in_trillions)": 2.732 },
          { "Year": 2013, "Total_Assets_(in_trillions)": 2.764 },
          { "Year": 2014, "Total_Assets_(in_trillions)": 2.789 },
          { "Year": 2015, "Total_Assets_(in_trillions)": 2.813 },
          { "Year": 2016, "Total_Assets_(in_trillions)": 2.848 },
          { "Year": 2017, "Total_Assets_(in_trillions)": 2.892 },
          { "Year": 2018, "Total_Assets_(in_trillions)": 2.895 },
          { "Year": 2019, "Total_Assets_(in_trillions)": 2.897 },
          { "Year": 2020, "Total_Assets_(in_trillions)": 2.908 },
          { "Year": 2021, "Total_Assets_(in_trillions)": 2.852 },
          { "Year": 2022, "Total_Assets_(in_trillions)": 2.830 },
          { "Year": 2023, "Total_Assets_(in_trillions)": 2.788 },
        ],
        config: {
          xAxis: "Year",
          yAxis: "Total_Assets_(in_trillions)",
          title: "Total Assets Over Time"
        }
      },
      {
        id: "OASDI-bar-plot",
        type: "bar",
        data: [
          { "Year": 1937, "Net_Assets_(in_millions)": 766 },
          { "Year": 1938, "Net_Assets_(in_millions)": 366 },
          { "Year": 1939, "Net_Assets_(in_millions)": 592 },
          { "Year": 1940, "Net_Assets_(in_millions)": 306 },
          { "Year": 1941, "Net_Assets_(in_millions)": 731 },
          { "Year": 1942, "Net_Assets_(in_millions)": 926 },
          { "Year": 1943, "Net_Assets_(in_millions)": 1132 },
          { "Year": 1944, "Net_Assets_(in_millions)": 1184 },
          { "Year": 1945, "Net_Assets_(in_millions)": 1116 },
          { "Year": 1946, "Net_Assets_(in_millions)": 1029 },
          { "Year": 1947, "Net_Assets_(in_millions)": 1210 },
          { "Year": 1948, "Net_Assets_(in_millions)": 1362 },
          { "Year": 1949, "Net_Assets_(in_millions)": 1094 },
          { "Year": 1950, "Net_Assets_(in_millions)": 1905 },
          { "Year": 1951, "Net_Assets_(in_millions)": 1818 },
          { "Year": 1952, "Net_Assets_(in_millions)": 1902 },
          { "Year": 1953, "Net_Assets_(in_millions)": 1265 },
          { "Year": 1954, "Net_Assets_(in_millions)": 1869 },
          { "Year": 1955, "Net_Assets_(in_millions)": 1087 },
          { "Year": 1956, "Net_Assets_(in_millions)": 856 },
          { "Year": 1957, "Net_Assets_(in_millions)": -67 },
          { "Year": 1958, "Net_Assets_(in_millions)": -267 },
          { "Year": 1959, "Net_Assets_(in_millions)": -1239 },
          { "Year": 1960, "Net_Assets_(in_millions)": 784 },
          { "Year": 1961, "Net_Assets_(in_millions)": 357 },
          { "Year": 1962, "Net_Assets_(in_millions)": -205 },
          { "Year": 1963, "Net_Assets_(in_millions)": 1440 },
          { "Year": 1964, "Net_Assets_(in_millions)": 2052 },
          { "Year": 1965, "Net_Assets_(in_millions)": 797 },
          { "Year": 1966, "Net_Assets_(in_millions)": 4282 },
          { "Year": 1967, "Net_Assets_(in_millions)": 5741 },
          { "Year": 1968, "Net_Assets_(in_millions)": 3941 },
          { "Year": 1969, "Net_Assets_(in_millions)": 7094 },
          { "Year": 1970, "Net_Assets_(in_millions)": 5630 },
          { "Year": 1971, "Net_Assets_(in_millions)": 5335 },
          { "Year": 1972, "Net_Assets_(in_millions)": 6287 },
          { "Year": 1973, "Net_Assets_(in_millions)": 7142 },
          { "Year": 1974, "Net_Assets_(in_millions)": 8487 },
          { "Year": 1975, "Net_Assets_(in_millions)": 8000 },
          { "Year": 1976, "Net_Assets_(in_millions)": 8766 },
          { "Year": 1977, "Net_Assets_(in_millions)": 9048 },
          { "Year": 1978, "Net_Assets_(in_millions)": 7983 },
          { "Year": 1979, "Net_Assets_(in_millions)": 11326 },
          { "Year": 1980, "Net_Assets_(in_millions)": 14035 },
          { "Year": 1981, "Net_Assets_(in_millions)": 16324 },
          { "Year": 1982, "Net_Assets_(in_millions)": 18590 },
          { "Year": 1983, "Net_Assets_(in_millions)": 15761 },
          { "Year": 1984, "Net_Assets_(in_millions)": 25991 },
          { "Year": 1985, "Net_Assets_(in_millions)": 28203 },
          { "Year": 1986, "Net_Assets_(in_millions)": 23761 },
          { "Year": 1987, "Net_Assets_(in_millions)": 44493 },
          { "Year": 1988, "Net_Assets_(in_millions)": 63244 },
          { "Year": 1989, "Net_Assets_(in_millions)": 75917 },
          { "Year": 1990, "Net_Assets_(in_millions)": 84750 },
          { "Year": 1991, "Net_Assets_(in_millions)": 82223 },
          { "Year": 1992, "Net_Assets_(in_millions)": 83305 },
          { "Year": 1993, "Net_Assets_(in_millions)": 85835 },
          { "Year": 1994, "Net_Assets_(in_millions)": 83017 },
          { "Year": 1995, "Net_Assets_(in_millions)": 87096 },
          { "Year": 1996, "Net_Assets_(in_millions)": 100875 },
          { "Year": 1997, "Net_Assets_(in_millions)": 122130 },
          { "Year": 1998, "Net_Assets_(in_millions)": 142455 },
          { "Year": 1999, "Net_Assets_(in_millions)": 170202 },
          { "Year": 2000, "Net_Assets_(in_millions)": 188956 },
          { "Year": 2001, "Net_Assets_(in_millions)": 201923 },
          { "Year": 2002, "Net_Assets_(in_millions)": 213862 },
          { "Year": 2003, "Net_Assets_(in_millions)": 210941 },
          { "Year": 2004, "Net_Assets_(in_millions)": 225889 },
          { "Year": 2005, "Net_Assets_(in_millions)": 250433 },
          { "Year": 2006, "Net_Assets_(in_millions)": 275722 },
          { "Year": 2007, "Net_Assets_(in_millions)": 278090 },
          { "Year": 2008, "Net_Assets_(in_millions)": 288221 },
          { "Year": 2009, "Net_Assets_(in_millions)": 255418 },
          { "Year": 2010, "Net_Assets_(in_millions)": 219905 },
          { "Year": 2011, "Net_Assets_(in_millions)": 227363 },
          { "Year": 2012, "Net_Assets_(in_millions)": 225892 },
          { "Year": 2013, "Net_Assets_(in_millions)": 207767 },
          { "Year": 2014, "Net_Assets_(in_millions)": 200307 },
          { "Year": 2015, "Net_Assets_(in_millions)": 197600 },
          { "Year": 2016, "Net_Assets_(in_millions)": 167014 },
          { "Year": 2017, "Net_Assets_(in_millions)": 164770 },
          { "Year": 2018, "Net_Assets_(in_millions)": 124333 },
          { "Year": 2019, "Net_Assets_(in_millions)": 154326 },
          { "Year": 2020, "Net_Assets_(in_millions)": 153654 },
          { "Year": 2021, "Net_Assets_(in_millions)": 83566 },
          { "Year": 2022, "Net_Assets_(in_millions)": 105733 },
          { "Year": 2023, "Net_Assets_(in_millions)": 84406 },
          { "Year": 2024, "Net_Assets_(in_millions)": 79577 },
          { "Year": 2025, "Net_Assets_(in_millions)": 68124 },
          { "Year": 2026, "Net_Assets_(in_millions)": 56670 },
          { "Year": 2027, "Net_Assets_(in_millions)": 45218 },
          { "Year": 2028, "Net_Assets_(in_millions)": 33765 },
          { "Year": 2029, "Net_Assets_(in_millions)": 22312 },
          { "Year": 2030, "Net_Assets_(in_millions)": 10860 },
          { "Year": 2031, "Net_Assets_(in_millions)": -594 },
          { "Year": 2032, "Net_Assets_(in_millions)": -12046 },
          { "Year": 2033, "Net_Assets_(in_millions)": -23500 },
        ],
        config: {
          xAxis: "Year",
          yAxis: "Net_Assets_(in_millions)",
          title: "Net Assets Over Time",
          yAxisMin: -25000,
          yAxisMax: 300000
        }
      },
      {
        id: "labor-line-plot",
        type: "stacked-line",
        data: [
          { "Year": 1948, "Labor_Rate": 52.1, "College_Enrollment_Rate": null },
          { "Year": 1949, "Labor_Rate": 52.6, "College_Enrollment_Rate": null },
          { "Year": 1950, "Labor_Rate": 51.5, "College_Enrollment_Rate": null },
          { "Year": 1951, "Labor_Rate": 52.2, "College_Enrollment_Rate": null },
          { "Year": 1952, "Labor_Rate": 51.4, "College_Enrollment_Rate": null },
          { "Year": 1953, "Labor_Rate": 51.0, "College_Enrollment_Rate": null },
          { "Year": 1954, "Labor_Rate": 48.5, "College_Enrollment_Rate": null },
          { "Year": 1955, "Labor_Rate": 49.4, "College_Enrollment_Rate": null },
          { "Year": 1956, "Labor_Rate": 50.8, "College_Enrollment_Rate": null },
          { "Year": 1957, "Labor_Rate": 49.6, "College_Enrollment_Rate": null },
          { "Year": 1958, "Labor_Rate": 47.6, "College_Enrollment_Rate": null },
          { "Year": 1959, "Labor_Rate": 46.6, "College_Enrollment_Rate": null },
          { "Year": 1960, "Labor_Rate": 47.4, "College_Enrollment_Rate": null },
          { "Year": 1961, "Labor_Rate": 46.6, "College_Enrollment_Rate": null },
          { "Year": 1962, "Labor_Rate": 46.3, "College_Enrollment_Rate": null },
          { "Year": 1963, "Labor_Rate": 45.3, "College_Enrollment_Rate": null },
          { "Year": 1964, "Labor_Rate": 44.5, "College_Enrollment_Rate": null },
          { "Year": 1965, "Labor_Rate": 45.5, "College_Enrollment_Rate": null },
          { "Year": 1966, "Labor_Rate": 47.8, "College_Enrollment_Rate": null },
          { "Year": 1967, "Labor_Rate": 48.5, "College_Enrollment_Rate": null },
          { "Year": 1968, "Labor_Rate": 48.4, "College_Enrollment_Rate": null },
          { "Year": 1969, "Labor_Rate": 49.8, "College_Enrollment_Rate": null },
          { "Year": 1970, "Labor_Rate": 49.8, "College_Enrollment_Rate": 19.60 },
          { "Year": 1971, "Labor_Rate": 49.8, "College_Enrollment_Rate": 20.44 },
          { "Year": 1972, "Labor_Rate": 51.7, "College_Enrollment_Rate": 21.04 },
          { "Year": 1973, "Labor_Rate": 53.3, "College_Enrollment_Rate": 21.93 },
          { "Year": 1974, "Labor_Rate": 54.8, "College_Enrollment_Rate": 23.35 },
          { "Year": 1975, "Labor_Rate": 53.9, "College_Enrollment_Rate": 25.54 },
          { "Year": 1976, "Labor_Rate": 54.5, "College_Enrollment_Rate": 25.15 },
          { "Year": 1977, "Labor_Rate": 55.7, "College_Enrollment_Rate": 25.77 },
          { "Year": 1978, "Labor_Rate": 57.6, "College_Enrollment_Rate": 25.71 },
          { "Year": 1979, "Labor_Rate": 57.7, "College_Enrollment_Rate": 26.42 },
          { "Year": 1980, "Labor_Rate": 56.6, "College_Enrollment_Rate": 27.62 },
          { "Year": 1981, "Labor_Rate": 55.4, "College_Enrollment_Rate": 28.25 },
          { "Year": 1982, "Labor_Rate": 54.3, "College_Enrollment_Rate": 28.38 },
          { "Year": 1983, "Labor_Rate": 53.4, "College_Enrollment_Rate": 28.46 },
          { "Year": 1984, "Labor_Rate": 54.1, "College_Enrollment_Rate": 27.96 },
          { "Year": 1985, "Labor_Rate": 54.4, "College_Enrollment_Rate": 27.97 },
          { "Year": 1986, "Labor_Rate": 54.7, "College_Enrollment_Rate": 28.55 },
          { "Year": 1987, "Labor_Rate": 54.6, "College_Enrollment_Rate": 29.15 },
          { "Year": 1988, "Labor_Rate": 55.4, "College_Enrollment_Rate": 29.81 },
          { "Year": 1989, "Labor_Rate": 55.7, "College_Enrollment_Rate": 30.92 },
          { "Year": 1990, "Labor_Rate": 53.9, "College_Enrollment_Rate": 31.56 },
          { "Year": 1991, "Labor_Rate": 51.9, "College_Enrollment_Rate": 32.79 },
          { "Year": 1992, "Labor_Rate": 51.2, "College_Enrollment_Rate": 33.08 },
          { "Year": 1993, "Labor_Rate": 51.5, "College_Enrollment_Rate": 32.67 },
          { "Year": 1994, "Labor_Rate": 52.5, "College_Enrollment_Rate": 32.61 },
          { "Year": 1995, "Labor_Rate": 53.4, "College_Enrollment_Rate": 32.57 },
          { "Year": 1996, "Labor_Rate": 52.3, "College_Enrollment_Rate": 32.81 },
          { "Year": 1997, "Labor_Rate": 51.6, "College_Enrollment_Rate": 33.12 },
          { "Year": 1998, "Labor_Rate": 52.7, "College_Enrollment_Rate": 33.13 },
          { "Year": 1999, "Labor_Rate": 52.0, "College_Enrollment_Rate": 33.91 },
          { "Year": 2000, "Labor_Rate": 52.1, "College_Enrollment_Rate": 34.97 },
          { "Year": 2001, "Labor_Rate": 49.4, "College_Enrollment_Rate": 36.37 },
          { "Year": 2002, "Labor_Rate": 47.3, "College_Enrollment_Rate": 37.93 },
          { "Year": 2003, "Labor_Rate": 44.4, "College_Enrollment_Rate": 38.62 },
          { "Year": 2004, "Labor_Rate": 43.8, "College_Enrollment_Rate": 39.44 },
          { "Year": 2005, "Labor_Rate": 43.8, "College_Enrollment_Rate": 39.93 },
          { "Year": 2006, "Labor_Rate": 43.6, "College_Enrollment_Rate": 40.54 },
          { "Year": 2007, "Labor_Rate": 41.3, "College_Enrollment_Rate": 41.69 },
          { "Year": 2008, "Labor_Rate": 40.4, "College_Enrollment_Rate": 43.57 },
          { "Year": 2009, "Labor_Rate": 37.4, "College_Enrollment_Rate": 46.39 },
          { "Year": 2010, "Labor_Rate": 34.9, "College_Enrollment_Rate": 48.00 },
          { "Year": 2011, "Labor_Rate": 34.2, "College_Enrollment_Rate": 47.98 },
          { "Year": 2012, "Labor_Rate": 34.4, "College_Enrollment_Rate": 47.14 },
          { "Year": 2013, "Labor_Rate": 34.5, "College_Enrollment_Rate": 46.53 },
          { "Year": 2014, "Labor_Rate": 34.7, "College_Enrollment_Rate": 46.15 },
          { "Year": 2015, "Labor_Rate": 34.7, "College_Enrollment_Rate": 45.65 },
          { "Year": 2016, "Labor_Rate": 35.2, "College_Enrollment_Rate": 45.32 },
          { "Year": 2017, "Labor_Rate": 35.5, "College_Enrollment_Rate": 45.17 },
          { "Year": 2018, "Labor_Rate": 34.9, "College_Enrollment_Rate": 44.88 },
          { "Year": 2019, "Labor_Rate": 35.5, "College_Enrollment_Rate": 44.83 },
          { "Year": 2020, "Labor_Rate": 34.0, "College_Enrollment_Rate": 43.45 },
          { "Year": 2021, "Labor_Rate": 36.3, "College_Enrollment_Rate": 42.61 },
          { "Year": 2022, "Labor_Rate": 36.7, "College_Enrollment_Rate": 42.43 },
          { "Year": 2023, "Labor_Rate": 36.7, "College_Enrollment_Rate": 43.25 },
          { "Year": 2024, "Labor_Rate": 37.2, "College_Enrollment_Rate": 43.95 },
          { "Year": 2025, "Labor_Rate": 36.3, "College_Enrollment_Rate": null },
        ],
        config: {
          xAxis: "Year",
          yAxis: "Rate (%)",
          title: "Labor Rate Over Time"
        }
      }
  ]
};
