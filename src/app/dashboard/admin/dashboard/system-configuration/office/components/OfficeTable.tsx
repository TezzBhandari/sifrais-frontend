"use client";
import DataTable from "@/components/Table/DataTable";
import DataTableSkeleton from "@/components/Table/DataTableSkeleton";
import useQueryOffice from "../utils/api/useQueryOffice";
// import { officeTypeTableColumns } from "./OfficeTypeTableColumns";
// import OfficeTypeDataTableToolBar from "./OfficeTypeDataTableToolBar";

const OfficeTable = () => {


    const officeRes = useQueryOffice();

    if (officeRes.isPending) {
        return <DataTableSkeleton />;
    }

    if (officeRes.isError) {
        const error = officeRes.error;
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
    return (
        <DataTable
            // dataTableToolBar={(table) => <OfficeTypeDataTableToolBar table={table} />}
            columns={officeTypeTableColumns}
            data={officeRes.data}
        />
    );
};

export default OfficeTable;
