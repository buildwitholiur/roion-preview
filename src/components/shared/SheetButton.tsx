import type { SheetButtonProps } from "@/types/types";

const SheetButton = ({ label, icon, iconAlt }: SheetButtonProps) => {
  return (
    <button className="flex items-center gap-2.5 text-font-18 font-medium text-custom-blue-300 hover:underline">
      {label}{" "}
      {icon && <img className="w-4 h-auto" src={icon} alt={iconAlt ?? label} />}
    </button>
  );
};

export default SheetButton;
