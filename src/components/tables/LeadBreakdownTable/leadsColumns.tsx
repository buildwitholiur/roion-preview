import type { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import type { Lead } from "@/types/types";

interface LeadsColumnsProps {
  expandedRows: Set<string>;
  onRowExpand: (rowId: string) => void;
}

export function leadsColumns({
  expandedRows,
  onRowExpand,
}: LeadsColumnsProps): ColumnDef<Lead>[] {
  return [
    {
      id: "select",

      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "full_name",
      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="table__header-title ml-0"
          >
            Name
            <img
              className="w-fit h-3"
              src="/images/table-sort.svg"
              alt="table sort"
            />
          </button>
        );
      },
      cell: ({ row }) => (
        <div className="font-medium text-font-16">
          {row.getValue("full_name")}
        </div>
      ),
    },
    {
      accessorKey: "date",
      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="table__header-title"
          >
            Date
            <img
              className="w-fit h-3"
              src="/images/table-sort.svg"
              alt="table sort"
            />
          </button>
        );
      },
      cell: ({ row }) => (
        <div className="text-center font-medium text-font-16">
          {row.getValue("date")}
        </div>
      ),
    },
    {
      accessorKey: "phone_number",
      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="table__header-title"
          >
            Number
            <img
              className="w-fit h-3"
              src="/images/table-sort.svg"
              alt="table sort"
            />
          </button>
        );
      },
      cell: ({ row }) => (
        <div className="text-center font-medium text-font-16">
          {row.getValue("phone_number")}
        </div>
      ),
    },
    {
      accessorKey: "marketing_source",
      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="table__header-title"
          >
            Source
            <img
              className="w-fit h-3"
              src="/images/table-sort.svg"
              alt="table sort"
            />
          </button>
        );
      },
      cell: ({ row }) => (
        <div className="text-center font-medium text-font-16">
          {row.getValue("marketing_source")}
        </div>
      ),
    },
    {
      accessorKey: "intent_score",
      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="table__header-title"
          >
            IntentOI Score
            <img
              className="w-fit h-3"
              src="/images/table-sort.svg"
              alt="table sort"
            />
          </button>
        );
      },
      cell: ({ row }) => {
        const { intent_score, intent_score_bg } = row.original;

        const bgColorMap: Record<"green" | "yellow" | "red", string> = {
          green: "bg-custom-teal-100",
          yellow: "bg-custom-orange-500",
          red: "bg-custom-red",
        };

        const bgClass = bgColorMap[intent_score_bg] ?? "bg-gray-400";

        return (
          <div
            className={`${bgClass} w-10 h-auto aspect-square rounded-full flex items-center justify-center mx-auto`}
          >
            <p className="font-bold text-custom-white">{intent_score}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "lead_value",
      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="table__header-title"
          >
            Potential Value
            <img
              className="w-fit h-3"
              src="/images/table-sort.svg"
              alt="table sort"
            />
          </button>
        );
      },
      cell: ({ row }) => {
        const value = row.getValue("lead_value") as number;
        return (
          <div className="flex items-center justify-center gap-2.5">
            <span>${(value / 100).toLocaleString()}</span>
            <img
              className="w-1 h-auto"
              src="/images/vertical-dots.svg"
              alt="dots"
            />
          </div>
        );
      },
    },
    {
      id: "expand",
      header: "",
      cell: ({ row }) => {
        const rowId = (row.original as Lead).id.toString();
        const isExpanded = expandedRows?.has(rowId);
        return (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRowExpand(rowId);
            }}
            className="h-8 w-8 p-0"
          >
            <img
              className={`w-3 h-auto transition-transform ${
                isExpanded ? "-rotate-180" : ""
              }`}
              src="/images/down-arrow.svg"
              alt="down arrow"
            />
          </button>
        );
      },
      enableSorting: false,
      enableHiding: false,
    },
  ];
}
