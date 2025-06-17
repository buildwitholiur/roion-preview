import type { MarketingSource } from "@/types/types";
import type { ColumnDef } from "@tanstack/react-table";

export const marketingColumns: ColumnDef<MarketingSource>[] = [
  {
    accessorKey: "channel",
    header: () => {
      return <button className="table__header-title ml-0">Channel</button>;
    },
    cell: ({ row }) => (
      <div className="font-bold text-custom-blue uppercase text-font-16">
        {row.getValue("channel")}
      </div>
    ),
  },
  {
    accessorKey: "total_leads",
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
      <div className="text-center text-font-16 font-medium">
        {row.getValue("total_leads")}
      </div>
    ),
  },
  {
    accessorKey: "average_talk_time",
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
      <div className="text-center text-font-16 font-medium">
        {row.getValue("average_talk_time")}
      </div>
    ),
  },
  {
    accessorKey: "average_ring_time",
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
      <div className="text-center text-font-16 font-medium">
        {row.getValue("average_ring_time")}
      </div>
    ),
  },
  {
    accessorKey: "average_intentoi_score",
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
      const score = row.getValue("average_intentoi_score") as number;
      return (
        <div className="bg-custom-blue w-10 h-auto aspect-square rounded-full flex items-center justify-center mx-auto">
          <p className="font-bold text-custom-white">{score}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "average_lead_value",
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
      const value = row.getValue("average_lead_value") as number;
      return (
        <div className="text-center text-font-16 font-medium">
          ${value.toLocaleString()}
        </div>
      );
    },
  },
  {
    accessorKey: "total_lead_value",
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
      const value = row.getValue("total_lead_value") as number;
      return (
        <div className="text-center text-font-16 font-medium">
          ${value.toLocaleString()}
        </div>
      );
    },
  },
];
