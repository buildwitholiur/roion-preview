import CallFormChatBlock from "@/components/Dashboard/IntentIO/CallFormChatBlock/CallFormChatBlock";
import CallIntentBlock from "@/components/Dashboard/IntentIO/CallIntentBlock/CallIntentBlock";
import IntentTopBar from "@/components/Dashboard/IntentIO/IntentTopBar";

import NotificationBar from "@/components/Dashboard/IntentIO/NotificationBar";
import DashboardNavigation from "@/components/shared/DashboardNavigation";
import LeadBreakdownTable from "@/components/tables/LeadBreakdownTable/LeadBreakdownTable";
import MarketingBreakdownTable from "@/components/tables/MarketingBreakdownTable/MarketingBreakdownTable";

const IntentOIPage = () => {
  return (
    <div className="p-5 md:p-7.5 space-y-5 md:space-y-7.5">
      <IntentTopBar
        intentLogo="/images/intentio.svg"
        intentLogoAlt="intentio logo"
        description="IntentOI uses a predictive scoring model to estimate potential value
        based by connecting directly to your intake channels—calls, chats, and
        forms—to capture every inbound lead."
      />

      <DashboardNavigation />

      <CallIntentBlock />

      <NotificationBar
        description="Only 40% of law firms answered phone calls from potential clients during
        a secret shopper study, indicating a significant opportunity for firms
        to improve their responsiveness and capture more leads."
      />

      <CallFormChatBlock />

      <MarketingBreakdownTable />

      <LeadBreakdownTable />
    </div>
  );
};

export default IntentOIPage;
