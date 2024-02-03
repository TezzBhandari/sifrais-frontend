
'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FormProvider, useForm } from "react-hook-form";

import { InputLabel } from "@/components/InputLabel";
import { Modal } from "@/components/Modal";
import { RoleFormType, RolesFormSchema } from "../types";
import { InputField } from "@/components/InputField";
import ListBox from "@/components/ListBox";

// COMPONENT
const CreateRoleModalForm = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<RoleFormType>({
    defaultValues: {
      role: "",
      permissions: []
    },
    resolver: zodResolver(RolesFormSchema),
  });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} className="rounded-2xl px-6">
        <form
          onSubmit={handleSubmit((data) => {
            // TODO: IMPLEMENT POST FUNCTION
            alert(JSON.stringify(data))
          })}
          className="form"
        >
          {/* FORM HEADING  */}
          <div>
            <h1 className="not-italic text-2xl font-bold leading-6 mb-4 mt-1">
              Create Role
            </h1>
          </div>
          <div className="form-content flex gap-12 flex-col mb-2">
            {/*  Permission name input field  */}
            <div className="flex flex-col gap-2">
              <InputLabel
                className="font-normal text-sm not-italic leading-normal"
                labelName={"role"}
                fieldRequired={true}
              />

              {/* input field + error message */}
              <div>
                <InputField
                  placeholder="Enter a role"
                  className="h-11 rounded-lg text-base font-normal"
                  {...register("role")}
                />
                <span className="text-red-500 text-xs tracking-wide">
                  {errors.role !== undefined
                    ? errors.role.message
                    : null}
                </span>
              </div>
            </div>



            {/* <div>
              <InputLabel htmlFor="" labelName="province" />
              <Controller
                control={control}
                render={({ field: { name, onChange, value } }) => (
                  <ListBox<Province, number>
                    className="shadow-none h-11"
                    labelExtractor={(item) => item.province_np}
                    valueExtractor={(item) => item.id}
                    labelExtractorByValue={(value, options) =>
                      options.find((option) => option.id === value)
                        ?.province_np || "select a province"
                    }
                    options={provinces}
                    value={value}
                    onChange={onChange}
                    name={name}
                  />
                )}
                name={"province_id"}
              />
            </div> */}



            {/* FORM SUBMIT OR CANCEL BUTTONS  */}
            <div className="flex  gap-5">
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
          </div>
        </form>
      </Modal>
    </>
  );
};



export default CreateRoleModalForm