import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import DynamicRouteHeader from "@/components/DynamicRouteHeader";
import FilterInput from "@/components/Table/FilterInput";
import { Table } from "@tanstack/react-table";

import AddIcon from "@/../public/assets/Add_Icon.svg";
import CreateRoleModalForm from "./CreateRoleModalForm";

interface RolesTableToolbarProps<TData> {
  table: Table<TData>;
}

function RolesTableToolbar<TData>({
  table,
}: RolesTableToolbarProps<TData>) {

  const [isCreateRoleModalFormOpen, setIsCreateRoleModalFormOpen] = useState(false)

  const closeCreateRoleModalForm = () => {
    setIsCreateRoleModalFormOpen(false)
  }

  const openCreateRoleModalForm = () => {
    setIsCreateRoleModalFormOpen(true)
  }

  return (
    <>
      <div className="flex items-center ">
        {/* header  */}
        <DynamicRouteHeader pageHeader={"Roles"} showBreadCrumb={false} />
        {/* input filter  */}
        <div className="flex-1 flex justify-center">
          <FilterInput
            value={
              (table.getColumn("role")?.getFilterValue() as string) ?? ""
            }
            onChange={(e) =>
              table.getColumn("role")?.setFilterValue(e.target.value)
            }
            placeholder="search by role name"
          />
        </div>
        {/* button  */}
        <div className="add-button-container overflow-hidden">
          <button
            onClick={(e) => {
              e.preventDefault();
              openCreateRoleModalForm()
            }}
            className="bg-[#002147] flex items-center py-3 px-5 capitalize font-medium text-sm gap-2 rounded-xl text-white"
          >
            <Image src={AddIcon} alt={"add-icons"} />
            <span>add role</span>
          </button>
        </div>
      </div>
      {/* modal form for creating new office  */}
      <CreateRoleModalForm isOpen={isCreateRoleModalFormOpen} onClose={closeCreateRoleModalForm} />

    </>
  );
}

export default RolesTableToolbar;
