"use client";

import DataTable from "@/components/Table/DataTable";
import DataTableSkeleton from "@/components/Table/DataTableSkeleton";
import useQueryPermission from "../utils/api/useQueryRoles";
import { RolesTableColumns } from "./RolesTableColumns";
import RolesTableToolbar from "./RolesTableToolbar";
import DataTablePagination from "@/components/Table/DataTablePagination";

const RolesTable = () => {

    const PermissionRes = useQueryPermission();

    if (PermissionRes.isPending) {
        return <DataTableSkeleton />;
    }

    if (PermissionRes.isError) {
        const error = PermissionRes.error;
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
                dataTableToolBar={(table) => <RolesTableToolbar table={table} />}
                // dataTablePagination={(table => <DataTablePagination table={table} />)}
                columns={RolesTableColumns}
                data={PermissionRes.data}
            />
        </>
    );
};

export default RolesTable;
