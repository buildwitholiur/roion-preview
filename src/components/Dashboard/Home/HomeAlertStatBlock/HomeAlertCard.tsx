import { homeAlertTypeStyles } from "@/data/homeAlertTypeStyles";
import type { HomeAlertData } from "@/types/types";

const HomeAlertCard = ({
  title,
  description,
  date,
  alertType,
}: HomeAlertData) => {
  const style = homeAlertTypeStyles[alertType];

  return (
    <div className={`p-5 ${style.bgColor}`}>
      <h3 className="text-font-20">{title}</h3>
      <p>{description}</p>

      <p className="italic mt-5">{date}</p>
    </div>
  );
};

export default HomeAlertCard;
