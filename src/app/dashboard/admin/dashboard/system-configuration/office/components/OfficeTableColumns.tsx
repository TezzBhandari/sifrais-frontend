import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Office } from "../types";
import OfficeTableRowActions from "./OfficeTableRowActions";

const columnHelper = createColumnHelper<Office>();

// S.N COLUMN
const idColumnn = columnHelper.accessor((row) => row.id, {
    id: "id",
    header: () => <span>S.N</span>,
    cell: (props) => <span>{props.getValue()}</span>,
    footer: (info) => info.column.id,
});

// office name column
const officeNameColumn = columnHelper.accessor((row) => row.office_name, {
    id: "office_name",
    header: () => <span>Office Name</span>,
    cell: (props) => <span>{props.getValue()}</span>,
});

// office name column
const officeTypeColumn = columnHelper.accessor((row) => row.office_type.office_type, {
    id: "office_type",
    header: () => <span>office name</span>,
    cell: (props) => <span>{props.getValue()}</span>,
});// office name column
const officeAddressColumn = columnHelper.accessor((row) => row.office_address, {
    id: "office_address",
    header: () => <span>address</span>,
    cell: (props) => <span>{props.getValue()}</span>,
});// office name column
const officeContactColumn = columnHelper.accessor((row) => row.office_phone, {
    id: "office_phone",
    header: () => <span>contact</span>,
    cell: (props) => <span>{props.getValue()}</span>,
});

// office status
const officeStatusColumn = columnHelper.accessor((row) => row.is_active, {
    id: "office_status",
    header: () => <span>contact</span>,
    cell: (props) => <span className={`px-3 py-1.5 ${props.getValue() === 1 ? "bg-green-400" : "bg-red-400"} text-white rounded-xl`}>{props.getValue() === 1 ? "active" : "inactive"}</span>,
});

// ACTION COLUMN
const ActionColumn = columnHelper.display({
    id: "actions",
    cell: (info) => <OfficeTableRowActions office={info.row.original} />,
    header: () => <span>Actions</span>,
});

const OfficeTableColumns: ColumnDef<Office>[] = [
    idColumnn,
    officeTypeColumn,
    officeNameColumn,
    officeAddressColumn,
    officeContactColumn,
    officeStatusColumn,
    ActionColumn,
] as ColumnDef<Office>[]; // you need to type cast because column return different type: Tvalue is for the type return by the column cell. There is a typescript limitation. see the github issue in tanstack table repo

export { OfficeTableColumns };
