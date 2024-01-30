"use client";
import DataTable from "@/components/Table/DataTable";
import QueryOfficeType from "../../../it-nagar/create-user/utils/api/QueryOfficeType";
import DataTableSkeleton from "@/components/Table/DataTableSkeleton";
import { officeTypeTableColumns } from "./OfficeTypeTableColumns";
import OfficeTypeDataTableToolBar from "./OfficeTypeDataTableToolBar";
import DataTablePagination from "@/components/Table/DataTablePagination";

const OfficeTypeTable = () => {
  const { isLoading, data: officeTypes, isError } = QueryOfficeType();
  if (isLoading) {
    return <DataTableSkeleton />;
  }

  if (officeTypes === undefined || isError) {
    return <div>invalid data or failed to fetchdata</div>;
  }
  return (
    <DataTable
      dataTableToolBar={(table) => <OfficeTypeDataTableToolBar table={table} />}
      dataTablePagination={(table => <DataTablePagination table={table} />)}
      columns={officeTypeTableColumns}
      data={officeTypes}
    />
  );
};

export default OfficeTypeTable;
