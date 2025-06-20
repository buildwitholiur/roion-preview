import { DataTable } from "@/components/ui/data-table";
import { useCallback, useMemo } from "react";
import type { MatchReport } from "@/types/types";
import { matchReportColumns } from "./matchReportColumns";
import { MatchReportExpandRow } from "./MatchReportExpandRow";
import { useMatchReportTable } from "@/hooks/useMatchReportTable";

const MatchReportTable = () => {
  const {
    reports,
    expandedRows,
    editingData,
    handleRowExpand,
    handleSave,
    updateEditingData,
    handleDeleteRow,
  } = useMatchReportTable();

  const columns = useMemo(
    () =>
      matchReportColumns({
        expandedRows,
        onRowExpand: handleRowExpand,
        onDeleteRow: handleDeleteRow,
      }),
    [expandedRows, handleRowExpand, handleDeleteRow]
  );

  const renderExpandedRow = useCallback(
    (report: MatchReport) => {
      const formData = editingData[report.id.toString()];
      if (!formData) return null;

      return (
        <MatchReportExpandRow
          report={report}
          formData={formData}
          onUpdateField={(field, value) =>
            updateEditingData(report.id.toString(), field, value)
          }
          onSave={() => handleSave(report.id.toString())}
        />
      );
    },
    [editingData, updateEditingData, handleSave]
  );

  return (
    <div className="custom__card custom__shadow p-5 md:p-7.5">
      <DataTable
        columns={columns}
        data={reports}
        title="Marketing Source Breakdown"
        searchPlaceholder="Search table"
        expandedRows={expandedRows}
        renderExpandedRow={renderExpandedRow}
        showSearch={true}
        showPagination={true}
        onRowClick={handleRowExpand}
        tableType="match-report"
      />
    </div>
  );
};

export default MatchReportTable;
