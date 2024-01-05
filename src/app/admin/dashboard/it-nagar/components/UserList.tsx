"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";
import SelectInput from "./SelectInput";
import Image from "next/image";

import { useTableFilterInputStore } from "@/store/tableFilterInputStore";
import PaginationFirstPageNavigation from "../../../../../../public/assets/logo/PaginationFirstPageNavigation.svg";
import PaginationPreviousPage from "../../../../../../public/assets/logo/PaginationPreviousPage.svg";
import PaginationNextPage from "../../../../../../public/assets/logo/PaginationNextPage.svg";
import PaginationLastPage from "../../../../../../public/assets/logo/PaginationLastPage.svg";

interface DataTableProps<TData, TValue> {
  tableColumns: ColumnDef<TData, TValue>[];
  tableData: TData[];
}

function UserList<TData, TValue = any>({
  tableColumns,
  tableData,
}: DataTableProps<TData, TValue>) {
  // filter state form zustand store for filtering table by name, phonenumber, address
  const { filtering, setFiltering } = useTableFilterInputStore();
  // table data
  const [data, setData] = useState(tableData);

  const table = useReactTable<TData>({
    data: data,
    columns: tableColumns,
    // state of the table
    state: {
      globalFilter: filtering,
    },

    // to get the model data
    getCoreRowModel: getCoreRowModel(),
    // added for enabling pagination features
    getPaginationRowModel: getPaginationRowModel(),

    // added for enabling filters
    getFilteredRowModel: getFilteredRowModel(),
    // synchronizing the input filter state to filter inside the table
    onGlobalFilterChange: setFiltering,
  });

  // page size slect handler
  function SelectChangeHandler(value: string) {
    table.setPageSize(Number(value));
  }

  return (
    <div className="w-full">
      <table className="w-full">
        {/* TABLE HEADER  */}
        <thead className="border-b border-[#F0F0F2]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="text-left  text-[#9291A5] text-sm font-medium py-3 uppercase"
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* TABLE BODY  */}
        <tbody className="">
          {table.getRowModel().rows.map((bodyRow) => {
            return (
              <tr
                key={bodyRow.id}
                className="hover:shadow-lg hover:cursor-pointer hover:scale-y-110"
              >
                {bodyRow.getVisibleCells().map((visibleCell) => {
                  return (
                    <td
                      className="text-left text-[#1D1C2B] text-sm py-1 font-normal"
                      key={visibleCell.id}
                    >
                      {flexRender(
                        visibleCell.column.columnDef.cell,
                        visibleCell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* PAGINATION  */}
      <div className="pagination-container flex items-center justify-between mt-14 text-[0.875rem] text-[#002147]">
        <div className="page-count-wrapper flex items-center gap-1">
          <p>Row per page{": "}</p>
          {/* SELECT PAGE SIZE SECTION  */}
          <SelectInput
            onValueChange={SelectChangeHandler}
            options={[10, 20, 30, 40, 50].map((value) => ({
              id: value.toString(),
              displayName: value.toString(),
            }))}
            value={table.getState().pagination.pageSize.toString()}
            id="pageSize"
          />
        </div>
        <div className="pagination-nav-container flex items-center justify-between space-x-8">
          <div className="pagination-info">
            <p>
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </p>
          </div>
          <div className="pagination-button flex gap-5 items-center">
            <button
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              aria-disabled={!table.getCanPreviousPage()}
              className="px-3 py-3 bg-white shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] rounded-lg"
            >
              <Image
                src={PaginationFirstPageNavigation}
                alt="Navigate Fist Page Button"
              />
            </button>
            {/* previous page  */}
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-disabled={!table.getCanPreviousPage()}
              className="px-3 py-3 bg-white shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] rounded-lg"
            >
              <Image
                src={PaginationPreviousPage}
                alt={"pagination previous page navigation button logo"}
              />
            </button>

            {/* Next Page Button  */}
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-disabled={!table.getCanNextPage()}
              className="px-3 py-3 bg-white shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] rounded-lg"
            >
              <Image
                src={PaginationNextPage}
                alt={"Next Page Pagination Button Logo"}
              />
            </button>
            {/* LAST PAGE BUTTON  */}
            <button
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
              aria-disabled={!table.getCanNextPage()}
              className="px-3 py-3 bg-white shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] rounded-lg"
            >
              <Image
                src={PaginationLastPage}
                alt="Pagination Last Page Button Logo"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
