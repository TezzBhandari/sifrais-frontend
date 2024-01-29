import React from 'react'
import DummyTable from '../DummyTable'
import UserList from '@/app/dashboard/admin/dashboard/it-nagar/components/UserList'
import { columnFamilyDocument } from './TableProperties/FamilyProfileColumn'
import MainTable from '@/components/MainTable/MainTable'
import FilterInputField from '@/components/MainTable/FilterInputField'

interface IFamilyDocument {
  sn: number,
  documentname: string,
  deadline: string,
}

const FDdata = [
  {
    sn: 1,
    documentname: "Citizenship",
    deadline: "20 Jan 2023"
  },
  {
    sn: 2,
    documentname: "Passport",
    deadline: "09 Feb 2022"
  },
  {
    sn: 3,
    documentname: "Driving License",
    deadline: "18 Feb 2022"
  },
  {
    sn: 4,
    documentname: "Passport",
    deadline: "11 Jun 2022"
  },
]


const FamilyDocument = () => {
  return (
    <>
      <FilterInputField title="Family Document" buttonName='ADD DOCUMENT' />
      <MainTable<IFamilyDocument> tableColumns={columnFamilyDocument} tableData={FDdata} />
    </>
  )
}

export default FamilyDocument