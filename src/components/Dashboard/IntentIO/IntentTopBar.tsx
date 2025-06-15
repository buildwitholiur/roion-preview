import type { IntentTopBarProps } from "@/types/types";

const IntentTopBar = ({
  intentLogo,
  intentLogoAlt,
  desc,
}: IntentTopBarProps) => {
  return (
    <div className="flex items-center gap-7.5 rounded-lg p-5 border border-custom-gray-100">
      <img className="w-fit h-11.5" src={intentLogo} alt={intentLogoAlt} />

      <p className="flex-1">{desc}</p>
    </div>
  );
};

export default IntentTopBar;
