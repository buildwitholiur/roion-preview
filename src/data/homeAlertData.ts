import type { HomeAlertData } from "@/types/types";

export const homeAlertData: HomeAlertData[] = [
  {
    title: "High Missed Call Rate",
    description:
      "31 calls were missed over the last 30 days, indicating room for improvement.",
    date: "5 days ago",
    alertType: "high",
  },
  {
    title: "Low Match Rate",
    description:
      "Only 17% of leads have converted into cases, which is below target.",
    date: "5 days ago",
    alertType: "low",
  },
  {
    title: "Estimated Value Missed",
    description: "$25,000 in potential settlement value was missed last month",
    date: "5 days ago",
    alertType: "missed",
  },
];
