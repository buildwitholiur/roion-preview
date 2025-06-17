import { mockLeads } from "@/data/mock-leads";
import type { Lead, LeadFormData } from "@/types/types";
import { combineNames, splitFullName } from "@/lib/utils";
import { useCallback, useState } from "react";

export function useLeadsTable() {
  const [leads, setLeads] = useState<Lead[]>(mockLeads);
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [editingData, setEditingData] = useState<Record<string, LeadFormData>>(
    {}
  );

  const handleRowExpand = useCallback(
    (rowId: string) => {
      const newExpandedRows = new Set<string>();

      if (!expandedRows.has(rowId)) {
        newExpandedRows.add(rowId);

        const lead = leads.find((l) => l.id.toString() === rowId);
        if (lead && !editingData[rowId]) {
          const { firstName, lastName } = splitFullName(lead.full_name);

          setEditingData((prev) => ({
            ...prev,
            [rowId]: {
              firstName,
              lastName,
              date: lead.date,
              phone_number: lead.phone_number,
              marketing_source: lead.marketing_source,
              lead_value: (lead.lead_value / 100).toString(),
              additional_notes: lead.additional_notes,
            },
          }));
        }
      }

      setExpandedRows(newExpandedRows);
    },
    [expandedRows, leads, editingData]
  );

  // ADDED: New function to handle row deletion
  const handleDeleteRow = useCallback(
    (rowId: string) => {
      // Remove from leads array
      setLeads((prev) => prev.filter((lead) => lead.id.toString() !== rowId));

      // Clean up expanded rows
      const newExpandedRows = new Set(expandedRows);
      newExpandedRows.delete(rowId);
      setExpandedRows(newExpandedRows);

      // Clean up editing data
      setEditingData((prev) => {
        const newData = { ...prev };
        delete newData[rowId];
        return newData;
      });

      console.log("Row deleted:", rowId);
    },
    [expandedRows]
  );

  const handleSave = useCallback(
    (leadId: string) => {
      const formData = editingData[leadId];
      if (!formData) return;

      setLeads((prev) =>
        prev.map((lead) =>
          lead.id.toString() === leadId
            ? {
                ...lead,
                full_name: combineNames(formData.firstName, formData.lastName),
                date: formData.date,
                phone_number: formData.phone_number,
                marketing_source: formData.marketing_source,
                lead_value:
                  Math.round(Number.parseFloat(formData.lead_value) * 100) || 0,
                additional_notes: formData.additional_notes,
              }
            : lead
        )
      );

      const newExpandedRows = new Set(expandedRows);
      newExpandedRows.delete(leadId);
      setExpandedRows(newExpandedRows);
    },
    [editingData, expandedRows]
  );

  const updateEditingData = useCallback(
    (leadId: string, field: keyof LeadFormData, value: string) => {
      setEditingData((prev) => ({
        ...prev,
        [leadId]: {
          ...prev[leadId],
          [field]: value,
        },
      }));
    },
    []
  );

  return {
    leads,
    expandedRows,
    editingData,
    handleRowExpand,
    handleSave,
    updateEditingData,
    handleDeleteRow,
  };
}
