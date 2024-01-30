import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import DynamicRouteHeader from "@/components/DynamicRouteHeader";
import FilterInput from "@/components/Table/FilterInput";
import { Table } from "@tanstack/react-table";

import AddIcon from "@/../public/assets/Add_Icon.svg";
import CreateOfficeModalForm from "./CreateRolesModalForm";

interface RolesTableToolbarProps<TData> {
    table: Table<TData>;
}

function RolesTableToolbar<TData>({
    table,
}: RolesTableToolbarProps<TData>) {

    const [isOfficeFormOpen, setOfficeFormOpen] = useState(false)

    const closeOfficeForm = () => {
        setOfficeFormOpen(false)
    }

    const openOfficeForm = () => {
        setOfficeFormOpen(true)
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
                            (table.getColumn("office_name")?.getFilterValue() as string) ?? ""
                        }
                        onChange={(e) =>
                            table.getColumn("office_name")?.setFilterValue(e.target.value)
                        }
                        placeholder="search by permission name"
                    />
                </div>
                {/* button  */}
                <div className="add-button-container overflow-hidden">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            openOfficeForm()
                        }}
                        className="bg-[#002147] flex items-center py-3 px-5 capitalize font-medium text-sm gap-2 rounded-xl text-white"
                    >
                        <Image src={AddIcon} alt={"add-icons"} />
                        <span>add new permission</span>
                    </button>
                </div>
            </div>
            {/* modal form for creating new office  */}
            {/* <CreateOfficeModalForm isOpen={isOfficeFormOpen} onClose={closeOfficeForm} /> */}

        </>
    );
}

export default RolesTableToolbar;
