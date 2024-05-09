
'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { InputLabel } from "@/components/InputLabel";
import { Modal } from "@/components/Modal";
import { InputField } from "@/components/InputField";
import { Permission, PermissionFormSchema, PermissionFormType } from "../types";
import usePostPermission from "../utils/api/useCreatePermission";
import ListBox from "@/components/ListBox";
import useQueryPermission from "../utils/api/useQueryPermission";
import DataTableSkeleton from "@/components/Table/DataTableSkeleton";


// COMPONENT
const CreatePermissionModalForm = ({
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
  } = useForm<PermissionFormType>({
    defaultValues: {
      guard_name: "",
      permission_name: ""
    },
    resolver: zodResolver(PermissionFormSchema),
  });

  const queryPermission = useQueryPermission()
  const postPermission = usePostPermission({ onClose: onClose, reset: reset })


  if (queryPermission.isPending) {
    return <DataTableSkeleton />;
  }

  if (queryPermission.isError) {
    const error = queryPermission.error;
    if (error.response) {
      return (
        <div>error message from the server: {error.response.data.message}</div>
      );
    } else if (error.request) {
      return <div>something went wrong try again</div>;
    } else {
      return <div>something went wrong try again</div>;
    }
  }


  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} className="rounded-2xl px-6">

        <form
          onSubmit={handleSubmit((data) => {
            // TODO: IMPLEMENT POST FUNCTION
            postPermission.mutate(data)

          })}
          className="form"
        >
          {/* FORM HEADING  */}
          <div className="">
            <h1 className="not-italic text-2xl font-bold leading-6 mb-4 mt-1">
              Add Permission
            </h1>
          </div>


          {/* FORM input and button section  */}
          <div className="flex flex-col gap-6">

            {/* FORM INPUTS  */}
            <div className="flex flex-col gap-2">
              <InputLabel
                className="font-normal text-sm not-italic leading-normal"
                labelName={"permission name"}
                fieldRequired={true}
              />

              {/* input field + error message */}
              <div className="">
                <InputField
                  placeholder="Enter permission"
                  className="h-11  rounded-lg text-base font-normal"
                  {...register("permission_name")}
                />
                <span className="text-red-500 text-xs tracking-wide">
                  {errors.permission_name !== undefined
                    ? errors.permission_name.message
                    : null}
                </span>
              </div>
            </div>

            {/* FORM INPUTS  */}
            <div className="flex flex-col gap-2">
              <InputLabel
                className="font-normal text-sm not-italic leading-normal"
                labelName={"guard name"}
                fieldRequired={true}
              />

              {/* input field + error message */}
              <div className="">
                <InputField
                  placeholder="Enter guard name"
                  className="h-11  rounded-lg text-base font-normal"
                  {...register("guard_name")}
                />
                <span className="text-red-500 text-xs tracking-wide">
                  {errors.guard_name !== undefined
                    ? errors.guard_name.message
                    : null}
                </span>
              </div>
            </div>

            <div>
              <InputLabel htmlFor="" labelName={"Input Type"} />
              <Controller
                control={control}
                render={({ field: { value, onChange } }) => {
                  return (
                    <>
                      <ListBox <Permission, number>
                        options={queryPermission.data}
                        className="h-11 shadow-none"
                        valueExtractor={(item) => item.id}
                        labelExtractor={(item) => item.permission_name}
                        value={value}
                        labelExtractorByValue={(value, options) =>
                          options.find((option) => option.id === value)?.permission_name ||
                          "select parent"
                        }
                        dropDownContainerStyle="bottom-0"
                        onChange={onChange}
                      />
                    </>
                  );
                }}
                name={"parent_id"}
              />
            </div >



            {/* FORM SUBMIT OR CANCEL BUTTONS  */}
            < div className="flex gap-5" >
              <button
                disabled={postPermission.isPending ? true : false}
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
                disabled={postPermission.isPending ? true : false}
                type="submit"
                className="flex-1 bg-[#002147] py-3 px-4 capitalize font-medium text-sm gap-2 rounded-lg text-white"
              >
                {postPermission.isPending ? "creating..." : "create"}
              </button>
            </div>
          </div>
        </form>
      </Modal >
    </>
  );
};

export default CreatePermissionModalForm;
