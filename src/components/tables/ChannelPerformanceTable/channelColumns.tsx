import type { Channel } from "@/types/types";
import type { ColumnDef } from "@tanstack/react-table";

export const channelColumns: ColumnDef<Channel>[] = [
  {
    accessorKey: "channel",
    header: () => {
      return <button className="table__header-title ml-0">Channel</button>;
    },
    cell: ({ row }) => (
      <div className="text-font-16 font-medium">{row.getValue("channel")}</div>
    ),
  },
  {
    accessorKey: "leads",
    header: () => {
      return <button className="table__header-title">Leads</button>;
    },
    cell: ({ row }) => (
      <div className="text-center text-font-16 font-medium">
        {row.getValue("leads")}
      </div>
    ),
  },
  {
    accessorKey: "cases",
    header: () => {
      return <button className="table__header-title">Cases</button>;
    },
    cell: ({ row }) => (
      <div className="text-center text-font-16 font-medium">
        {row.getValue("cases")}
      </div>
    ),
  },
  {
    accessorKey: "match",
    header: () => {
      return <button className="table__header-title">Match %</button>;
    },
    cell: ({ row }) => (
      <div className="text-center text-font-16 font-medium">
        {row.getValue("match")}
      </div>
    ),
  },
  {
    accessorKey: "estimated_value",
    header: () => {
      return <button className="table__header-title">Estimated Value</button>;
    },
    cell: ({ row }) => {
      const value = row.getValue("estimated_value") as number;
      return (
        <div className="text-center text-font-16 font-medium">
          ${value.toLocaleString()}
        </div>
      );
    },
  },
  {
    accessorKey: "actual_value",
    header: () => {
      return <button className="table__header-title">Actual Value</button>;
    },
    cell: ({ row }) => {
      const value = row.getValue("actual_value") as number;
      return (
        <div className="text-center text-font-16 font-medium">
          ${value.toLocaleString()}
        </div>
      );
    },
  },
  {
    accessorKey: "roi_accuracy",
    header: () => {
      return <button className="table__header-title">ROI Accuracy</button>;
    },
    cell: ({ row }) => (
      <div className="text-center text-font-16 font-medium">
        {row.getValue("roi_accuracy")}
      </div>
    ),
  },
];
