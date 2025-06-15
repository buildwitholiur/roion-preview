import type { IntentSignalType, IntentSignalTypeStyle } from "@/types/types";

export const intentSignalStyles: Record<
  IntentSignalType,
  IntentSignalTypeStyle
> = {
  high: {
    bgColor: "bg-custom-green-100",
    amountColor: "text-custom-green",
  },
  mid: {
    bgColor: "bg-custom-orange-100",
    amountColor: "text-custom-orange",
  },
  low: {
    bgColor: "bg-custom-red-100",
  },
};
