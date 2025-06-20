import type { MatchReport, MatchReportFormData } from "@/types/types";
import { combineNames, splitFullName } from "@/lib/utils";
import { useCallback, useState } from "react";
import { mockMatchReports } from "@/data/mock-match-reports";

export function useMatchReportTable() {
  const [reports, setReports] = useState<MatchReport[]>(mockMatchReports);
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [editingData, setEditingData] = useState<
    Record<string, MatchReportFormData>
  >({});

  const handleRowExpand = useCallback(
    (rowId: string) => {
      const newExpandedRows = new Set<string>();

      if (!expandedRows.has(rowId)) {
        newExpandedRows.add(rowId);

        const report = reports.find((r) => r.id.toString() === rowId);

        if (report && !editingData[rowId]) {
          const { firstName, lastName } = splitFullName(report.full_name);

          setEditingData((prev) => ({
            ...prev,
            [rowId]: {
              firstName,
              lastName,
              date: report.date,
              phone_number: report.phone_number,
              intent_source: report.intent_source,
              real_source: report.real_source,
              matching_source: report.matching_source || "",
              actual_value: (report.actual_value / 100).toString(),
              potential_value: (report.potential_value / 100).toString(),
              additional_notes: report.additional_notes || "",
            },
          }));
        }
      }

      setExpandedRows(newExpandedRows);
    },
    [expandedRows, reports, editingData]
  );

  const handleDeleteRow = useCallback(
    (rowId: string) => {
      setReports((prev) =>
        prev.filter((report) => report.id.toString() !== rowId)
      );

      const newExpandedRows = new Set(expandedRows);

      newExpandedRows.delete(rowId);

      setExpandedRows(newExpandedRows);

      setEditingData((prev) => {
        const newData = { ...prev };
        delete newData[rowId];
        return newData;
      });
    },
    [expandedRows]
  );

  const handleSave = useCallback(
    (reportId: string) => {
      const formData = editingData[reportId];
      if (!formData) return;

      setReports((prev) =>
        prev.map((report) =>
          report.id.toString() === reportId
            ? {
                ...report,
                full_name: combineNames(formData.firstName, formData.lastName),
                date: formData.date,
                phone_number: formData.phone_number,
                intent_source: formData.intent_source,
                real_source: formData.real_source,
                matching_source: formData.matching_source,
                actual_value:
                  Math.round(Number.parseFloat(formData.actual_value) * 100) ||
                  0,
                potential_value:
                  Math.round(
                    Number.parseFloat(formData.potential_value) * 100
                  ) || 0,
                additional_notes: formData.additional_notes,
              }
            : report
        )
      );

      const newExpandedRows = new Set(expandedRows);
      newExpandedRows.delete(reportId);
      setExpandedRows(newExpandedRows);
    },
    [editingData, expandedRows]
  );

  const updateEditingData = useCallback(
    (reportId: string, field: keyof MatchReportFormData, value: string) => {
      console.log("Updating field:", reportId, field, value);

      setEditingData((prev) => ({
        ...prev,
        [reportId]: {
          ...prev[reportId],
          [field]: value,
        },
      }));
    },
    []
  );

  return {
    reports,
    expandedRows,
    editingData,
    handleRowExpand,
    handleSave,
    updateEditingData,
    handleDeleteRow,
  };
}
