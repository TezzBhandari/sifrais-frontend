"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  Table as TableType,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";

import ProvinceFilter from "@/app/dashboard/admin/dashboard/it-nagar/components/ProvinceFilter";
import React from "react";
import DataTablePagination from "./DataTablePagination";

interface DataTableProps<TData, TValue> {
  columns: Array<ColumnDef<TData, TValue>>;
  data: Array<TData>;
  dataTableToolBar?: (table: TableType<TData>) => React.ReactNode;
  dataTablePagination?: (table: TableType<TData>) => React.ReactNode;
}

function DataTable<TData, TValue>({
  columns: tableColumns,
  data: tableData,
  dataTableToolBar,
  dataTablePagination,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  // create table instance
  const table = useReactTable<TData>({
    data: tableData,
    columns: tableColumns,
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    // state of the table
    // state: {
    //   // filtering input synchornization with the tanstack table
    //   globalFilter: filtering,
    // },
    // added for enabling pagination features
    getPaginationRowModel: getPaginationRowModel(),

    getFilteredRowModel: getFilteredRowModel(),

    // to get the model data
    getCoreRowModel: getCoreRowModel(),
    // added for enabling pagination features
    // getPaginationRowModel: getPaginationRowModel(),

    // // added for enabling filters
    // getFilteredRowModel: getFilteredRowModel(),
    // // synchronizing the input filter state to filter inside the table
    // onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="space-y-4   ">
      {/* FILTER SECTION BASED ON PROVINCES DISTRICT */}
      <div className="filter-container mx-auto container  bg-white rounded-lg px-6 py-4 grid grid-cols-[1fr_max-content]">
        {/* FILTER OPTIONS SECTION  */}
        <div className="filter-otions-wrapper flex items-center px-12 flex-wrap justify-between">
          <div className="province-filter">
            <ProvinceFilter />
          </div>
          <div className="district-filter">
            <ProvinceFilter />
          </div>
          <div className="ward-filter">
            <ProvinceFilter />
          </div>
          <div className="province-filter">
            <ProvinceFilter />
          </div>
        </div>
        {/* FILTER BUTTON SECTION  */}
        <div className="filter-button-wrapper flex items-center space-x-4">
          {/* FILTER CLEAR BUTTON SECTION  */}
          <div className="clear-button">
            <button className="px-4 py-2.5 rounded-xl border-[1.5px] border-[#ACB1C6]">
              {/* <Image src={ClearIcon} alt={"clear button icon"} /> */}
              clear
            </button>
          </div>

          {/* APPLY FILTER BUTTON SECTION  */}
          <div className="filter-button ">
            <button className="bg-[#002147] py-3 px-5 capitalize font-medium text-sm gap-2 rounded-xl text-white">
              apply filter
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-[#fff] rounded-[20px] p-6">
        {/* TABLE TOOLBAR  */}

        {dataTableToolBar === undefined ? null : dataTableToolBar(table)}

        {/* TABLE  */}
        {/* TABLE HEADER  */}
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
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

          {/* TABLE BODY  */}

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={tableColumns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {/* TABLE PAGINATION  */}
        {dataTablePagination === undefined ? <DataTablePagination table={table} /> : dataTablePagination(table)}
      </div>
    </div>
  );
}

export default DataTable;
