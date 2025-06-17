export interface HeaderProps {
  setisMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
}

export interface SidebarProps {
  isMobileMenuOpen: boolean;
}

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
  total_leads: number;
  average_talk_time: string;
  average_ring_time: string;
  average_intentoi_score: number;
  average_lead_value: number;
  total_lead_value: number;
}

export interface Lead {
  id: number;
  marketing_source: string;
  lead_value: number;
  full_name: string;
  date: string;
  phone_number: string;
  intent_score: number;
  intent_score_bg: "green" | "yellow" | "red";
  additional_notes: string;
}

export interface LeadFormData {
  firstName: string;
  lastName: string;
  date: string;
  phone_number: string;
  marketing_source: string;
  lead_value: string;
  additional_notes: string;
}

export interface LeadExpandRowProps {
  lead: Lead;
  formData: LeadFormData;
  onUpdateField: (field: keyof LeadFormData, value: string) => void;
  onSave: () => void;
}
