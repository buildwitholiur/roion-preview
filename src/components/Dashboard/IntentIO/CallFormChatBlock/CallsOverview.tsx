import IntentStatItem from "../IntentStatItem";

const CallsOverview = () => {
  return (
    <div className="space-y-5">
      <IntentStatItem
        label="Total Calls"
        value="728"
        percentChange={11}
        trend="down"
        comparisonLabel="vs 778"
      />

      <IntentStatItem
        label="Average Call Time"
        value="3m 31s"
        percentChange={4}
        trend="down"
        comparisonLabel="vs 3m 41s"
      />

      <IntentStatItem
        label="Missed Calls"
        value="3m 31s"
        percentChange={2}
        trend="up"
        comparisonLabel="vs 19"
      />
    </div>
  );
};

export default CallsOverview;
