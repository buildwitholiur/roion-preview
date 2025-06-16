import type { AverageIntentStatItemProps } from "@/types/types";

const AverageIntentStatItem = ({
  label,
  percentChange,
  avgIntentNum,
  trend,
}: AverageIntentStatItemProps) => {
  const isPositive = trend === "up";

  const percentColor = isPositive ? "text-custom-green" : "text-custom-red";

  const sign = isPositive ? "+" : "-";

  return (
    <div className="space-y-2 border-b border-custom-blue-50 pb-2 min-h-[136px] flex flex-col justify-between">
      <h4 className="text-font-18 font-semibold text-custom-gray-500">
        {label}
      </h4>

      <div className="flex items-end gap-2">
        <div className="bg-custom-blue inline-block py-2 px-2.5 rounded-[60px]">
          <h3 className="text-font-40 font-normal text-custom-white">
            {avgIntentNum}
          </h3>
        </div>

        <h5 className={`text-font-18 font-semibold ${percentColor}`}>
          {`${sign}${percentChange}%`}
        </h5>
      </div>
    </div>
  );
};

export default AverageIntentStatItem;
