import CaseIntakeBlock from "@/components/Dashboard/CaseSync/CaseIntakeBlock/CaseIntakeBlock";
import CaseTopBar from "@/components/Dashboard/CaseSync/CaseTopBar";

import DashboardNavigation from "@/components/shared/DashboardNavigation";
import MatchReportTable from "@/components/tables/MatchReportTable/MatchReportTable";

const CaseSyncPage = () => {
  return (
    <div className="p-5 md:p-7.5 md:pb-40 space-y-5 md:space-y-7.5">
      <CaseTopBar
        title="CaseSync"
        titleSmall="TM"
        description1="CaseSyncAI automatically matches your scored leads to actual cases using your CRM or uploaded spreadsheets — updating daily. "
        description2="It tracks estimated and actual case values to show your true marketing ROI."
      />

      <DashboardNavigation />

      <CaseIntakeBlock />

      <MatchReportTable />
    </div>
  );
};

export default CaseSyncPage;
