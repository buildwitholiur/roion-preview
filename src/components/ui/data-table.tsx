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
import { ChevronDown, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pagination } from "./pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  title?: string;
  searchPlaceholder?: string;
  expandedRows?: Set<string>;
  onRowExpand?: (rowId: string) => void;
  renderExpandedRow?: (row: TData) => React.ReactNode;
  showSearch?: boolean;
  showColumnToggle?: boolean;
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
  showColumnToggle = true,
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
  const [statusFilter, setStatusFilter] = React.useState("all");

  const filteredData = React.useMemo(() => {
    if (tableType !== "match-report" || statusFilter === "all") return data;
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
      className={`flex flex-col md:flex-row md:items-center gap-3 md:gap-5 ${
        showSearch ? "mb-5" : "mb-2.5"
      }`}
    >
      {title && (
        <h2 className="text-font-18 md:text-font-20 font-bold text-custom-gray-600">
          {title}
        </h2>
      )}

      {(showSearch || showColumnToggle) && (
        <div className="flex items-center justify-between">
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

          {!showColumnToggle && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Select Match Report" />
              <ChevronDown className="ml-2 h-4 w-4" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Reports</SelectItem>
              <SelectItem value="mismatched">Mismatched Only</SelectItem>
              <SelectItem value="confirmed">Confirmed Only</SelectItem>
              <SelectItem value="unassigned">Unassigned Only</SelectItem>
            </SelectContent>
          </Select>

          {/* Status Badges */}
          <div className="flex items-center gap-2">
            <div className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-300">
              <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2" />
              Mismatched
            </div>
          </div>

          {/* Download Button */}
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-gray-50"
          >
            <Download className="w-4 h-4" />
            Download Excel
          </Button>
        </div>
      )}
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

      {(showSearch || showColumnToggle) && (
        <div className="flex items-center justify-between">
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

          {!showColumnToggle && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
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
