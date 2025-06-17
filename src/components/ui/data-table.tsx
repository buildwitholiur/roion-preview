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
import { ChevronDown } from "lucide-react";

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
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data,
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

  return (
    <>
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
                      className="font-medium text-gray-600 px-3 h-12"
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

                return (
                  <React.Fragment key={row.id}>
                    <TableRow
                      data-state={row.getIsSelected() && "selected"}
                      className={`border-custom-blue-50 h-16 cursor-pointer hover:bg-gray-50 ${
                        isExpanded
                          ? "border-b-0 relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-[3px] after:h-full after:bg-custom-blue"
                          : ""
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
