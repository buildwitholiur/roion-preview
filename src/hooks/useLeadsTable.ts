import * as React from "react";
import { mockLeads } from "@/data/mock-leads";
import type { Lead, LeadFormData } from "@/types/types";
import { combineNames, splitFullName } from "@/lib/utils";

export function useLeadsTable() {
  const [leads, setLeads] = React.useState<Lead[]>(mockLeads);
  const [expandedRows, setExpandedRows] = React.useState<Set<string>>(
    new Set()
  );
  const [editingData, setEditingData] = React.useState<
    Record<string, LeadFormData>
  >({});

  const handleRowExpand = React.useCallback(
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

  const handleSave = React.useCallback(
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

  const updateEditingData = React.useCallback(
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
  };
}
