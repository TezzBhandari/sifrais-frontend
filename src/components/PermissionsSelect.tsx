'use client'
import { useEffect, useState } from 'react'
import { Listbox } from '@headlessui/react'
import useQueryPermission from '@/app/dashboard/admin/dashboard/user-configuration/permissions/utils/api/useQueryPermission'
import { Skeleton } from './Skeleton'
import { Permission } from '@/app/dashboard/admin/dashboard/user-configuration/permissions/types'

// const people = [
//   { id: 1, name: 'Durward Reynolds', unavailable: false },
//   { id: 2, name: 'Kenton Towne', unavailable: false },
//   { id: 3, name: 'Therese Wunsch', unavailable: false },
//   { id: 4, name: 'Benedict Kessler', unavailable: true },
//   { id: 5, name: 'Katelyn Rohan', unavailable: false },
// ]



function PermissionsSelect() {

  const permissionResponse = useQueryPermission()

  const [selectedPermission, setSelectedPermission] = useState<Permission>()

  if (permissionResponse.isPending) {
    return <Skeleton className="h-10 w-40 bg-[#ACB1C6]" />
  }


  if (permissionResponse.isError) {
    const error = permissionResponse.error;
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
    <Listbox value={selectedPermission} onChange={setSelectedPermission}>
      <Listbox.Button>{selectedPermission?.permission_name}</Listbox.Button>
      <Listbox.Options>
        {permissionResponse.data.map((permission) => (
          <Listbox.Option
            key={permission.id}
            value={permission}
          >
            {permission.permission_name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default PermissionsSelect;