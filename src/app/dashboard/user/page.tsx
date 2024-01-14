"use client";
import FilterComponent from '@/app/userform/User/components/FilterComponent'
import FilterInputField from '@/components/MainTable/FilterInputField'
import MainTable from '@/components/MainTable/MainTable'
import React from 'react'
import { IUser } from './components/types'
import { columnDashboardUser } from './components/UserTableColumn';

const dummyData = [
    {
        sn: 1,
        fullname: "Smith Ad",
        address: "Nepal",
        phonenumber: "094829233",
        status: true
    },
    {
        sn: 2,
        fullname: "Ram Hero",
        address: "Nepal",
        phonenumber: "094829233",
        status: false
    },
    {
        sn: 1,
        fullname: "Shyam Lordd",
        address: "Nepal",
        phonenumber: "094829233",
        status: true
    }
]
const page = () => {
  return (
    <>
    <div className='bg-[#DDE4EE] flex flex-col justify-center items-center'>
    <div className='my-5 border'>
    <FilterComponent />
    </div>
    <div className='bg-white p-4 DMSans'  style={{width: "80%", borderRadius: "20px"}}>
    <FilterInputField title="User" buttonName='Add New User' btnFunction={() => console.log("DONE")}/>
    <MainTable<IUser> tableColumns={columnDashboardUser} tableData={dummyData} />
    </div>
    </div>
    </>
  )
}

export default page