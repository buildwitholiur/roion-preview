import { homeAlertData } from "@/data/homeAlertData";
import HomeAlertCard from "./HomeAlertCard";

const HomeAlertBlock = () => {
  return (
    <div className="w-full xl:max-w-[400px] bg-custom-white p-5 rounded-lg border border-custom-gray-100 custom__shadow">
      <div className="flex border-b border-custom-gray-200 pb-2.5 mb-2.5 gap-3 flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="text-font-20 text-custom-gray-600">Alerts</h2>
      </div>

      <div className="space-y-4">
        {homeAlertData.map((item, index) => (
          <HomeAlertCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default HomeAlertBlock;
