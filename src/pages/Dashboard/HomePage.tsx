import IntentTopBar from "@/components/Dashboard/IntentIO/IntentTopBar";

const HomePage = () => {
  return (
    <div className="p-5 md:p-7.5 space-y-5 md:space-y-7.5">
      <IntentTopBar
        intentLogo="/images/intentio.svg"
        intentLogoAlt="intentio logo"
        description="IntentOI uses a predictive scoring model to estimate potential value
        based by connecting directly to your intake channels—calls, chats, and
        forms—to capture every inbound lead."
      />
    </div>
  );
};

export default HomePage;
