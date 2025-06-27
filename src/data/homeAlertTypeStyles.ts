import type { HomeAlertType, HomeAlertTypeStyle } from "@/types/types";

export const homeAlertTypeStyles: Record<HomeAlertType, HomeAlertTypeStyle> = {
  high: {
    bgColor: "bg-custom-orange-100",
  },
  low: {
    bgColor: "bg-custom-green-100",
  },
  missed: {
    bgColor: "bg-custom-red-100",
  },
};
