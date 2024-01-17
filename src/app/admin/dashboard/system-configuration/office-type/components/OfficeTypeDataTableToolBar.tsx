import React from "react";
import DynamicRouteHeader from "@/components/DynamicRouteHeader";
import FilterInput from "@/components/Table/FilterInput";
import Image from "next/image";
import Link from "next/link";
import { Table } from "@tanstack/react-table";

import AddIcon from "../../../../../../../public/assets/Add_Icon.svg";

interface OfficeTypeDataTableToolBarProps<TData> {
  table: Table<TData>;
}

function OfficeTypeDataTableToolBar<TData>({
  table,
}: OfficeTypeDataTableToolBarProps<TData>) {
  return (
    <>
      <div className="flex items-center ">
        {/* header  */}
        <DynamicRouteHeader pageHeader={"Office Type"} show={false} />
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
          <Link
            href={"/admin/dashboard/it-nagar/create-user"}
            className="bg-[#002147] flex items-center py-3 px-5 capitalize font-medium text-sm gap-2 rounded-xl text-white"
          >
            <Image src={AddIcon} alt={"add-icons"} />
            <span>add new user</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default OfficeTypeDataTableToolBar;
