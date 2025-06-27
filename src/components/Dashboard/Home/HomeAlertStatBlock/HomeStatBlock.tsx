import IntentCard from "@/components/shared/IntentCard";
import HomeStatCard from "../HomeStatCard";
import HomeCreditSummary from "./HomeCreditSummary";
import HomeMatchStatChart from "./HomeMatchStatChart";
import HomeLeadStatChart from "./HomeLeadStatChart";

const HomeStatBlock = () => {
  return (
    <div className="flex-1 p-5 rounded-lg border border-custom-gray-100 space-y-5">
      <div className="flex flex-col 2xl:flex-row gap-5">
        <HomeStatCard
          label="Total Leads"
          value="12"
          percentChange={16}
          trend="up"
          comparisonLabel="vs 7"
        />

        <HomeStatCard
          label="Total Cases"
          value="13"
          percentChange={18}
          trend="down"
          comparisonLabel="vs 17"
          noSign
        />

        <HomeStatCard
          label="ROI Accuracy"
          value="83%"
          percentChange={81}
          trend="up"
          comparisonLabel="vs"
          noParentheses
          noSign
          isHelp
        />
      </div>

      <div className="flex flex-col 2xl:flex-row gap-5">
        <HomeStatCard
          label="Total Estimated Value"
          value="$27,000"
          percentAmount="$31000"
          trend="up"
          comparisonLabel="vs"
          isHelp
          isBorder
          noParentheses
          noSign
        />

        <HomeStatCard
          label="Total Actual Value Reported"
          value="$8,000"
          percentAmount="$11,000"
          trend="up"
          comparisonLabel="vs"
          isBorder
          noParentheses
          noSign
        />
      </div>

      <div className="flex flex-col 2xl:flex-row gap-5">
        <HomeMatchStatChart />

        <IntentCard title="Credit Summary" content={<HomeCreditSummary />} />
      </div>

      <HomeLeadStatChart />
    </div>
  );
};

export default HomeStatBlock;
