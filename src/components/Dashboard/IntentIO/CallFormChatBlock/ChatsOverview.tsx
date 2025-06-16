import AverageIntentStatItem from "../AverageIntentStatItem";
import IntentStatItem from "../IntentStatItem";

const ChatsOverview = () => {
  return (
    <div className="space-y-5">
      <IntentStatItem
        label="Total Live Chats"
        value="44"
        percentChange={3}
        trend="down"
        comparisonLabel="vs 51"
      />

      <IntentStatItem
        label="High Intent Live Chats"
        value="3"
        percentChange={75}
        trend="up"
        comparisonLabel="vs 1"
        noSign
      />

      <AverageIntentStatItem
        label="Average Intent"
        percentChange={6}
        avgIntentNum={13}
        trend="down"
      />
    </div>
  );
};

export default ChatsOverview;
