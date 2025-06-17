import IntentCard from "@/components/shared/IntentCard";
import IntakeOverview from "./IntakeOverview";
import CallData from "./CallData";

const CallIntentBlock = () => {
  return (
    <section className="flex flex-col 2xl:flex-row gap-5 md:gap-7.5 min-h-[545px]">
      {/* Intake Overview */}
      <IntentCard title="Intake Overview" content={<IntakeOverview />} />
      {/* Intake Overview */}

      {/* Call Data */}
      <IntentCard title="Call Data" isHelp content={<CallData />} />
      {/* Call Data */}
    </section>
  );
};

export default CallIntentBlock;
