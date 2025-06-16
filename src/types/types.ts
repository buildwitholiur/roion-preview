export type NavLink = {
  label: string;
  path: string;
};

export interface IntentTopBarProps {
  intentLogo: string;
  intentLogoAlt?: string;
  description: string;
}

export interface IntentCardProps {
  content?: React.ReactNode;
  title: string;
  isHelp?: boolean;
}

export interface IntentSignalsCardProps {
  label: string;
  value: number | string;
  percentChange: number;
  trend: "up" | "down";
  amount?: string;
  highlight: string;
  description: string;
  intentSignalType: "high" | "mid" | "low";
}

export type IntentSignalTypeStyle = {
  bgColor: string;
  amountColor?: string;
};

export type IntentSignalType = IntentSignalsCardProps["intentSignalType"];

export interface IntentStatItemProps {
  label: string;
  value: number | string;
  valueColor?: string;
  percentChange: number;
  trend: "up" | "down";
  comparisonLabel?: string;
  description?: string;
  noSign?: boolean;
}

export interface AverageIntentStatItemProps {
  label: string;
  percentChange: number;
  avgIntentNum: number;
  trend: "up" | "down";
}

export interface NotificationBarProps {
  description: string;
}

export interface PieChartDataItem {
  name: string;
  value: number;
  fill: string;
  textColor: string;
}

export interface ChartItemConfig {
  label: string;
  color?: string;
}

export interface IntakeChartConfig {
  [key: string]: ChartItemConfig;
}

export interface MarketingSource {
  id: string;
  channel: string;
  totalLeads: number;
  avgTalkTime: string;
  ringTime: string;
  avgIntent: number;
  avgValue: number;
  totalValue: number;
}
