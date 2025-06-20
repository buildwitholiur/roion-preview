import { DataTable } from "@/components/ui/data-table";
import { marketingColumns } from "./marketingColumns";
import { useState } from "react";
import type { MarketingSource } from "@/types/types";
import { mockMarketingSources } from "@/data/mock-marketing-sources";

const MarketingBreakdownTable = () => {
  const [sources] = useState<MarketingSource[]>(mockMarketingSources);

  return (
    <div className="custom__card custom__shadow p-5 md:p-7.5">
      <DataTable
        columns={marketingColumns}
        data={sources}
        title="Marketing Source Breakdown"
        searchPlaceholder="Search channels..."
        showSearch={false}
        showPagination={false}
      />
    </div>
  );
};

export default MarketingBreakdownTable;
