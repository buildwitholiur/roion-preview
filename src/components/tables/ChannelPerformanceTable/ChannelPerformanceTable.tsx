import { DataTable } from "@/components/ui/data-table";
import { mockChannel } from "@/data/mock-channel";
import type { Channel } from "@/types/types";
import { useState } from "react";
import { channelColumns } from "./channelColumns";

const ChannelPerformanceTable = () => {
  const [channel] = useState<Channel[]>(mockChannel);

  return (
    <div className="custom__card custom__shadow p-5 md:p-7.5">
      <DataTable
        columns={channelColumns}
        data={channel}
        title="Channel Performance Breakdown"
        searchPlaceholder="Search channels..."
        showSearch={false}
        showPagination={false}
        tableType="leads"
        isSmallRow
      />
    </div>
  );
};

export default ChannelPerformanceTable;
