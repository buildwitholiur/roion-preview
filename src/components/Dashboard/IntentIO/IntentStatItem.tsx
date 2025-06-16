import type { IntentStatItemProps } from "@/types/types";

const IntentStatItem = ({
  label,
  value,
  valueColor,
  percentChange,
  trend,
  comparisonLabel,
  description,
  noSign,
}: IntentStatItemProps) => {
  const isPositive = trend === "up";

  const percentColor = isPositive ? "text-custom-green" : "text-custom-red";

  const sign = isPositive ? "+" : "-";

  return (
    <div className="space-y-2 border-b border-custom-blue-50 pb-2">
      <h4 className="text-font-18 font-semibold text-custom-gray-500">
        {label}
      </h4>

      <h3
        className={`font-normal text-font-48 ${
          valueColor ?? "text-custom-blue"
        }`}
      >
        {value}
      </h3>

      <h5 className={`text-font-18 font-semibold ${percentColor}`}>
        {comparisonLabel} ({`${!noSign ? sign : ""}${percentChange}%`})
      </h5>

      {description && <p>{description}</p>}
    </div>
  );
};

export default IntentStatItem;
