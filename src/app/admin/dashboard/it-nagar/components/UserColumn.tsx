"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { MdAdd, MdDelete } from "react-icons/md";
import { User } from "../types";

// helpers function from the library
// create column with proper type definition with full typesaftey
// const columnHelper = createColumnHelper<(typeof Users)[0]>();
const columnHelper = createColumnHelper<User>();

const UserColumns = [
  // id column
  columnHelper.accessor((row) => row.id, {
    id: "id",
    cell: (props) => <p className="">{props.getValue()}</p>,
    header: () => <span>Id</span>,
  }),

  // full name column
  columnHelper.accessor((row) => row.name, {
    id: "name",
    cell: (props) => <p className="font-medium">{props.getValue()}</p>,
    header: () => <span>Full Name</span>,
  }),

  // address column
  columnHelper.accessor((row) => row.address, {
    id: "address",
    // takes the props and return the unknow: this unknow could be anything string or jsx
    cell: (props) => <p>{props.getValue()}</p>,
    header: () => <span>Address</span>,
  }),

  // phone number column
  columnHelper.accessor((row) => row.phone_number, {
    id: "phone_number",
    cell: (props) => <p>{props.getValue()}</p>,
    header: () => <span>Phone Number</span>,
  }),

  // Status column
  columnHelper.accessor((row) => row.active_status, {
    id: "active_status",
    cell: (props) => <p>{props.getValue()}</p>,
    enableGlobalFilter: false,

    header: () => <span>Status</span>,
  }),

  // ACTION COLUMN
  {
    id: "actions",
    header: "Actions",
    enableGlobalFilter: false,
    cell: () => (
      <div className="flex items-center justify-start space-x-1">
        <span
          // onClick={() => {
          //   openModal(info.row.original);
          // }}
          className="cursor-pointer p-1 hover:bg-gray-300 rounded-md text-gray-600 "
        >
          <MdAdd className="w-5 h-5" />
        </span>
        {/* <span
              onClick={() => {
                // console.log(info.table.getCoreRowModel().flatRows[3].original);
                handleEdit(info.row.original);
              }}
              className="cursor-pointer p-1 hover:bg-gray-300 rounded-md text-gray-600"
            >
              <MdModeEditOutline className="w-5 h-5" />
            </span> */}
        <span
          // onClick={() => {
          //   openDeleteCategoryModal({ category_id: info.row.original.id });
          //   // handleDelete(info.row.original);
          // }}
          className="cursor-pointer p-1 hover:bg-red-300 hover:text-red-400 rounded-md text-gray-600"
        >
          <MdDelete className="w-5 h-5" />
        </span>
      </div>
    ),
  },
];

export default UserColumns;
