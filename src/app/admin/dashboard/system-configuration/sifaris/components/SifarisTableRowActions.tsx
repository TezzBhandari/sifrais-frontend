"use client";
import Image from "next/image";
import { useState } from "react";

import EditIcon from "../../../../../../public/assets/logo/EditIcon.svg";
import DeleteIcon from "../../../../../../public/assets/logo/DeleteIcon.svg";
import ViewIcon from "../../../../../../public/assets/logo/ViewIcon.svg";
import AddIcon from "../../../../../../public/assets/Add_Icon.svg"
import {  SifarisTableRowActionsProps } from "../types";
import Link from "next/link";



const SifarisTableRowActions = ({ sifaris }: SifarisTableRowActionsProps) => {
  const [IsDeleteOpen, setIsDeleteOpen] = useState(false);
  // opens delete modal
  const setDeleteOpen = () => {
    setIsDeleteOpen(true);
  };

  // close delete modal
  const setDeleteClose = () => {
    setIsDeleteOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-start space-x-1">
        <span className="cursor-pointer p-1 hover:bg-gray-300 rounded-md text-gray-600">
          <Image src={ViewIcon} alt={"view Icon"} />
        </span>
        <Link href={"/admin/dashboard/form-generator"} className="cursor-pointer p-1 hover:bg-gray-300 rounded-md text-black bg-red-300">
          <Image src={AddIcon} alt={"Add Icon"} />
        </Link>
        <span
          onClick={() => {
            setDeleteOpen();
          }}
          className="cursor-pointer p-1 hover:bg-red-300 hover:text-red-400 rounded-md text-gray-600 "
        >
          <Image src={DeleteIcon} alt={"Delete Icon"} />
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
          className="cursor-pointer p-1 hover:bg-gray-600 rounded-md text-gray-600"
        >
          <Image src={EditIcon} alt={"edit Icon"} />
        </span>
      </div>
      {/* DELETE MODAL  */}

      {/* <OfficeTypeDeleteModal
        isOpen={IsDeleteOpen}
        onClose={setDeleteClose}
        onOpen={setDeleteOpen}
        officeType={officeType}
      /> */}
    </>
  );
};

export default SifarisTableRowActions;
