import type { MatchTableStatus } from "@/types/types";

export const matchTableStatus: MatchTableStatus[] = [
  {
    label: "Mismatched",
    bgColor: "bg-custom-orange-500",
    textColor: "text-custom-orange-400",
  },
  {
    label: "Confirmed",
    bgColor: "bg-custom-green",
    textColor: "text-custom-green",
  },
  {
    label: "Unassigned",
    bgColor: "bg-custom-gray-700",
    textColor: "text-custom-gray-700",
  },
];
