
'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";

import { InputLabel } from "@/components/InputLabel";
import { Modal } from "@/components/Modal";
import { RoleFormType, RolesFormSchema } from "../types";
import { InputField } from "@/components/InputField";
import useQueryPermission from "../../permissions/utils/api/useQueryPermission";
import { Skeleton } from "@/components/Skeleton";
import Select from "react-select";
import usePostRole from "../utils/api/usePostRole";

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

  const postRole = usePostRole({ onClose, reset })


  const permissionArray = useFieldArray({
    control: control,
    name: "permissions"
  })

  const PermissionRes = useQueryPermission();

  if (PermissionRes.isPending) {
    return <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Skeleton className="h-[180px] w-[32rem] bg-slate-300" />
    </div>;
  }

  if (PermissionRes.isError) {
    const error = PermissionRes.error;
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

  const selectPermissionList = PermissionRes.data.map((permission) => {
    return { label: permission.permission_name, value: permission.id }
  })


  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} className="rounded-2xl px-6 min-w">
        <form
          onSubmit={handleSubmit((data) => {
            // TODO: IMPLEMENT POST FUNCTION
            alert(JSON.stringify(data))
            postRole.mutate(data)
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



            <div>
              <InputLabel htmlFor="" labelName="permissions" />
              <Select options={selectPermissionList} onChange={(selectOption) => {

                const selectedPermissions = selectOption.map(option => {
                  return { id: option.value }
                })
                permissionArray.replace(selectedPermissions)
              }} isMulti />
            </div>

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