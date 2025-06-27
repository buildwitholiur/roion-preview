import type { ChartConfig } from "@/components/ui/chart";
import type { MatchChartDataItem } from "@/types/types";

export const matchChartData: MatchChartDataItem[] = [
  { month: "Jan", intentOI: 0.4, matchedCases: 0 },
  { month: "Feb", intentOI: 1, matchedCases: 0.5 },
  { month: "Mar", intentOI: 0.8, matchedCases: 0.5 },
  { month: "Apr", intentOI: 1, matchedCases: 2 },
  { month: "May", intentOI: 1.2, matchedCases: 2.6 },
  { month: "Jun", intentOI: 1, matchedCases: 2.7 },
  { month: "Jul", intentOI: 1.5, matchedCases: 3 },
  { month: "Aug", intentOI: 2.5, matchedCases: 4 },
];

export const matchChartConfig = {
  intentOI: {
    label: "IntentOI Leads",
    color: "#14ae5c",
  },
  matchedCases: {
    label: "Matched Cases",
    color: "#2e3192",
  },
} satisfies ChartConfig;
