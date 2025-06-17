import type { IntentTopBarProps } from "@/types/types";

const IntentTopBar = ({
  intentLogo,
  intentLogoAlt,
  description,
}: IntentTopBarProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-7.5 rounded-lg p-5 border border-custom-gray-100">
      <img className="w-fit h-11.5" src={intentLogo} alt={intentLogoAlt} />

      <p className="flex-1">{description}</p>
    </div>
  );
};

export default IntentTopBar;
