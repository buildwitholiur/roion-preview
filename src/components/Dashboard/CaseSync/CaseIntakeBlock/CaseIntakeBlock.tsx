import IntentCard from "@/components/shared/IntentCard";
import CaseIntakeOverview from "./CaseIntakeOverview";

const CaseIntakeBlock = () => {
  return (
    <section>
      {/* Intake Overview */}
      <IntentCard
        title="Intake Overview"
        content={<CaseIntakeOverview />}
        action={
          <button className="flex items-center gap-2.5 text-font-18 font-medium text-custom-blue-300 hover:underline">
            Run Match Report with Sheet{" "}
            <img
              className="w-4 h-auto"
              src="/images/file-lines.svg"
              alt="file lines"
            />
          </button>
        }
      />
      {/* Intake Overview */}
    </section>
  );
};

export default CaseIntakeBlock;
