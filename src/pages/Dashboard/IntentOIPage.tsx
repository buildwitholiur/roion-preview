import IntakeCall from "@/components/Dashboard/IntentIO/IntakeCall/IntakeCall";
import IntentTopBar from "@/components/Dashboard/IntentIO/IntentTopBar";
import DashboardNavigation from "@/components/shared/DashboardNavigation";

const IntentOIPage = () => {
  return (
    <div className="p-7.5 space-y-7.5">
      <IntentTopBar
        intentLogo="/images/intentio.svg"
        intentLogoAlt="intentio logo"
        desc="IntentOI uses a predictive scoring model to estimate potential value
        based by connecting directly to your intake channels—calls, chats, and
        forms—to capture every inbound lead."
      />

      <DashboardNavigation />

      <IntakeCall />
    </div>
  );
};

export default IntentOIPage;
