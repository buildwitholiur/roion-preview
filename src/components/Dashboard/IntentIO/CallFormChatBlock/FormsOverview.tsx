import AverageIntentStatItem from "../AverageIntentStatItem";
import IntentStatItem from "../IntentStatItem";

const FormsOverview = () => {
  return (
    <div className="space-y-5">
      <IntentStatItem
        label="Total Forms"
        value="12"
        percentChange={2}
        trend="up"
        comparisonLabel="vs 9"
      />

      <IntentStatItem
        label="High Intent Forms"
        value="2"
        percentChange={50}
        trend="up"
        comparisonLabel="vs 1"
        noSign
      />

      <AverageIntentStatItem
        label="Average Intent"
        percentChange={1}
        avgIntentNum={13}
        trend="up"
      />
    </div>
  );
};

export default FormsOverview;
