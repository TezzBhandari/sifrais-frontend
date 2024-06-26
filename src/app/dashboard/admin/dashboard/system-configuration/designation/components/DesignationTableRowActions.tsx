"use client";
import Image from "next/image";
import { useState } from "react";

import EditIcon from "@/../public/assets/logo/EditIcon.svg"
import DeleteIcon from "@/../public/assets/logo/DeleteIcon.svg"
import ViewIcon from "@/../public/assets/logo/ViewIcon.svg"
import { DesignationTableRowActionsProps } from "../types";
import DesignationDeleteModal from "./DesignationDeleteModal";
import UpdateDesignationModalForm from "./UpdateDesignationModalForm";



const DesignationTableRowActions = ({ designation }: DesignationTableRowActionsProps) => {
    const [IsDeleteOpen, setIsDeleteOpen] = useState(false);
    // opens delete modal
    const setDeleteOpen = () => {
        setIsDeleteOpen(true);
    };

    // close delete modal
    const setDeleteClose = () => {
        setIsDeleteOpen(false);
    };

    const [isUpdateDesignationFormOpen, setIsUpdateDesignationFormOpen] = useState(false);
    // opens delete modal
    const openUpdateDesignationForm = () => {
        setIsUpdateDesignationFormOpen(true);
    };

    // close delete modal
    const closeUpdateDesignationForm = () => {
        setIsUpdateDesignationFormOpen(false);
    };

    return (
        <div>
            <div className="flex items-center justify-start space-x-1">
                <span className="cursor-pointer p-1 hover:bg-gray-300 rounded-md text-gray-600">
                    <Image src={ViewIcon} alt={"view Icon"} />
                </span>
                <span
                    onClick={() => {
                        setDeleteOpen();
                    }}
                    className="cursor-pointer p-1 hover:bg-red-300 hover:text-red-400 rounded-md text-gray-600 "
                >
                    <Image src={DeleteIcon} alt={"Delete Icon"} />
                </span>

                <span
                    onClick={() => {
                        openUpdateDesignationForm();
                    }}
                    className="cursor-pointer p-1 hover:bg-gray-600 rounded-md text-gray-600"
                >
                    <Image src={EditIcon} alt={"edit Icon"} />
                </span>
            </div>
            {/* DELETE MODAL  */}

            <DesignationDeleteModal
                isOpen={IsDeleteOpen}
                onClose={setDeleteClose}
                onOpen={setDeleteOpen}
                designation={designation}
            />
            <UpdateDesignationModalForm onClose={closeUpdateDesignationForm} isOpen={isUpdateDesignationFormOpen} designation={designation} />
        </div>
    );
};

export default DesignationTableRowActions;
