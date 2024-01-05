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
import { useTableFilterInputStore } from "@/store/tableFilterInputStore";

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.3586 10.6882L6.67051 6.00007L11.3586 1.31198C11.6096 1.06094 11.6096 0.653921 11.3586 0.40288C11.1076 0.151839 10.7005 0.151839 10.4495 0.40288L5.48868 5.3637C5.13722 5.71515 5.13722 6.28498 5.48868 6.63644L10.4495 11.5973C10.7005 11.8483 11.1076 11.8483 11.3586 11.5973C11.6096 11.3462 11.6096 10.9392 11.3586 10.6882ZM6.58516 10.6882L1.89707 6.00007L6.58516 1.31198C6.8362 1.06094 6.8362 0.653921 6.58516 0.40288C6.33412 0.151839 5.9271 0.151839 5.67606 0.40288L0.715241 5.3637C0.363785 5.71515 0.363783 6.28498 0.71524 6.63644L5.67606 11.5973C5.9271 11.8483 6.33412 11.8483 6.58516 11.5973C6.8362 11.3462 6.8362 10.9392 6.58516 10.6882Z"
                  fill="#002147"
                />
              </svg>
            </button>
            {/* previous page  */}
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-disabled={!table.getCanPreviousPage()}
              className="px-3 py-3 bg-white shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
              >
                <path
                  d="M6.5 1L1.67678 5.82322C1.57915 5.92085 1.57915 6.07915 1.67678 6.17678L6.5 11"
                  stroke="#002147"
                  stroke-width="1.25"
                  stroke-linecap="round"
                />
              </svg>
            </button>

            {/* Next Page Button  */}
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-disabled={!table.getCanNextPage()}
              className="px-3 py-3 bg-white shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
              >
                <path
                  d="M1.5 11L6.32322 6.17678C6.42085 6.07915 6.42085 5.92085 6.32322 5.82322L1.5 1"
                  stroke="#002147"
                  stroke-width="1.25"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            {/* LAST PAGE BUTTON  */}
            <button
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
              aria-disabled={!table.getCanNextPage()}
              className="px-3 py-3 bg-white shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.641455 1.31057L5.33077 5.99988L0.641455 10.6892C0.390348 10.9403 0.390348 11.3474 0.641455 11.5985C0.892561 11.8496 1.29968 11.8496 1.55079 11.5985L6.51291 6.63642C6.86445 6.28487 6.86446 5.7149 6.51291 5.36335L1.55079 0.401233C1.29968 0.150126 0.892561 0.150126 0.641455 0.401233C0.390349 0.652339 0.390349 1.05946 0.641455 1.31057ZM5.41489 1.31057L10.1042 5.99988L5.41489 10.6892C5.16379 10.9403 5.16379 11.3474 5.41489 11.5985C5.666 11.8496 6.07312 11.8496 6.32423 11.5985L11.2863 6.63642C11.6379 6.28487 11.6379 5.7149 11.2863 5.36335L6.32423 0.401233C6.07312 0.150127 5.666 0.150127 5.41489 0.401233C5.16379 0.652339 5.16379 1.05946 5.41489 1.31057Z"
                  fill="#002147"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
