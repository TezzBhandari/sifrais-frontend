import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Office } from "../types";
// import OfficeTypeRowActions from "./OfficeTypeRowActions";

const columnHelper = createColumnHelper<Office>();

// S.N COLUMN
const idColumnn = columnHelper.accessor((row) => row.id, {
    id: "id",
    header: () => <span>S.N</span>,
    cell: (props) => <span>{props.getValue()}</span>,
    footer: (info) => info.column.id,
});

// office type column
const officeTypeColumn = columnHelper.accessor((row) => row.office_name, {
    id: "office_name",
    header: () => <span>Office Name</span>,
    cell: (props) => <span>{props.getValue()}</span>,
});

// ACTION COLUMN
const ActionColumn = columnHelper.display({
    id: "actions",
    cell: (info) => <OfficeTypeRowActions officeType={info.row.original} />,
    header: () => <span>Actions</span>,
});

const officeTypeTableColumns: ColumnDef<Office>[] = [
    idColumnn,
    officeTypeColumn,
    ActionColumn,
] as ColumnDef<Office>[]; // you need to type cast because column return different type: Tvalue is for the type return by the column cell. There is a typescript limitation. see the github issue in tanstack table repo

export { officeTypeTableColumns };
