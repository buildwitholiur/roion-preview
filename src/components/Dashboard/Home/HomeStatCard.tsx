import type { HomeStatCardProps } from "@/types/types";

const HomeStatCard = ({
  label,
  value,
  valueColor,
  percentChange,
  percentAmount,
  trend,
  comparisonLabel,
  isHelp,
  noSign,
  noParentheses,
  isBorder,
}: HomeStatCardProps) => {
  const isPositive = trend === "up";

  const percentColor = isPositive ? "text-custom-green" : "text-custom-red";

  const sign = isPositive ? "+" : "-";

  return (
    <div className="flex-1 bg-custom-white p-5 rounded-lg border border-custom-gray-100 custom__shadow">
      <div
        className={`space-y-2.5 ${
          isBorder ? "border-b border-custom-blue-50 pb-2" : ""
        }`}
      >
        <div className="flex items-center gap-2">
          <h4 className="text-font-18 font-semibold text-custom-gray-500">
            {label}
          </h4>

          {isHelp && (
            <button className="w-4.5 h-auto">
              <img src="/images/info-circle.svg" alt="info circle" />
            </button>
          )}
        </div>

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
    </div>
  );
};

export default HomeStatCard;
