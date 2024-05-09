import { InputLabel } from '@/components/InputLabel'
import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { AdminUserMutationType } from '../types';
import { Skeleton } from '@/components/Skeleton';
import Select from 'react-select';
import useQueryRoles from '../../../user-configuration/roles/utils/api/useQueryRoles';
import DataTableSkeleton from '@/components/Table/DataTableSkeleton';

const UserRoleInput = () => {

  const { control, formState: { errors } } = useFormContext<AdminUserMutationType>();


  const permissionArray = useFieldArray({
    control: control,
    name: "roles"
  })

  const userRoles = useQueryRoles();

  if (userRoles.isPending) {
    // return <DataTableSkeleton />
    return;
  }

  if (userRoles.isError) {
    const error = userRoles.error;
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

  const selectPermissionList = userRoles.data.map((role) => {
    return { label: role.role, value: role.id }
  })

  if (userRoles.isLoading) {
    return <div >
      <Skeleton className="h-3 mb-1 rounded-[0.25rem] w-16 bg-gray-400" />
      <Skeleton className="h-11 bg-gray-400" />
    </div>;;
  }

  if (userRoles.isError) {
    return <div>failed to fetch roles</div>;
  }

  return (
    <>
      <div>
        <InputLabel htmlFor="" labelName="roles" />
        <Select options={selectPermissionList} onChange={(selectOption) => {

          const selectedRoles = selectOption.map(option => {
            return { id: option.value }
          })
          permissionArray.replace(selectedRoles)
        }} isMulti />
      </div>
    </>
  )
}

export default UserRoleInput