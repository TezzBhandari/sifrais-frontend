import FilterComponent from '@/app/userform/User/components/FilterComponent'
import FilterInputField from '@/components/MainTable/FilterInputField'
import MainTable from '@/components/MainTable/MainTable'
import React from 'react'
import { IPublicUser } from '../types'
import { columnDashboardUser, columnDashboardPublicUser } from './UserTableColumn'

const dummyData = [
    {
        sn: 1,
        phonenumber: "+977 9732399037",
        tole: "Nepal",
        taxpayernumber: "091829233",
    },
    {
        sn: 2,
        phonenumber: "+977 982370037",
        tole: "Nepal",
        taxpayernumber: "093829233",

    },
    {
        sn: 3,
        phonenumber: "+977 980073837",
        tole: "Nepal",
        taxpayernumber: "094829233",
    }
]

const PublicUser = () => {
  return (
    <>
    <div className='bg-[#DDE4EE] flex flex-col justify-center items-center'>
    <div className='my-5 border' style={{width: "80%"}}>
    <FilterComponent />
    </div>
    <div className='bg-white p-4 '  style={{width: "80%", borderRadius: "20px"}}>
    <FilterInputField title="Public User" buttonName='Add New User' btnFunction={() => console.log("DONE")}/>
    <MainTable<IPublicUser> tableColumns={columnDashboardPublicUser} tableData={dummyData} />
    </div>
    </div>
    </>
  )
}

export default PublicUser