import type { IntentCardProps } from "@/types/types";

const IntentCard = ({ title, isHelp, content, action }: IntentCardProps) => {
  return (
    <div className="flex-1 bg-custom-white p-5 rounded-lg border border-custom-gray-100 custom__shadow">
      <div
        className={`flex border-b border-custom-gray-200 pb-2.5 mb-2.5 gap-3 ${
          isHelp
            ? "flex-row items-center justify-between"
            : "flex-col md:flex-row md:items-center md:justify-between"
        }`}
      >
        <h2 className="text-font-20 text-custom-gray-600">{title}</h2>

        {isHelp && (
          <button className="w-4.5 h-auto">
            <img src="/images/info-circle.svg" alt="info circle" />
          </button>
        )}

        {action}
      </div>

      {content && content}
    </div>
  );
};

export default IntentCard;
