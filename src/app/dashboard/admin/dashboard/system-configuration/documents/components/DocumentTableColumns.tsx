import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Document } from "../types";
import DocumentTableRowActions from "./DocumentTableRowActions";

const columnHelper = createColumnHelper<Document>();

// S.N COLUMN
const idColumnn = columnHelper.accessor((row) => row.id, {
    id: "id",
    header: () => <span>S.N</span>,
    cell: (props) => <span>{props.getValue()}</span>,
    footer: (info) => info.column.id,
});

// office name column
const DocumentNameColumn = columnHelper.accessor((row) => row.doc_name, {
    id: "doc_name",
    header: () => <span>Document name</span>,
    cell: (props) => <span>{props.getValue()}</span>,
});

// ACTION COLUMN
const ActionColumn = columnHelper.display({
    id: "actions",
    cell: (info) => <DocumentTableRowActions document={info.row.original} />,
    header: () => <span>Actions</span>,
});

const DocumentTableColumns: ColumnDef<Document>[] = [
    idColumnn,
    DocumentNameColumn,
    ActionColumn,
] as ColumnDef<Document>[]; // you need to type cast because column return different type: Tvalue is for the type return by the column cell. There is a typescript limitation. see the github issue in tanstack table repo

export { DocumentTableColumns };
