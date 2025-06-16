import type { MarketingSource } from "@/types/types";
import type { ColumnDef } from "@tanstack/react-table";

export const marketingColumns: ColumnDef<MarketingSource>[] = [
  {
    accessorKey: "channel",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="table__header-title ml-0"
        >
          Channel
          <img src="/images/table-sort.svg" alt="table sort" />
        </button>
      );
    },
    cell: ({ row }) => (
      <div className="font-bold text-custom-blue uppercase text-font-16 px-3">
        {row.getValue("channel")}
      </div>
    ),
  },
  {
    accessorKey: "totalLeads",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="table__header-title"
        >
          Total Leads
          <img src="/images/table-sort.svg" alt="table sort" />
        </button>
      );
    },
    cell: ({ row }) => (
      <div className="text-center text-font-16">
        {row.getValue("totalLeads")}
      </div>
    ),
  },
  {
    accessorKey: "avgTalkTime",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="table__header-title"
        >
          Avg Talk Time
          <img src="/images/table-sort.svg" alt="table sort" />
        </button>
      );
    },
    cell: ({ row }) => (
      <div className="text-center text-font-16">
        {row.getValue("avgTalkTime")}
      </div>
    ),
  },
  {
    accessorKey: "ringTime",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="table__header-title"
        >
          Ring Time
          <img src="/images/table-sort.svg" alt="table sort" />
        </button>
      );
    },
    cell: ({ row }) => (
      <div className="text-center text-font-16">{row.getValue("ringTime")}</div>
    ),
  },
  {
    accessorKey: "avgIntent",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="table__header-title"
        >
          Avg Intent
          <img src="/images/table-sort.svg" alt="table sort" />
        </button>
      );
    },
    cell: ({ row }) => {
      const score = row.getValue("avgIntent") as number;
      return (
        <div className="flex justify-center">
          <div className="bg-custom-blue py-2 px-[11px] rounded-[60px]">
            <p className="font-bold text-custom-white">{score}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "avgValue",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="table__header-title"
        >
          Avg Value
          <img src="/images/table-sort.svg" alt="table sort" />
        </button>
      );
    },
    cell: ({ row }) => {
      const value = row.getValue("avgValue") as number;
      return (
        <div className="text-center text-font-16">
          ${value.toLocaleString()}
        </div>
      );
    },
  },
  {
    accessorKey: "totalValue",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="table__header-title"
        >
          Actions
          <img src="/images/table-sort.svg" alt="table sort" />
        </button>
      );
    },
    cell: ({ row }) => {
      const value = row.getValue("totalValue") as number;
      return (
        <div className="text-center text-font-16">
          ${value.toLocaleString()}
        </div>
      );
    },
  },
];
