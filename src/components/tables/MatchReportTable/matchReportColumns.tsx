import type { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import type { MatchReport } from "@/types/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface MatchReportColumnsProps {
  expandedRows: Set<string>;
  onRowExpand: (rowId: string) => void;
  onDeleteRow: (rowId: string) => void;
}

// Status indicator with proper icons
function getStatusIndicator(status: string) {
  switch (status) {
    case "mismatched":
      return (
        <img className="w-4 h-auto mt-1" src="/images/mismatch.png" alt="" />
      );
    case "confirmed":
      return (
        <img
          className="w-4 h-auto mt-1"
          src="/images/circle-check.png"
          alt=""
        />
      );
    case "unassigned":
      return <img className="w-4 h-auto mt-1" src="/images/clock.png" alt="" />;
    default:
      return null;
  }
}

// Action button with proper styling
function getActionButton(status: string) {
  if (status === "mismatched") {
    return <button className="custom__btn">Resolve</button>;
  }
  return <button className="custom__btn">Assign</button>;
}

export function matchReportColumns({
  expandedRows,
  onRowExpand,
  onDeleteRow,
}: MatchReportColumnsProps): ColumnDef<MatchReport>[] {
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
        <div className="font-medium text-font-16 text-custom-blue">
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
      cell: ({ row }) => {
        const date = new Date(row.getValue("date"));

        return (
          <div className="text-center font-medium text-font-16">
            {date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        );
      },
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
      accessorKey: "real_source",
      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="table__header-title leading-none"
          >
            <div className="space-y-1">
              <span className="block">Real Source</span>
              <span className="text-font-14 leading-none font-normal text-custom-blue-500 block">
                IntentOI Source
              </span>
            </div>
            <img
              className="w-fit h-3"
              src="/images/table-sort.svg"
              alt="table sort"
            />
          </button>
        );
      },
      cell: ({ row }) => {
        const status = row.original.status;

        return (
          <div className="flex items-start justify-center gap-2">
            {getStatusIndicator(status)}
            <div className="text-center">
              <div className="font-medium text-font-16">
                {row.getValue("real_source")}
              </div>
              <div className="text-font-14 italic font-normal">CTM</div>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "intent_score",
      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="table__header-title"
          >
            IntentOI
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
      accessorKey: "actual_value",
      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="table__header-title leading-none"
          >
            <div className="space-y-1">
              <span className="block">Actual Source</span>
              <span className="text-font-14 leading-none font-normal text-custom-blue-500 block">
                Potential Value
              </span>
            </div>
            <img
              className="w-fit h-3"
              src="/images/table-sort.svg"
              alt="table sort"
            />
          </button>
        );
      },
      cell: ({ row }) => {
        const actualValue = row.getValue("actual_value") as number;
        const potentialValue = row.original.potential_value;

        return (
          <div className="text-center">
            <div className="font-bold text-font-16 text-custom-gray">
              ${(actualValue / 100).toLocaleString()}
            </div>
            <div className="font-bold italic text-font-14 text-custom-gray">
              ${(potentialValue / 100).toLocaleString()}
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "actions",
      header: () => {
        return <button className="table__header-title">Action</button>;
      },
      cell: ({ row }) => {
        const rowId = row.original.id.toString();
        const status = row.original.status;
        const isExpanded = expandedRows?.has(rowId);

        return (
          <div className="flex items-center justify-center">
            {getActionButton(status)}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 focus-visible:outline-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    className="w-1 h-auto"
                    src="/images/vertical-dots.svg"
                    alt="dots"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteRow(rowId);
                  }}
                  className="text-red-600 focus:text-red-600 focus:bg-red-50"
                >
                  Delete Row
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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
          </div>
        );
      },
    },
  ];
}
