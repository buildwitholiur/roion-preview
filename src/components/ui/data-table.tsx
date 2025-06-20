import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pagination } from "./pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import SheetButton from "../shared/SheetButton";
import { matchTableStatus } from "@/data/match-table-status";
import { matchReportSelectOptions } from "@/data/selectOptions";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  title?: string;
  searchPlaceholder?: string;
  expandedRows?: Set<string>;
  onRowExpand?: (rowId: string) => void;
  renderExpandedRow?: (row: TData) => React.ReactNode;
  showSearch?: boolean;
  showPagination?: boolean;
  children?: (props: { table: any }) => React.ReactNode;
  onRowClick?: (rowId: string) => void;
  tableType?: "leads" | "match-report";
}

export function DataTable<TData, TValue>({
  columns,
  data,
  title,
  searchPlaceholder = "Search...",
  onRowClick,
  expandedRows,
  renderExpandedRow,
  showSearch = true,
  showPagination = true,
  children,
  tableType = "leads",
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("");

  const filteredData = React.useMemo(() => {
    if (
      tableType !== "match-report" ||
      statusFilter === "" ||
      statusFilter === "all"
    )
      return data;
    return data.filter((item: any) => item.status === statusFilter);
  }, [data, statusFilter, tableType]);

  const table = useReactTable({
    data: filteredData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
  });

  // If children render prop is provided, use it
  if (children) {
    return <div className="w-full">{children({ table })}</div>;
  }

  const renderMatchReportHeader = () => (
    <div
      className={`flex flex-col md:flex-row md:items-center gap-3 md:gap-5 md:justify-between ${
        showSearch ? "mb-5" : "mb-2.5"
      }`}
    >
      <div className="flex-1 flex flex-col md:flex-row md:items-center">
        {title && (
          <h2 className="text-font-18 md:text-font-20 font-bold text-custom-gray-600 mr-5">
            {title}
          </h2>
        )}

        {showSearch && (
          <div className="relative w-full max-w-[334px]">
            <img
              className="absolute left-5 top-1/2 transform -translate-y-1/2 w-4.5 h-auto"
              src="/images/search.svg"
              alt="search"
            />

            <Input
              placeholder={searchPlaceholder}
              value={globalFilter}
              onChange={(event) => setGlobalFilter(event.target.value)}
              className="pl-12"
            />
          </div>
        )}

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-fit md:min-w-[208px] min-h-[37px] ml-5">
            <SelectValue placeholder="Select Match Report" />

            <img
              className="w-3 h-auto"
              src="/images/select-arrow.svg"
              alt="select arrow"
            />
          </SelectTrigger>
          <SelectContent>
            {matchReportSelectOptions.map((option) => (
              <SelectItem key={option.label} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Status Badges */}
        <ul className="flex items-center gap-5 border-x border-custom-gray-200 px-[35px] mx-[35px]">
          {matchTableStatus.map((item) => (
            <li className="flex items-center gap-2.5">
              <span
                className={`w-4 aspect-square rounded-full ${item.bgColor}`}
              ></span>
              <p className={`${item.textColor}`}>{item.label}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Download Button */}
      <SheetButton label="Download Excel" icon="/images/file-lines.svg" />
    </div>
  );

  const renderLeadsHeader = () => (
    <div
      className={`flex flex-col md:flex-row md:items-center gap-3 md:gap-5 ${
        showSearch ? "mb-5" : "mb-2.5"
      }`}
    >
      {title && (
        <h2 className="text-font-18 md:text-font-20 font-bold text-custom-gray-600">
          {title}
        </h2>
      )}

      {showSearch && (
        <div className="relative w-full max-w-[334px]">
          <img
            className="absolute left-5 top-1/2 transform -translate-y-1/2 w-4.5 h-auto"
            src="/images/search.svg"
            alt="search"
          />

          <Input
            placeholder={searchPlaceholder}
            value={globalFilter}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="pl-12"
          />
        </div>
      )}
    </div>
  );

  return (
    <>
      {tableType === "match-report"
        ? renderMatchReportHeader()
        : renderLeadsHeader()}

      <div className="border border-custom-blue-50 custom__shadow--md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="bg-custom-white-300 hover:bg-custom-white-300 border-transparent"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={`font-medium text-gray-600 px-3 ${
                        tableType === "match-report" ? "h-14" : "h-12"
                      }`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => {
                const rowId = (row.original as any).id.toString();
                const isExpanded = expandedRows?.has(rowId);
                const status = (row.original as any).status;

                return (
                  <React.Fragment key={row.id}>
                    <TableRow
                      data-state={row.getIsSelected() && "selected"}
                      className={`border-custom-blue-50 h-16 cursor-pointer hover:bg-gray-50 ${
                        isExpanded
                          ? "border-b-0 relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-[3px] after:h-full after:bg-custom-blue"
                          : ""
                      } ${
                        status === "mismatched" &&
                        "bg-custom-orange-200 hover:bg-custom-orange-200"
                      } ${
                        status === "confirmed" &&
                        "bg-custom-green-200 hover:bg-custom-green-200"
                      } ${
                        status === "unassigned" &&
                        "bg-custom-gray-250 hover:bg-custom-gray-250"
                      }`}
                      onClick={() => onRowClick?.(rowId)}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="px-3">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                    {isExpanded && renderExpandedRow && (
                      <TableRow>
                        <TableCell colSpan={columns.length} className="p-0">
                          <div className="">
                            {renderExpandedRow(row.original)}
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {showPagination && table.getFilteredRowModel().rows.length > 0 && (
        <Pagination
          currentPage={table.getState().pagination.pageIndex + 1}
          totalPages={table.getPageCount()}
          onPageChange={(page) => table.setPageIndex(page - 1)}
          canPreviousPage={table.getCanPreviousPage()}
          canNextPage={table.getCanNextPage()}
          totalItems={table.getFilteredRowModel().rows.length}
        />
      )}
    </>
  );
}
