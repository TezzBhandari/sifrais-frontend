"use client";

import DataTable from "@/components/Table/DataTable";
import DataTableSkeleton from "@/components/Table/DataTableSkeleton";

import useQueryDesignations from "../utils/api/useQueryDesignations";
import DesignationTableToolbar from "./DesignationTableToolbar";
import { DesignationTableColumns } from "./DesignationTableColumns";

const DesignationTable = () => {

    const DesignationRes = useQueryDesignations();

    if (DesignationRes.isPending) {
        return <DataTableSkeleton />;
    }

    if (DesignationRes.isError) {
        const error = DesignationRes.error;
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
                dataTableToolBar={(table) => <DesignationTableToolbar table={table} />}
                columns={DesignationTableColumns}
                data={DesignationRes.data}
            />
        </>
    );
};

export default DesignationTable;
function useQueryDesignation() {
    throw new Error("Function not implemented.");
}

