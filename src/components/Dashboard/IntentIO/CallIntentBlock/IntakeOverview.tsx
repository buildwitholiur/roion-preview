import IntentStatItem from "../IntentStatItem";
import IntakeSourceChart from "./IntakeSourceChart";

const IntakeOverview = () => {
  return (
    <div className="space-y-5">
      <IntentStatItem
        label="Total Leads"
        value="728"
        percentChange={16}
        trend="up"
        comparisonLabel="vs 711"
      />

      <IntentStatItem
        label="Total Leads Potential Value"
        value="$3,638,948.00"
        valueColor="text-custom-green"
        percentChange={16}
        trend="down"
        comparisonLabel="vs $3,928,143.00"
        description="The case values are set up arbitrarily by your firm, and the goal is not exact valuation—but to give your team a prioritized view of what’s in your pipeline and where to focus follow-up efforts."
      />

      <IntakeSourceChart />
    </div>
  );
};

export default IntakeOverview;
