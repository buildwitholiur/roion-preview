import IntentCard from "@/components/shared/IntentCard";
import CaseIntakeOverview from "./CaseIntakeOverview";
import SheetButton from "@/components/shared/SheetButton";

const CaseIntakeBlock = () => {
  return (
    <section>
      {/* Intake Overview */}
      <IntentCard
        title="Intake Overview"
        content={<CaseIntakeOverview />}
        action={
          <SheetButton
            label="Run Match Report with Sheet"
            icon="/images/file-lines.svg"
            iconAlt="file lines"
          />
        }
      />
      {/* Intake Overview */}
    </section>
  );
};

export default CaseIntakeBlock;
