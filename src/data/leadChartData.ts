import type { ChartConfig } from "@/components/ui/chart";
import type { LeadChartDataItem } from "@/types/types";

export const leadChartData: LeadChartDataItem[] = [
  { month: "Jan", totalLeads: 0.4, totalCasesMatched: 0 },
  { month: "Feb", totalLeads: 1, totalCasesMatched: 0.5 },
  { month: "Mar", totalLeads: 0.8, totalCasesMatched: 0.5 },
  { month: "Apr", totalLeads: 2, totalCasesMatched: 1.2 },
  { month: "May", totalLeads: 1.5, totalCasesMatched: 0.8 },
  { month: "Jun", totalLeads: 3, totalCasesMatched: 1.5 },
  { month: "Jul", totalLeads: 3.2, totalCasesMatched: 1.5 },
  { month: "Aug", totalLeads: 4, totalCasesMatched: 2 },
];

export const leadChartConfig = {
  totalLeads: {
    label: "Total Leads",
    color: "#14ae5c",
  },
  totalCasesMatched: {
    label: "Total Cases",
    color: "#2e3192",
  },
} satisfies ChartConfig;
