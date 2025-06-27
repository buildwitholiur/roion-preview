import type { HomeTopBarProps } from "@/types/types";

const HomeTopBar = ({ title, description }: HomeTopBarProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg p-5 border border-custom-gray-100">
      <h2 className="text-font-32 text-custom-blue flex items-start font-bold">
        {title}
      </h2>

      <div className="flex-1">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HomeTopBar;
