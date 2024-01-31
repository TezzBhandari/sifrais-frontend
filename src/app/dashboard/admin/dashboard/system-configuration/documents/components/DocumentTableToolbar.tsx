import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import DynamicRouteHeader from "@/components/DynamicRouteHeader";
import FilterInput from "@/components/Table/FilterInput";
import { Table } from "@tanstack/react-table";

import AddIcon from "@/../public/assets/Add_Icon.svg";
import CreateDocumentModalForm from "./CreateDocumentModalForm";

interface DocumentTableToolbarProps<TData> {
    table: Table<TData>;
}

function DocumentTableToolbar<TData>({
    table,
}: DocumentTableToolbarProps<TData>) {

    const [isDocumentFormOpen, setDocumentFormOpen] = useState(false)

    const closeDocumentForm = () => {
        setDocumentFormOpen(false)
    }

    const openDocumentForm = () => {
        setDocumentFormOpen(true)
    }

    return (
        <>
            <div className="flex items-center ">
                {/* header  */}
                <DynamicRouteHeader pageHeader={"Document"} showBreadCrumb={false} />
                {/* input filter  */}
                <div className="flex-1 flex justify-center">
                    <FilterInput
                        value={
                            (table.getColumn("Document_name")?.getFilterValue() as string) ?? ""
                        }
                        onChange={(e) =>
                            table.getColumn("Document_name")?.setFilterValue(e.target.value)
                        }
                        placeholder="search by Document name"
                    />
                </div>
                {/* button  */}
                <div className="add-button-container overflow-hidden">
                    <Link href={"/dashboard/admin/dashboard/system-configuration/Document/add"}
                        className="bg-[#002147] flex items-center py-3 px-5 capitalize font-medium text-sm gap-2 rounded-xl text-white"
                    >
                        <Image src={AddIcon} alt={"add-icons"} />
                        <span>add new Document</span>
                    </Link>
                </div>
            </div>
            {/* modal form for creating new Document  */}
            <CreateDocumentModalForm isOpen={isDocumentFormOpen} onClose={closeDocumentForm} />

        </>
    );
}

export default DocumentTableToolbar;
