import IntentCard from "@/components/shared/IntentCard";
import CallsOverview from "./CallsOverview";
import FormsOverview from "./FormsOverview";
import ChatsOverview from "./ChatsOverview";

const CallFormChatBlock = () => {
  return (
    <section className="flex flex-col xl:flex-row gap-7.5 min-h-[545px]">
      {/* Intake Overview */}
      <IntentCard title="Calls Overview" content={<CallsOverview />} />
      <IntentCard title="Forms Overview" content={<FormsOverview />} />
      <IntentCard title="Live Chats Overview" content={<ChatsOverview />} />
      {/* Intake Overview */}
    </section>
  );
};

export default CallFormChatBlock;
