import IntentSignalsCard from "./IntentSignalsCard";

const CallData = () => {
  return (
    <div className="space-y-4">
      <IntentSignalsCard
        label="High Intent"
        value={728}
        percentChange={16}
        trend="up"
        amount="$990,529.00"
        highlight="Strong case signals"
        description="Scored 60 – 100, based on high-urgency keywords, detailed case types, and full contact info. These should be prioritized for immediate follow-up."
        intentSignalType="high"
      />

      <IntentSignalsCard
        label="Mid Intent"
        value={39}
        percentChange={0.6}
        trend="up"
        amount="$438,455.78"
        highlight="Moderate signals"
        description="Scored 20 - 59, often missing urgency language or case clarity. May convert with nurturing or a second touchpoint."
        intentSignalType="mid"
      />

      <IntentSignalsCard
        label="Low Intent"
        value={214}
        percentChange={11.6}
        trend="up"
        highlight="Weak or irrelevant signals"
        description="Scored 0 – 19, these may include vendor spam, duplicate entries, or vaguet inquiries. Rarely worth follow-up."
        intentSignalType="low"
      />
    </div>
  );
};

export default CallData;
