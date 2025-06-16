import type { IntakeChartConfig, PieChartDataItem } from "@/types/types";

export const intakeChartData: PieChartDataItem[] = [
  { name: "calls", value: 53, fill: "#2e3192", textColor: "#2e3192" },
  { name: "forms", value: 36, fill: "#29C4BE", textColor: "#00A99D" },
  { name: "chats", value: 11, fill: "#FFC533", textColor: "#E2AE01" },
];

export const intakeChartConfig: IntakeChartConfig = {
  calls: {
    label: "Calls",
    color: "#2e3192",
  },
  forms: {
    label: "Forms",
    color: "#00d6c1",
  },
  chats: {
    label: "Live Chats",
    color: "#FFC533",
  },
};
