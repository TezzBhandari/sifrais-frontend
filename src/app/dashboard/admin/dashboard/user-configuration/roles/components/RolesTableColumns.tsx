import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Roles } from "../types";
import RolesTableRowActions from "./RolesTableRowActions";

const columnHelper = createColumnHelper<Roles>();

// S.N COLUMN
const idColumnn = columnHelper.accessor((row) => row.id, {
    id: "id",
    header: () => <span>S.N</span>,
    cell: (props) => <span>{props.getValue()}</span>,
    footer: (info) => info.column.id,
});

// role name column
const RolesNameColumn = columnHelper.accessor((row) => row.role, {
    id: "role_name",
    header: () => <span>Role Name</span>,
    cell: (props) => <span>{props.getValue()}</span>,
});

// ACTION COLUMN
const ActionColumn = columnHelper.display({
    id: "actions",
    cell: (info) => <RolesTableRowActions role={info.row.original} />,
    header: () => <span>Actions</span>,
});

const RolesTableColumns: ColumnDef<Roles>[] = [
    idColumnn,
    RolesNameColumn,
    ActionColumn,
] as ColumnDef<Roles>[]; // you need to type cast because column return different type: Tvalue is for the type return by the column cell. There is a typescript limitation. see the github issue in tanstack table repo

export { RolesTableColumns}
