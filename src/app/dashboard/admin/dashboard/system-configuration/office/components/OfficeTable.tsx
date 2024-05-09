"use client";

import DataTable from "@/components/Table/DataTable";
import DataTableSkeleton from "@/components/Table/DataTableSkeleton";
import useQueryOffice from "../utils/api/useQueryOffice";
import { OfficeTableColumns } from "./OfficeTableColumns";
import OfficeTableToolbar from "./OfficeTableToolbar";
import DataTablePagination from "@/components/Table/DataTablePagination";

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
        <>
            <DataTable
                dataTableToolBar={(table) => <OfficeTableToolbar table={table} />}
                dataTablePagination={(table => <DataTablePagination table={table} />)}
                columns={OfficeTableColumns}
                data={officeRes.data}
            />
        </>
    );
};

export default OfficeTable;
