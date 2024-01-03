"use client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";
import { Users } from "./FakeData";
import { MdAdd, MdDelete } from "react-icons/md";

const UserList = () => {
  // helpers function from the library
  // create column with proper type definition with full typesaftey
  const columnHelper = createColumnHelper<(typeof Users)[0]>();

  // table data
  const [data, setData] = useState(Users);

  // table column
  const columns = [
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
    columnHelper.accessor((row) => row.status, {
      id: "status",
      cell: (props) => <p>{props.getValue()}</p>,

      header: () => <span>Status</span>,
    }),

    // ACTION COLUMN
    {
      id: "actions",
      header: "Actions",
      cell: () => (
        <div className="flex items-center justify-center space-x-1">
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

  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full">
      <table className="w-full">
        {/* TABLE HEADER  */}
        <thead className="border-b border-[#F0F0F2]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="text-center  text-[#9291A5] text-sm font-medium py-3 uppercase"
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* TABLE BODY  */}
        <tbody className="">
          {table.getRowModel().rows.map((bodyRow) => {
            return (
              <tr key={bodyRow.id}>
                {bodyRow.getVisibleCells().map((visibleCell) => {
                  return (
                    <td
                      className="text-center text-[#1D1C2B] text-sm py-1 font-normal"
                      key={visibleCell.id}
                    >
                      {flexRender(
                        visibleCell.column.columnDef.cell,
                        visibleCell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
