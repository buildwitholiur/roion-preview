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
    <div className="space-y-2 border-b 2xl:border-r xl:border-b-0 border-custom-blue-50 flex-1 pb-2.5 xl:pl-10 xl:pb-0 first-of-type:pb-2.5 last-of-type:border-b-0 xl:first-of-type:pl-0 xl:last-of-type:border-r-0 pt-2.5 first-of-type:pt-0 xl:pt-0 xl:first-of-type:pb-0">
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
