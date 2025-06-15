import { intentSignalStyles } from "@/data/intentSignalStyles";
import type { IntentSignalsCardProps } from "@/types/types";

const IntentSignalsCard = ({
  title,
  count,
  percent,
  amount,
  highlight,
  description,
  intentSignalType,
}: IntentSignalsCardProps) => {
  const styles = intentSignalStyles[intentSignalType];

  return (
    <div
      className={`py-4 px-5 pb-6 min-h-[174px] flex flex-col justify-between ${styles.bgColor}`}
    >
      <h5 className="font-semibold text-font-18 text-custom-gray-500">
        {title}
      </h5>

      <div className="flex items-end gap-5">
        <div className="w-full max-w-[243px] border-r border-custom-gray-100">
          <div className="flex items-center gap-2">
            <h3 className="text-font-48 font-normal text-custom-blue">
              {count}
            </h3>
            <p className="text-font-18 font-semibold text-custom-green">
              {percent}
            </p>
          </div>

          {amount && (
            <h4 className={`text-font-32 ${styles.amountColor ?? ""}`}>
              {amount}
            </h4>
          )}
        </div>

        <div className="flex-1">
          <p>
            <span className="font-bold">{highlight}</span> - {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntentSignalsCard;
