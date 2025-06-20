import CaseIntakeBlock from "@/components/Dashboard/CaseSync/CaseIntakeBlock/CaseIntakeBlock";
import IntentTopBar from "@/components/Dashboard/IntentIO/IntentTopBar";
import DashboardNavigation from "@/components/shared/DashboardNavigation";
import MatchReportTable from "@/components/tables/MatchReportTable/MatchReportTable";

const CaseSyncPage = () => {
  return (
    <div className="p-5 md:p-7.5 md:pb-40 space-y-5 md:space-y-7.5">
      <IntentTopBar
        intentLogo="/images/intentio.svg"
        intentLogoAlt="intentio logo"
        description="IntentOI uses a predictive scoring model to estimate potential value
        based by connecting directly to your intake channels—calls, chats, and
        forms—to capture every inbound lead."
      />

      <DashboardNavigation />

      <CaseIntakeBlock />

      <MatchReportTable />
    </div>
  );
};

export default CaseSyncPage;
