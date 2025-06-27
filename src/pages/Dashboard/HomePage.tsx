import HomeAlertStatBlock from "@/components/Dashboard/Home/HomeAlertStatBlock/HomeAlertStatBlock";
import HomeTopBar from "@/components/Dashboard/Home/HomeTopBar";

import DashboardNavigation from "@/components/shared/DashboardNavigation";
import ChannelPerformanceTable from "@/components/tables/ChannelPerformanceTable/ChannelPerformanceTable";

const HomePage = () => {
  return (
    <div className="p-5 md:p-7.5 space-y-5 md:space-y-7.5">
      <HomeTopBar
        title="Welcome, Kevin"
        description="Last login: May 29, 2025, 5:10 PM ET"
      />

      <DashboardNavigation />

      <HomeAlertStatBlock />

      <ChannelPerformanceTable />
    </div>
  );
};

export default HomePage;
