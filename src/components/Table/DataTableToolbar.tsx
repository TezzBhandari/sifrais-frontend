"use client";

import { Table } from "@tanstack/react-table";

import { InputField } from "../InputField";
import DynamicRouteHeader from "../DynamicRouteHeader";
import React from "react";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  toolBarHeader: React.ReactNode;
  showBreadCrumb?: boolean;
  buttonContent: React.ReactNode;
}

function DataTableToolbar<TData>({
  table,
  toolBarHeader,
  buttonContent,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  //   return (
  // <div className="flex items-center justify-between">
  //   <div className="flex flex-1 items-center space-x-2">
  //     <InputField
  //       placeholder="Filter tasks..."
  //       value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
  //       onChange={(event) =>
  //         table.getColumn("title")?.setFilterValue(event.target.value)
  //       }
  //       className="h-8 w-[150px] lg:w-[250px]"
  //     />
  {
    /* {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )}
     {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div> 
       <DataTableViewOptions table={table} /> 
//     </div>
     //   ); */
  }
  return (
    <div className="flex items-center border border-red-400">
      {/* header  */}
      <DynamicRouteHeader pageHeader={toolBarHeader} show={false} />
      {/* input filter  */}
      <div className=" flex-1 flex justify-center">
        <InputField className="max-w-lg w-full" placeholder="Search..." />
      </div>
      {/* button  */}
      <div className="add-button-container overflow-hidden">
        {buttonContent}
      </div>
    </div>
  );
}

export { DataTableToolbar };
