import type { CaseTopBarProps } from "@/types/types";

const CaseTopBar = ({
  title,
  titleSmall,
  description1,
  description2,
}: CaseTopBarProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-7.5 rounded-lg p-5 border border-custom-gray-100">
      <h2 className="text-font-32 font-normal text-custom-blue flex items-start">
        {title}{" "}
        {titleSmall && (
          <span className="text-font-18 font-medium">{titleSmall}</span>
        )}
      </h2>

      <div className="flex-1">
        {description1 && <p>{description1}</p>}

        {description2 && <p>{description2}</p>}
      </div>
    </div>
  );
};

export default CaseTopBar;
