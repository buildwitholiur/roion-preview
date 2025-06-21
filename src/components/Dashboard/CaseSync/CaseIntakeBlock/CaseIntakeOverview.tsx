import CaseStatItem from "../CaseStatItem";

const CaseIntakeOverview = () => {
  return (
    <div className="flex flex-col xl:flex-row">
      <CaseStatItem
        label="Total Cases Matched"
        value="12"
        percentChange={16}
        trend="up"
        comparisonLabel="vs 7"
      />

      <CaseStatItem
        label="% of Leads Matched"
        value="13%"
        valueColor="text-custom-green"
        percentChange={18}
        trend="down"
        comparisonLabel="vs"
        noParentheses
        noSign
      />

      <CaseStatItem
        label="Total Leads"
        value="$27,000"
        valueColor="text-custom-green"
        percentAmount="$31,000"
        trend="down"
        comparisonLabel="vs"
        noParentheses
        noSign
      />

      <CaseStatItem
        label="Total Leads"
        value="$8,000"
        valueColor="text-custom-green"
        percentAmount="$11,000"
        trend="down"
        comparisonLabel="vs"
        noParentheses
        noSign
      />
    </div>
  );
};

export default CaseIntakeOverview;
