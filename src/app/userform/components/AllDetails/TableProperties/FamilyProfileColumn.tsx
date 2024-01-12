import React from 'react'
import { createColumnHelper } from '@tanstack/react-table' 
import { MdAdd, MdDelete } from 'react-icons/md';
import folder from "../../../../../../public/assets/icons/folder.svg"
import phone from "../../../../../../public/assets/icons/phone.svg"
import calendar from "../../../../../../public/assets/icons/calendar.svg"
import User from "../../../../../../public/assets/icons/User.svg"
import relationship from "../../../../../../public/assets/icons/relationship.svg"
import actions from "../../../../../../public/assets/icons/actions.svg"
import Bin from "../../../../../../public/assets/icons/Bin.svg"
import View from "../../../../../../public/assets/icons/View.svg"
import Edit from "../../../../../../public/assets/icons/Edit.svg"
import Image from 'next/image';
//Creating Column for Family Document Table & FamilyMemberDocument : 

interface IFamilyDocument {
    sn: number;
    documentname: string;
    deadline: string;
}

const columnHelperFD = createColumnHelper<IFamilyDocument>()


export const columnFamilyDocument = [

  columnHelperFD.accessor((row) => row.sn, {
    id: "sn",
    header: () => <p>S.N</p>,
    cell: (props) => <p className="my-2" style={{color: "#9291A5"}}>{props.getValue()}</p>

  }),
  // row.documentname < should be same in the data field;
  columnHelperFD.accessor((row)=> row.documentname, {
    id: "documentname",
    header: () => <div className='flex flex-row items-center gap-2'><Image src={folder} alt='' /><p>DOCUMENT NAME</p></div>,
    cell: (props) => <p className=''>{props.getValue()}</p>
  }),
  columnHelperFD.accessor((row) => row.deadline, {
    id: "deadline",
    header: () => <div className='flex flex-row items-center gap-2' ><Image src={calendar} alt='' /><p>DEADLINE</p></div>,
    cell: (props) => <p style={{color: "#9291A5"}}>{props.getValue()}</p>
  }),
  {
    id: "action",
    header:  <div className='flex flex-row items-center gap-2'><Image src={actions} alt='' /><p>ACTIONS</p></div>,
    enableGlobalFilter: false,
  cell: () => (
    <div className="flex items-center justify-start space-x-1">
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

// Creating Column for Family Member table;

interface IFamilyMember {
    sn: number;
    fullnamenp: string;
    fullnameen: string;
    phonenumber: string;
}


const columnHelperFM = createColumnHelper<IFamilyMember>()


export const columnFamilyMember = [

  columnHelperFM.accessor((row) => row.sn, {
    id: "sn",
    header: () => <p>S.N</p>,
    cell: (props) => <p className="my-2" style={{color: "#9291A5"}}>{props.getValue()}</p>

  }),
  columnHelperFM.accessor((row)=> row.fullnamenp, {
    id: "fullnamenp",
    header: () => <div className='flex flex-row items-center gap-2'><Image src={User} alt='' /><p>FULL NAME (NP)</p></div>,
    cell: (props) => <p className=''>{props.getValue()}</p>
  }),
  columnHelperFM.accessor((row) => row.fullnameen, {
    id: "fullnameen",
    header: () => <div className='flex flex-row items-center gap-2'><Image src={User} alt='' /><p>FULL NAME (EN)</p></div>,
    cell: (props) => <p>{props.getValue()}</p>
  }),
  columnHelperFM.accessor((row)=> row.phonenumber, {
  id: "phonenumber",
  header: ()=> <div className='flex flex-row items-center gap-2'><Image src={phone} alt='' /><p>PHONE NUMBER</p></div>,
  cell: (props) => <p className='' style={{color: "#9291A5"}}>{props.getValue()}</p>
  }),

  {
    id: "action",
    header:  <div className='flex flex-row items-center gap-2'><Image src={actions} alt='' /><p>ACTIONS</p></div>,
    enableGlobalFilter: false,
  cell: () => (
    <div className="flex items-center justify-start space-x-1">
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



//Creating column for Family Members Document

interface IFamilyMemberDocument {
  sn: number;
  fullname: string;
  documentname: string;
}

const columnHelperFMD = createColumnHelper<IFamilyMemberDocument>()


export const columnFamilyMemberDocument = [

columnHelperFMD.accessor((row) => row.sn, {
  id: "sn",
  header: () => <p>S.N</p>,
  cell: (props) => <p className="my-2" style={{color: "#9291A5"}}>{props.getValue()}</p>

}),
// row.documentname < should be same in the data field;
columnHelperFMD.accessor((row)=> row.fullname, {
  id: "fullname",
  header: () => <div className='flex flex-row items-center gap-2'><Image src={User} alt='' /><p>FULL NAME</p></div>,
  cell: (props) => <p className=''>{props.getValue()}</p>
}),
columnHelperFMD.accessor((row) => row.documentname, {
  id: "deadline",
  header: () => <div className='flex flex-row items-center gap-2'><Image src={folder} alt='' /><p>DOCUMENT NAME</p></div>,
  cell: (props) => <p>{props.getValue()}</p>
}),
{
  id: "action",
  header:  <div className='flex flex-row items-center gap-2'><Image src={actions} alt='' /><p>ACTIONS</p></div>,
  enableGlobalFilter: false,
cell: () => (
  <div className="flex items-center justify-start space-x-1">
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




//Creating column for Relationship table;
interface IFamilyRelationship {
  sn: number,
  from: string,
  relationship: string,
  to: string
}

const columnHelperFR = createColumnHelper<IFamilyRelationship>();

export const columnFamilyRelationship = [

    columnHelperFR.accessor((row) => row.sn, {
      id: "sn",
      header: ()=> <p>S.N</p>,
      cell: (props) => <p className='my-2' style={{color: "#9291A5"}}>{props.getValue()}</p>,
    }),
    columnHelperFR.accessor((row)=> row.from, {
      id: "from",
      header: ()=> <div className='flex flex-row items-center gap-2'><Image src={User} alt=''   /><p>FROM</p></div>,
      cell: (props) => <p className=''>{props.getValue()}</p>,
    } ),
    columnHelperFR.accessor((row) => row.relationship, {
      id: "relationship",
      header: () => <div className='flex flex-row items-center gap-2'><Image src={relationship} alt='' /><p>RELATIONSHIP</p></div>,
      cell: (props) => <p>{props.getValue()}</p>,
    } ),
    columnHelperFR.accessor((row)=> row.to, {
      id: "to",
      header: ()=> <div className='flex flex-row items-center gap-2'><Image src={User} alt='' /><p>TO</p></div>,
      cell: (props) => <p>{props.getValue()}</p>,
    }),
    {
      id: "action",
      header:  <div className='flex flex-row items-center gap-2'><Image src={actions} alt='' /><p>ACTIONS</p></div>,
      enableGlobalFilter: false,
    cell: () => (
      <div className="flex items-center justify-start space-x-1">
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