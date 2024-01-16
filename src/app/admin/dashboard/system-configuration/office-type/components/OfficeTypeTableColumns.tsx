import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { OfficeType } from "../types";

const columnHelper = createColumnHelper<OfficeType>();

// S.N COLUMN
const idColumnn = columnHelper.accessor((row) => row.id, {
  id: "id",
  header: () => <span>S.N</span>,
  cell: (props) => <span>{props.getValue()}</span>,
  footer: (info) => info.column.id,
});

// office type column
const officeTypeColumn = columnHelper.accessor((row) => row.office_type, {
  id: "office_type",
  header: () => <span>Office Type</span>,
  cell: (props) => <span>{props.getValue()}</span>,
});

const officeTypeTableColumns: ColumnDef<OfficeType>[] = [
  idColumnn,
  officeTypeColumn,
] as ColumnDef<OfficeType>[]; // you need to type cast because column return different type: Tvalue is for the type return by the column cell. There is a typescript limitation. see the github issue in tanstack table repo

export { officeTypeTableColumns };
