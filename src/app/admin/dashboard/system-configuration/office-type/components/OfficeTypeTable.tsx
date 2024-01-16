"use client";
import DataTable from "@/components/Table/DataTable";
import QueryOfficeType from "../../../it-nagar/create-user/utils/api/QueryOfficeType";
import { OfficeType } from "../types";
import DataTableSkeleton from "@/components/Table/DataTableSkeleton";
import { officeTypeTableColumns } from "./OfficeTypeTableColumns";

const OfficeTypeTable = () => {
  const { isLoading, data: officeTypes, isError } = QueryOfficeType();
  if (isLoading) {
    return <DataTableSkeleton />;
  }

  if (officeTypes === undefined || isError) {
    return <div>invalid data or failed to fetchdata</div>;
  }
  return <DataTable columns={officeTypeTableColumns} data={officeTypes} />;
};

export default OfficeTypeTable;
