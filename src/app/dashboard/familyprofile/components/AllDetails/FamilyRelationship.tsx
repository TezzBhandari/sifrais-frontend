import UserList from '@/app/admin/dashboard/it-nagar/components/UserList'
import React from 'react'
import Image from 'next/image'
import { columnFamilyRelationship } from './TableProperties/FamilyProfileColumn'
import MainTable from '@/components/MainTable/MainTable'
import relationship from "../../../../../public/assets/icons/relationship.svg"
import User from "../../../../../public/assets/icons/User.svg"
import actions from "../../../../../public/assets/icons/actions.svg"
import FilterInputField from '@/components/MainTable/FilterInputField'

interface IFRDATA {
  sn: number,
  from: string,
  to: string,
  relationship: string
}
const frData = [{
  sn: 1,
  from: "Jon Snow",
  to: "Ned Stark",
  relationship: "Father"
},
{
  sn: 2,
  from: "Arya Stark",
  to: "Ned Stark",
  relationship: "Father"
},
]

const FamilyRelationship = () => {

  return (
    <>
    <FilterInputField title="Family Relationship" buttonName='ADD RELATION' />
    <MainTable<IFRDATA> tableColumns={columnFamilyRelationship} tableData={frData} /> 
    </>
  )
}

export default FamilyRelationship