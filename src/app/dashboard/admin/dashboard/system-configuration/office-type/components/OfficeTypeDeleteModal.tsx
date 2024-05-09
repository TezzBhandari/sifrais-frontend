"use client";
import { Modal } from "@/components/Modal";
import React from "react";
import { OfficeType } from "../types";
import Button from "@/components/Button";
import { RiDeleteBin4Fill } from "react-icons/ri";
import useDeleteOfficeType from "../utils/api/useDeleteOfficeType";

export interface OfficeTypeDeleteModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  officeType: OfficeType;
}

const OfficeTypeDeleteModal = ({
  isOpen,
  onClose,
  officeType,
}: OfficeTypeDeleteModalProps) => {
  const controller = new AbortController();
  // useMutation
  const deleteOfficeType = useDeleteOfficeType({
    officeTypeId: officeType.id,
    onClose,
    abortController: controller,
  });

  // delete handler
  const deleteHandler = () => {
    deleteOfficeType.mutate();
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
              Do you really want to delete Office Type
            </p>
          </div>
          <div className="flex items-center gap-32 justify-center ">
            {/* CANCEL BUTTON  */}
            <Button
              onClick={() => onClose()}
              className=" rounded-md text-[#002147] text-[14px] font-medium border border-[#002147]"
            >
              Cancel
            </Button>
            {/* SUBMIT BUTTON  */}
            <button
              onClick={deleteHandler}
              className="rounded-md bg-[#002147] px-8 py-3 border-[#002147] text-[14px] font-medium border text-white"
            >
              {deleteOfficeType.isPending ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default OfficeTypeDeleteModal;
