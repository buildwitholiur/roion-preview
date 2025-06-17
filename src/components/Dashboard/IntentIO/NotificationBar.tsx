import type { NotificationBarProps } from "@/types/types";

const NotificationBar = ({ description }: NotificationBarProps) => {
  return (
    <div className="bg-custom-blue-100 p-5 md:p-7.5 rounded-lg">
      <h3 className="text-font-20 md:text-font-24 text-custom-blue-400">
        {description}
      </h3>
    </div>
  );
};

export default NotificationBar;
