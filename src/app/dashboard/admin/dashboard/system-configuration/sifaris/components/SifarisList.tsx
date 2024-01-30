"use client";
import React from "react";
import useFetchSifaris from "../utils/api/useFetchSifaris";
import DataTable from "@/components/Table/DataTable";
import { SifarisTableColumns } from "./SifarisTableColumns";
import { table } from "console";
import DataTablePagination from "@/components/Table/DataTablePagination";

const SifarisList = () => {
  const sifarisTypes = useFetchSifaris();

  if (sifarisTypes.isPending) {
    return <div>loading...</div>;
  }

  if (sifarisTypes.isError) {
    const error = sifarisTypes.error;
    if (error.response) {
      return (
        <div>error message from the server: {error.response.data.message}</div>
      );
    } else if (error.request) {
      return <div>something went wrong try again</div>;
    } else {
      return <div>something went wrong try again</div>;
    }
  }

  //   const transformedData = sifarisTypes.data.map(sifaris => {
  //     return {id: sifaris.id, sifarisName: sifaris.name}
  //   });

  return (
    <div>
      <DataTable
        // dataTableToolBar={(table) => (
        //   <OfficeTypeDataTableToolBar table={table} />
        // )}
        dataTablePagination={(table => <DataTablePagination table={table} />)}
        columns={SifarisTableColumns}
        data={sifarisTypes.data}
      />
    </div>
  );

  // return <div>sifaris</div>
};

export default SifarisList;
