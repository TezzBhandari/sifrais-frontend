
'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { InputLabel } from "@/components/InputLabel";
import { Modal } from "@/components/Modal";
import { DesignationFormSchema, DesignationFormType } from "../types";
import { InputField } from "@/components/InputField";


// COMPONENT
const CreateDocumentModalForm = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {


  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm<DesignationFormType>({
    defaultValues: {
      designation: ""
    },
    resolver: zodResolver(DesignationFormSchema),
  });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} className="rounded-2xl px-6 max-w-5xl overflow-x-hidden overflow-y-auto">

        <form
          onSubmit={handleSubmit((data) => {
            // TODO: IMPLEMENT POST FUNCTION
            alert(JSON.stringify(data))
          })}
          className="form"
        >
          {/* FORM HEADING  */}
          <div className="">
            <h1 className="not-italic text-2xl font-bold leading-6 mb-4 mt-1">
              Create Office
            </h1>
          </div>


          {/* FORM FIELDS  */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 flex-1">
              <InputLabel
                className="font-normal text-sm not-italic leading-normal"
                labelName={"designation"}
                fieldRequired={true}
              />

              {/* input field + error message */}
              <div className="">
                <InputField
                  placeholder="Enter a designation"
                  className="h-11 rounded-lg text-base font-normal"
                  {...register("designation")}
                />
                <span className="text-red-500 text-xs tracking-wide">
                  {errors.designation !== undefined
                    ? errors.designation.message
                    : null}
                </span>
              </div>

            </div>
            {/* //just to make sure the first input take half of the width  */}
            <div className="flex-1 invisible" />
          </div>

          {/* FORM SUBMIT OR CANCEL BUTTONS  */}
          <div className="flex gap-5">
            <button
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
              type="submit"
              className="flex-1 bg-[#002147] py-3 px-4 capitalize font-medium text-sm gap-2 rounded-lg text-white"
            >
              Create
            </button>
          </div>
        </form>
      </Modal >
    </>
  );
};

export default CreateDocumentModalForm;
