import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Sifaris } from "../types";
import SifarisTableRowActions from "./SifarisTableRowActions";
// import OfficeTypeRowActions from "./OfficeTypeRowActions";

const columnHelper = createColumnHelper<Sifaris>();

// S.N COLUMN
const idColumnn = columnHelper.accessor((row) => row.id, {
  id: "id",
  header: () => <span>S.N</span>,
  cell: (props) => <span>{props.getValue()}</span>,
  footer: (info) => info.column.id,
});

// office type column
const sifarisNameColumn = columnHelper.accessor((row) => row.name, {
  id: "sifarisName",
  header: () => <span>Sifaris Name</span>,
  cell: (props) => <span>{props.getValue()}</span>,
});

// ACTION COLUMN
const ActionColumn = columnHelper.display({
  id: "actions",
  cell: (info) => <SifarisTableRowActions sifaris={info.row.original} />,
  header: () => <span>Actions</span>,
});

const SifarisTableColumns: ColumnDef<Sifaris>[] = [
  idColumnn,
  sifarisNameColumn,
  ActionColumn,
] as ColumnDef<Sifaris>[]; // you need to type cast because column return different type: Tvalue is for the type return by the column cell. There is a typescript limitation. see the github issue in tanstack table repo

export { SifarisTableColumns };
