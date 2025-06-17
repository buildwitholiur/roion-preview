import { DataTable } from "@/components/ui/data-table";
import { useLeadsTable } from "@/hooks/useLeadsTable";
import { useCallback, useMemo } from "react";
import type { Lead } from "@/types/types";
import { leadsColumns } from "./leadsColumns";
import { LeadExpandRow } from "./LeadExpanedRow";

const LeadBreakdownTable = () => {
  const {
    leads,
    expandedRows,
    editingData,
    handleRowExpand,
    handleSave,
    updateEditingData,
  } = useLeadsTable();

  const columns = useMemo(
    () => leadsColumns({ expandedRows, onRowExpand: handleRowExpand }),
    [expandedRows, handleRowExpand]
  );

  const renderExpandedRow = useCallback(
    (lead: Lead) => {
      const formData = editingData[lead.id];
      if (!formData) return null;

      return (
        <LeadExpandRow
          lead={lead}
          formData={formData}
          onUpdateField={(field, value) =>
            updateEditingData(lead.id.toString(), field, value)
          }
          onSave={() => handleSave(lead.id.toString())}
        />
      );
    },
    [editingData, updateEditingData, handleSave]
  );

  return (
    <div className="custom__card custom__shadow p-5 md:p-7.5">
      <DataTable
        columns={columns}
        data={leads}
        title="Leads Breakdown"
        searchPlaceholder="Search table"
        expandedRows={expandedRows}
        renderExpandedRow={renderExpandedRow}
        showSearch={true}
        showColumnToggle={true}
        showPagination={true}
      />
    </div>
  );
};

export default LeadBreakdownTable;
