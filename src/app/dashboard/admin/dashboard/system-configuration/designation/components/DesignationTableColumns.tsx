import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Designation } from "../types";
import DesignationTableRowActions from "./DesignationTableRowActions";

const columnHelper = createColumnHelper<Designation>();

// S.N COLUMN
const idColumnn = columnHelper.accessor((row) => row.id, {
    id: "id",
    header: () => <span>S.N</span>,
    cell: (props) => <span>{props.getValue()}</span>,
    footer: (info) => info.column.id,
});

// designation name column
const DesignationNameColumn = columnHelper.accessor((row) => row.designation, {
    id: "designation",
    header: () => <span>Designation name</span>,
    cell: (props) => <span>{props.getValue()}</span>,
});

// ACTION COLUMN
const ActionColumn = columnHelper.display({
    id: "actions",
    cell: (info) => <DesignationTableRowActions designation={info.row.original} />,
    header: () => <span>Actions</span>,
});

const DesignationTableColumns: ColumnDef<Designation>[] = [
    idColumnn,
    DesignationNameColumn,
    ActionColumn,
] as ColumnDef<Designation>[]; // you need to type cast because column return different type: Tvalue is for the type return by the column cell. There is a typescript limitation. see the github issue in tanstack table repo

export { DesignationTableColumns };
