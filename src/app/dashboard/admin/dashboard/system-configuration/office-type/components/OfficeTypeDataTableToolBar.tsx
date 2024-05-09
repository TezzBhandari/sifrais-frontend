import React, { useState } from "react";
import DynamicRouteHeader from "@/components/DynamicRouteHeader";
import FilterInput from "@/components/Table/FilterInput";
import Image from "next/image";
import Link from "next/link";
import { Table } from "@tanstack/react-table";

import AddIcon from "@/../public/assets/Add_Icon.svg";
import CreateOfficeTypeModalForm from "./CreateOfficeTypeModalForm";

interface OfficeTypeDataTableToolBarProps<TData> {
  table: Table<TData>;
}

function OfficeTypeDataTableToolBar<TData>({
  table,
}: OfficeTypeDataTableToolBarProps<TData>) {

  const [isCreateOfficeTypeFormOpen, setCreateOfficeTypeFormOpen] = useState(false);
  const openCreateOfficeTypeForm = () => {
    setCreateOfficeTypeFormOpen(true)
  }

  const closeCreateOfficeTypeForm = () => {
    setCreateOfficeTypeFormOpen(false)
  }

  return (
    <>
      <div className="flex items-center ">
        {/* header  */}
        <DynamicRouteHeader pageHeader={"Office Type"} showBreadCrumb={false} />
        {/* input filter  */}
        <div className="flex-1 flex justify-center">
          <FilterInput
            value={
              (table.getColumn("office_type")?.getFilterValue() as string) ?? ""
            }
            onChange={(e) =>
              table.getColumn("office_type")?.setFilterValue(e.target.value)
            }
            placeholder="search by office type"
          />
        </div>
        {/* button  */}
        <div className="add-button-container overflow-hidden">
          <button
            onClick={(e) => {
              e.preventDefault();
              openCreateOfficeTypeForm()
            }}

            className="bg-[#002147] flex items-center py-3 px-5 capitalize font-medium text-sm gap-2 rounded-xl text-white"
          >
            <Image src={AddIcon} alt={"add-icons"} />
            <span>add office type</span>
          </button>
        </div>
      </div>
      <CreateOfficeTypeModalForm isOpen={isCreateOfficeTypeFormOpen} onClose={closeCreateOfficeTypeForm} />
    </>
  );
}

export default OfficeTypeDataTableToolBar;
