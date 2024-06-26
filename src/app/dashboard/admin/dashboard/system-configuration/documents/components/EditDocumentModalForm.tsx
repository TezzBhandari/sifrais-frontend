
'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { InputLabel } from "@/components/InputLabel";
import { Modal } from "@/components/Modal";
import { DocumentsFormSchema, DocumentFormType, Document } from "../types";
import { InputField } from "@/components/InputField";
import useEditDocument from "../utils/api/useEditDocument";


// COMPONENT
const EditDocumentModalForm = ({
  isOpen,
  onClose,
  document
}: {
  isOpen: boolean;
  onClose: () => void;
  document: Document
}) => {

  // hook form initialization
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DocumentFormType>({
    defaultValues: {
      doc_name: document.doc_name
    },
    resolver: zodResolver(DocumentsFormSchema),
  });

  // use mutation
  const editDocument = useEditDocument({ onClose: onClose, reset: reset })

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} className="rounded-2xl px-6 overflow-hidden">
        <form
          onSubmit={handleSubmit((data) => {
            // TODO: IMPLEMENT POST FUNCTION
            editDocument.mutate({ id: document.id, doc_name: data.doc_name })

          })}
          className="form"
        >
          {/* FORM HEADING  */}
          <div className="">
            <h1 className="not-italic text-2xl font-bold leading-6 mb-4 mt-1">
              Update Document
            </h1>
          </div>


          {/* FORM input and button section  */}
          <div className="flex flex-col gap-6">

            {/* FORM INPUTS  */}
            <div className="flex flex-col gap-2">
              <InputLabel
                className="font-normal text-sm not-italic leading-normal"
                labelName={"document name"}
                fieldRequired={true}
              />

              {/* input field + error message */}
              <div className="">
                <InputField
                  placeholder="Enter document Name"
                  className="h-11  rounded-lg text-base font-normal"
                  {...register("doc_name")}
                />
                <span className="text-red-500 text-xs tracking-wide">
                  {errors.doc_name !== undefined
                    ? errors.doc_name.message
                    : null}
                </span>
              </div>
            </div>

            {/* FORM SUBMIT OR CANCEL BUTTONS  */}
            <div className="flex gap-5">
              <button
                disabled={editDocument.isPending ? true : false}
                className=" flex-1 bg-transparent border-solid border border-[#002147] text-[#002147] py-3 px-4 capitalize font-medium text-sm gap-2 rounded-lg "
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  reset();
                }}
              >
                cancel
              </button>
              <button
                disabled={editDocument.isPending ? true : false}
                type="submit"
                className="flex-1 bg-[#002147] py-3 px-4 capitalize font-medium text-sm gap-2 rounded-lg text-white"
              >
                {editDocument.isPending ? "updating..." : "update"}
              </button>
            </div>
          </div>
        </form>
      </Modal >
    </>
  );
};

export default EditDocumentModalForm;
