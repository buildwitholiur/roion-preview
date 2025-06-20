import type { CaseStatItemProps } from "@/types/types";

const CaseStatItem = ({
  label,
  value,
  valueColor,
  percentChange,
  percentAmount,
  trend,
  comparisonLabel,
  noSign,
  noParentheses,
}: CaseStatItemProps) => {
  const isPositive = trend === "up";

  const percentColor = isPositive ? "text-custom-green" : "text-custom-red";

  const sign = isPositive ? "+" : "-";

  return (
    <div className="space-y-2 border-r border-custom-blue-50 flex-1 pl-10 first-of-type:pl-0 last-of-type:border-r-0">
      <h4 className="text-font-18 font-semibold text-custom-gray-500">
        {label}
      </h4>

      <h3
        className={`font-normal text-font-40 md:text-font-48 ${
          valueColor ?? "text-custom-blue"
        }`}
      >
        {value}
      </h3>

      <h5 className={`text-font-18 font-semibold ${percentColor}`}>
        {comparisonLabel} {percentAmount || ""}
        {!noParentheses && "("}
        {!noSign && sign}
        {percentChange ? `${percentChange}%` : ""}
        {!noParentheses && ")"}
      </h5>
    </div>
  );
};

export default CaseStatItem;
