import type { matchReportSelectOptionsData } from "@/types/types";

export const sourceSelectOptions = [
  "Google My Business",
  "Facebook Ads",
  "Website Form",
  "Referral",
  "Google Ads",
  "LinkedIn",
  "Direct Call",
];

export const matchReportSelectOptions: matchReportSelectOptionsData[] = [
  {
    label: "All Reports",
    value: "all",
  },
  {
    label: "Mismatched Only",
    value: "mismatched",
  },
  {
    label: "Confirmed Only",
    value: "confirmed",
  },
  {
    label: "Unassigned Only",
    value: "unassigned",
  },
];
