
import React from 'react';
import { createColumnHelper } from "@tanstack/react-table"; 
import Image from "next/image";
import phone from "../../../../../public/assets/icons/phone.svg";
import User from "../../../../../public/assets/icons/User.svg";
import actions from "../../../../../public/assets/icons/actions.svg";
import Location from "../../../../../public/assets/icons/Location.svg";
import Status from "../../../../../public/assets/icons/Status.svg";
import Bin from "../../../../../public/assets/icons/Bin.svg";
import View from "../../../../../public/assets/icons/View.svg";
import Edit from "../../../../../public/assets/icons/Edit.svg";
import { IUser } from './types';
import { IPublicUser } from './types';

const columnHelperUser = createColumnHelper<IUser>()


export const columnDashboardUser = [

  columnHelperUser.accessor((row) => row.sn, {
    id: "sn",
    header: () => <p className='flex justify-center'>S.N</p>,
    cell: (props) => <p className="my-2 flex justify-center" style={{color: "#9291A5"}}>{props.getValue()}</p>

  }),
  columnHelperUser.accessor((row)=> row.fullname, {
    id: "fullname",
    header: () => <div className='flex flex-row items-center justify-center gap-2'><Image src={User} alt='' /><p>FULL NAME</p></div>,
    cell: (props) => <p className='flex justify-center'>{props.getValue()}</p>
  }),
  columnHelperUser.accessor((row) => row.address, {
    id: "address",
    header: () => <div className='flex flex-row items-center gap-2 justify-center'><Image src={Location} alt='' /><p>ADDRESS</p></div>,
    cell: (props) => <p className='flex justify-center'>{props.getValue()}</p>
  }),
  columnHelperUser.accessor((row)=> row.phonenumber, {
  id: "phonenumber",
  header: ()=> <div className='flex flex-row items-center gap-2 justify-center'><Image src={phone} alt='' /><p>PHONE NUMBER</p></div>,
  cell: (props) => <p className='flex justify-center' style={{color: "#9291A5"}}>{props.getValue()}</p>
  }),
  columnHelperUser.accessor((row)=> row.status, {
    id: "status",
    header: ()=> <div className='flex flex-row items-center gap-2 justify-center'><Image src={Status} alt='' /><p>STATUS</p></div>,
    cell: (props) => 
    <>
    {
        props.getValue() ? 
        <div className='flex justify-center'>
        <p className='bg-[#D2FDE6] rounded-lg text-center py-0.5 px-2' style={{color: "#00974F"}}>ACTIVE</p> 
        </div>:
        <div className='flex justify-center'>
        <p className='bg-[#DDEBFF] rounded-lg text-center py-0.5 px-2' style={{color: "#004FCF"}}>INACTIVE</p>
        </div>
    }
    </>
    }),
  {
    id: "action",
    header:  <div className='flex flex-row items-center gap-2 justify-center'><Image src={actions} alt='' /><p>ACTIONS</p></div>,
    enableGlobalFilter: false,
  cell: () => (
    <div className="flex items-center justify-center space-x-1">
      <span
        className="cursor-pointer p-1 hover:bg-gray-300 rounded-md text-gray-600 "
      >
        <Image src={View} alt="View" height={10} width={12}/>
      </span>

      <span
        className="cursor-pointer p-1 hover:bg-red-300 hover:text-red-400 rounded-md text-gray-600"
      >
        <Image src={Bin} alt="Bin" height={10} width={12} />
 
      </span>
      <span
        className="cursor-pointer p-1 hover:bg-red-300 hover:text-red-400 rounded-md text-gray-600"
      >
        <Image src={Edit} alt="Edit" height={10} width={12}/>
 
      </span>
    </div>
  )
  }
]

const columnHelperPublicUser = createColumnHelper<IPublicUser>()
export const columnDashboardPublicUser = [

  columnHelperPublicUser.accessor((row) => row.sn, {
    id: "sn",
    header: () => <p className='flex justify-center'>S.N</p>,
    cell: (props) => <p className="my-2 flex justify-center" style={{color: "#9291A5"}}>{props.getValue()}</p>

  }),
  columnHelperPublicUser.accessor((row)=> row.taxpayernumber, {
    id: "fullname",
    header: () => <div className='flex flex-row items-center justify-center gap-2'><Image src={User} alt='' /><p>TAX PAYER NUMBER</p></div>,
    cell: (props) => <p className='flex justify-center'>{props.getValue()}</p>
  }),
  columnHelperPublicUser.accessor((row) => row.tole, {
    id: "address",
    header: () => <div className='flex flex-row items-center gap-2 justify-center'><Image src={Location} alt='' /><p>TOLE</p></div>,
    cell: (props) => <p className='flex justify-center'>{props.getValue()}</p>
  }),
  columnHelperPublicUser.accessor((row)=> row.phonenumber, {
  id: "phonenumber",
  header: ()=> <div className='flex flex-row items-center gap-2 justify-center'><Image src={phone} alt='' /><p>PHONE NUMBER</p></div>,
  cell: (props) => <p className='flex justify-center' style={{color: "#9291A5"}}>{props.getValue()}</p>
  }),
  {
    id: "action",
    header:  <div className='flex flex-row items-center gap-2 justify-center'><Image src={actions} alt='' /><p>ACTIONS</p></div>,
    enableGlobalFilter: false,
  cell: () => (
    <div className="flex items-center justify-center space-x-1">
      <span
        className="cursor-pointer p-1 hover:bg-gray-300 rounded-md text-gray-600 "
      >
        <Image src={View} alt="View" height={10} width={12}/>
      </span>

      <span
        className="cursor-pointer p-1 hover:bg-red-300 hover:text-red-400 rounded-md text-gray-600"
      >
        <Image src={Bin} alt="Bin" height={10} width={12} />
 
      </span>
      <span
        className="cursor-pointer p-1 hover:bg-red-300 hover:text-red-400 rounded-md text-gray-600"
      >
        <Image src={Edit} alt="Edit" height={10} width={12}/>
 
      </span>
    </div>
  )
  }
]