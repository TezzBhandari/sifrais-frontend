"use client";
import React from "react";
import { RiDeleteBin4Fill } from "react-icons/ri";

import { Modal } from "@/components/Modal";
import Button from "@/components/Button";
import useDeletePermission from "../utils/api/useDeletePermission";

import type { PermissionDeleteModalProps } from "../types";


const PermissionDeleteModal = ({
    isOpen,
    onClose,
    permission,
}: PermissionDeleteModalProps) => {

    const deletePermission = useDeletePermission({
        permissionId: permission.id,
        onClose,
    });

    // delete handler
    const deleteHandler = () => {
        deletePermission.mutate();
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
                            Do you really want to delete permission
                        </p>
                    </div>
                    <div className="flex items-center gap-32 justify-center ">
                        {/* CANCEL BUTTON  */}
                        <Button
                            onClick={() => {
                                onClose()
                            }}
                            aria-disabled={deletePermission.isPending ? true : false}
                            className=" rounded-md text-[#002147] text-[14px] font-medium border border-[#002147]"
                        >
                            Cancel
                        </Button>
                        {/* delete confirm BUTTON  */}
                        <Button
                            aria-disabled={deletePermission.isPending ? true : false}
                            onClick={deleteHandler}
                            className="rounded-md bg-[#002147] text-[14px] font-medium border border-[#002147] text-white "
                        >
                            {deletePermission.isPending ? "Deleting..." : "Delete"}
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default PermissionDeleteModal;
