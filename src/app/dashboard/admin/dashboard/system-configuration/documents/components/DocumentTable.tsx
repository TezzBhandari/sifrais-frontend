"use client";

import DataTable from "@/components/Table/DataTable";
import DataTableSkeleton from "@/components/Table/DataTableSkeleton";

import useQueryDocuments from "../utils/api/useQueryDocuments";
import { DocumentTableColumns } from "./DocumentTableColumns";
import DocumentTableToolbar from "./DocumentTableToolbar";

const DocumentTable = () => {

    const documentRes = useQueryDocuments();

    if (documentRes.isPending) {
        return <DataTableSkeleton />;
    }

    if (documentRes.isError) {
        const error = documentRes.error;
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
                dataTableToolBar={(table) => <DocumentTableToolbar table={table} />}
                columns={DocumentTableColumns}
                data={documentRes.data}
            />
        </>
    );
};


export default DocumentTable;