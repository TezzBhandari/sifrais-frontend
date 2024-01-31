"use client";
import React from "react";
import { RiDeleteBin4Fill } from "react-icons/ri";

import { Modal } from "@/components/Modal";
import Button from "@/components/Button";
import useDeleteDocument from "../utils/api/useDeleteDocument";
import { DocumentDeleteModalProps } from "../types";



const DocumentDeleteModal = ({
    isOpen,
    onClose,
    document,
}: DocumentDeleteModalProps) => {

    const deleteDocument = useDeleteDocument({
        documentId: document.id,
        onClose,
    });

    // delete handler
    const deleteHandler = () => {
        deleteDocument.mutate();
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <div className="flex flex-col gap-4 py-6">
                    <div className="icon-container flex items-center justify-center text-red-400">
                        <RiDeleteBin4Fill className="w-10 h-10" />
                    </div>
                    <div className="description-container flex flex-col items-center">
                        <h1 className="capitalize text-3xl font-semibold">Are you Sure?</h1>
                        <p className="capitalize text-sm font-semibold">
                            Do you really want to delete document
                        </p>
                    </div>
                    <div className="flex items-center gap-32 justify-center ">
                        {/* CANCEL BUTTON  */}
                        <Button
                            onClick={() => {
                                onClose()
                            }}
                            aria-disabled={deleteDocument.isPending ? true : false}
                            className=" rounded-md text-[#002147] text-[14px] font-medium border border-[#002147]"
                        >
                            Cancel
                        </Button>
                        {/* delete confirm BUTTON  */}
                        <Button
                            aria-disabled={deleteDocument.isPending ? true : false}
                            onClick={deleteHandler}
                            className="rounded-md bg-[#002147] text-[14px] font-medium border border-[#002147] text-white "
                        >
                            {deleteDocument.isPending ? "Deleting..." : "Delete"}
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default DocumentDeleteModal;
