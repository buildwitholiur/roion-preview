export type NavLink = {
  label: string;
  path: string;
};

export interface IntentTopBarProps {
  intentLogo: string;
  intentLogoAlt?: string;
  desc: string;
}

export interface IntentCardProps {
  content: React.ReactNode;
  title: string;
  isHelp?: boolean;
}

export interface IntentSignalsCardProps {
  title: string;
  count: number;
  percent: string;
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
