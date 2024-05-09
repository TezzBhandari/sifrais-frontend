import React from 'react'
import { Table } from '@tanstack/react-table';
import Image from 'next/image';


import PaginationFirstPageNavigation from "@/../public/assets/logo/PaginationFirstPageNavigation.svg"
import PaginationPreviousPage from "@/../public/assets/logo/PaginationPreviousPage.svg"
import PaginationNextPage from "@/../public/assets/logo/PaginationNextPage.svg"
import PaginationLastPage from "@/../public/assets/logo/PaginationLastPage.svg"
import SelectInput from '@/app/dashboard/admin/dashboard/it-nagar/components/SelectInput';


interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {

  function SelectChangeHandler(value: string) {
    table.setPageSize(Number(value));
  }

  return (
    <div>
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
  )
}

export default DataTablePagination