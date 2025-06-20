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
  action?: React.ReactNode;
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

// Marketing Source Table Type
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

// Lead Table Type
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

// Match Report Table Type
export interface MatchReport {
  id: number;
  full_name: string;
  date: string;
  phone_number: string;
  intent_source: string;
  real_source: string;
  intent_score: number;
  intent_score_bg: "green" | "yellow" | "red";
  actual_value: number;
  potential_value: number;
  status: "mismatched" | "confirmed" | "unassigned";
  matching_source?: string;
  additional_notes?: string;
  history?: HistoryEntry[];
}

export interface HistoryEntry {
  date: string;
  action: string;
}

export interface MatchReportFormData {
  firstName: string;
  lastName: string;
  date: string;
  phone_number: string;
  intent_source: string;
  real_source: string;
  matching_source: string;
  actual_value: string;
  potential_value: string;
  additional_notes: string;
}

export interface MatchReportExpandRowProps {
  report: MatchReport;
  formData: MatchReportFormData;
  onUpdateField: (field: keyof MatchReportFormData, value: string) => void;
  onSave: () => void;
}

// CaseSync Page Types
export interface CaseStatItemProps {
  label: string;
  value: number | string;
  valueColor?: string;
  percentChange?: number;
  percentAmount?: string;
  trend: "up" | "down";
  comparisonLabel?: string;
  noSign?: boolean;
  noParentheses?: boolean;
}

export interface SheetButtonProps {
  label: string;
  icon?: string;
  iconAlt?: string;
}

export type MatchTableStatus = {
  label: string;
  bgColor: string;
  textColor: string;
};

export type matchReportSelectOptionsData = {
  label: string;
  value: string;
};
