import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Permission } from "../types";
import PermissionTableRowActions from "./PermissionTableRowActions";

const columnHelper = createColumnHelper<Permission>();

// S.N COLUMN
const idColumnn = columnHelper.accessor((row) => row.id, {
    id: "id",
    header: () => <span>S.N</span>,
    cell: (props) => <span>{props.getValue()}</span>,
    footer: (info) => info.column.id,
});

// Permission name column
const PermissionNameColumn = columnHelper.accessor((row) => row.permission_name, {
    id: "permission_name",
    header: () => <span>Permission Name</span>,
    cell: (props) => <span>{props.getValue()}</span>,
});

// guard name column
const PermissionTypeColumn = columnHelper.accessor((row) => row.guard_name, {
    id: "guard_name",
    header: () => <span>guard name</span>,
    cell: (props) => <span>{props.getValue()}</span>,
});// 

// ACTION COLUMN
const ActionColumn = columnHelper.display({
    id: "actions",
    cell: (info) => <PermissionTableRowActions permission={info.row.original} />,
    header: () => <span>Actions</span>,
});

const PermissionTableColumns: ColumnDef<Permission>[] = [
    idColumnn,
    PermissionNameColumn,
    PermissionTypeColumn,
    
    ActionColumn,
] as ColumnDef<Permission>[]; // you need to type cast because column return different type: Tvalue is for the type return by the column cell. There is a typescript limitation. see the github issue in tanstack table repo

export { PermissionTableColumns };
