import React, { HtmlHTMLAttributes, useState } from "react";
import ModalFamilyMember from "./ModalFamilyMember";
import FilterInputField from "@/components/MainTable/FilterInputField";
import MainTable from "@/components/MainTable/MainTable";
import { columnFamilyMember } from "./TableProperties/FamilyProfileColumn";


const FamilyMember = () => {

  interface IFamilyMember {
      sn: number;
      fullnamenp: string;
      fullnameen: string;
      phonenumber: string
  }

  const dummyData = [
    {
      sn: 1,
      fullnamenp: "वेन्चर टेक्नोलोजी ",
      fullnameen: "Venture Technology",
      phonenumber: "9863788293"
    },
    {
      sn: 2,
      fullnamenp: "वेन्चर टेक्नोलोजी ",
      fullnameen: "Denture Technology",
      phonenumber: "9863788293"
    },
    {
      sn: 3,
      fullnamenp: "वेन्चर टेक्नोलोजी ",
      fullnameen: "Senture Technology",
      phonenumber: "9863788293"
    },
    {
      sn: 4,
      fullnamenp: "व टेक्नोलोजी ",
      fullnameen: "Tension Technology",
      phonenumber: "9863788293"
    },
    {
      sn: 1,
      fullnamenp: "वेन्चर टेक्नोलोजी ",
      fullnameen: "Venture Technology",
      phonenumber: "9863788293"
    },
    {
      sn: 2,
      fullnamenp: "वेन्चर टेक्नोलोजी ",
      fullnameen: "Denture Technology",
      phonenumber: "9863788293"
    },
    {
      sn: 3,
      fullnamenp: "वेन्चर टेक्नोलोजी ",
      fullnameen: "Senture Technology",
      phonenumber: "9863788293"
    },
    {
      sn: 4,
      fullnamenp: "व टेक्नोलोजी ",
      fullnameen: "Tension Technology",
      phonenumber: "9863788293"
    },
    {
      sn: 1,
      fullnamenp: "वेन्चर टेक्नोलोजी ",
      fullnameen: "Venture Technology",
      phonenumber: "9863788293"
    },
    {
      sn: 2,
      fullnamenp: "वेन्चर टेक्नोलोजी ",
      fullnameen: "Denture Technology",
      phonenumber: "9863788293"
    },
    {
      sn: 3,
      fullnamenp: "वेन्चर टेक्नोलोजी ",
      fullnameen: "Senture Technology",
      phonenumber: "9863788293"
    },
    {
      sn: 4,
      fullnamenp: "व टेक्नोलोजी ",
      fullnameen: "Tension Technology",
      phonenumber: "9863788293"
    },
    {
      sn: 1,
      fullnamenp: "वेन्चर टेक्नोलोजी ",
      fullnameen: "Venture Technology",
      phonenumber: "9863788293"
    },
    {
      sn: 2,
      fullnamenp: "वेन्चर टेक्नोलोजी ",
      fullnameen: "Denture Technology",
      phonenumber: "9863788293"
    },
    {
      sn: 3,
      fullnamenp: "वेन्चर टेक्नोलोजी ",
      fullnameen: "Senture Technology",
      phonenumber: "9863788293"
    },
    {
      sn: 4,
      fullnamenp: "व टेक्नोलोजी ",
      fullnameen: "Tension Technology",
      phonenumber: "9863788293"
    },

  ]

  const [isTable, setTable ] = useState(true);

  const handleFunction = () => {
    console.log(isTable)
      setTable(!isTable);
  }

  return (
    <>
      <FilterInputField title="Family Member" buttonName="ADD DOCUMENT" btnFunction={handleFunction} />
      {
        isTable ? 
        <MainTable tableColumns={columnFamilyMember} tableData={dummyData} />
          :
        <ModalFamilyMember />
      }
    </>
  );
};

export default FamilyMember;
