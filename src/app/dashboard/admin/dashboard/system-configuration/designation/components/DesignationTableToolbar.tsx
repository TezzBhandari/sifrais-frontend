import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import DynamicRouteHeader from "@/components/DynamicRouteHeader";
import FilterInput from "@/components/Table/FilterInput";
import { Table } from "@tanstack/react-table";

import AddIcon from "@/../public/assets/Add_Icon.svg";
import CreateDesignationModalForm from "./CreateDesignationModalForm";

interface DesignationTableToolbarProps<TData> {
    table: Table<TData>;
}

function DesignationTableToolbar<TData>({
    table,
}: DesignationTableToolbarProps<TData>) {

    const [isDesignationFormOpen, setDesignationFormOpen] = useState(false)

    const closeDesignationForm = () => {
        setDesignationFormOpen(false)
    }

    const openDesignationForm = () => {
        setDesignationFormOpen(true)
    }

    return (
        <>
            <div className="flex items-center ">
                {/* header  */}
                <DynamicRouteHeader pageHeader={"Designation"} showBreadCrumb={false} />
                {/* input filter  */}
                <div className="flex-1 flex justify-center">
                    <FilterInput
                        value={
                            (table.getColumn("Designation_name")?.getFilterValue() as string) ?? ""
                        }
                        onChange={(e) =>
                            table.getColumn("Designation_name")?.setFilterValue(e.target.value)
                        }
                        placeholder="search by Designation name"
                    />
                </div>
                {/* button  */}
                <div className="add-button-container overflow-hidden">
                    <Link href={"/dashboard/admin/dashboard/system-configuration/Designation/add"}
                        className="bg-[#002147] flex items-center py-3 px-5 capitalize font-medium text-sm gap-2 rounded-xl text-white"
                    >
                        <Image src={AddIcon} alt={"add-icons"} />
                        <span>add new Designation</span>
                    </Link>
                </div>
            </div>
            {/* modal form for creating new Designation  */}
            <CreateDesignationModalForm isOpen={isDesignationFormOpen} onClose={closeDesignationForm} />

        </>
    );
}

export default DesignationTableToolbar;
