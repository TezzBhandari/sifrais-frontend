import React, { useState } from "react";
import Image from "next/image";

import DynamicRouteHeader from "@/components/DynamicRouteHeader";
import FilterInput from "@/components/Table/FilterInput";
import { Table } from "@tanstack/react-table";

import AddIcon from "@/../public/assets/Add_Icon.svg";
import CreatePermissionModalForm from "./CreatePermissionModalForm";

interface PermissionTableToolbarProps<TData> {
  table: Table<TData>;
}

function PermissionTableToolbar<TData>({
  table,
}: PermissionTableToolbarProps<TData>) {

  const [isPermissionModalFormOpen, setIsPermissionModalFormOpen] = useState(false)

  const closePermissionCreateForm = () => {
    setIsPermissionModalFormOpen(false)
  }

  const openPermissionCreateForm = () => {
    setIsPermissionModalFormOpen(true)
  }

  return (
    <>
      <div className="flex items-center ">
        {/* header  */}
        <DynamicRouteHeader pageHeader={"Permission"} showBreadCrumb={false} />
        {/* input filter  */}
        <div className="flex-1 flex justify-center">
          <FilterInput
            value={
              (table.getColumn("permission")?.getFilterValue() as string) ?? ""
            }
            onChange={(e) =>
              table.getColumn("permission")?.setFilterValue(e.target.value)
            }
            placeholder="search by permission name"
          />
        </div>
        {/* button  */}
        <div className="add-button-container overflow-hidden">
          <button
            onClick={(e) => {
              e.preventDefault();
              openPermissionCreateForm()
            }}
            className="bg-[#002147] flex items-center py-3 px-5 capitalize font-medium text-sm gap-2 rounded-xl text-white"
          >
            <Image src={AddIcon} alt={"add-icons"} />
            <span>add permission</span>
          </button>
        </div>
      </div>

      {/* modal form for creating new office  */}
      <CreatePermissionModalForm isOpen={isPermissionModalFormOpen} onClose={closePermissionCreateForm} />
    </>
  );
}

export default PermissionTableToolbar;
