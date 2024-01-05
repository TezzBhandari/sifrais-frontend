import React from "react";
import UserList from "./components/UserList";
import Image from "next/image";

import AddIcon from "../../../../../public/assets/Add_Icon.svg";
import ClearIcon from "../../../../../public/assets/Clear_Logo.svg";
import ProvinceFilter from "./components/ProvinceFilter";
import { Users } from "./components/FakeData";
import UserColumns from "./components/UserColumn";
import { User } from "./components/types";
import FilterInputField from "./components/FilterInputField";

const page = () => {
  return (
    <div className="bg-[#dde4ee] min-h-[calc(100vh-6rem)] overflow-hidden px-4 py-6">
      <div className="container flex flex-col gap-3 mx-auto">
        {/* FILTER SECTION  */}
        <div className="filter-container bg-white rounded-lg px-6 py-4 grid grid-cols-[1fr_max-content]">
          {/* FILTER OPTIONS SECTION  */}
          <div className="filter-otions-wrapper flex items-center px-12 flex-wrap justify-between">
            <div className="province-filter">
              <ProvinceFilter />
            </div>
            <div className="district-filter">
              <ProvinceFilter />
            </div>
            <div className="ward-filter">
              <ProvinceFilter />
            </div>
            <div className="province-filter">
              <ProvinceFilter />
            </div>
          </div>
          {/* FILTER BUTTON SECTION  */}
          <div className="filter-button-wrapper flex items-center space-x-4">
            <div className="clear-button">
              <button className="px-4 py-2.5 rounded-xl border-[1.5px] border-[#ACB1C6]">
                <Image src={ClearIcon} alt={"clear button icon"} />
              </button>
            </div>
            <div className="filter-button ">
              <button className="bg-[#002147] py-3 px-5 capitalize font-medium text-sm gap-2 rounded-xl text-white">
                apply filter
              </button>
            </div>
          </div>
        </div>
        {/* TABLE-CONTAINER  */}
        <div className="table-container px-6 py-4 rounded-lg bg-white">
          {/* TABLE NAVIGATION SECTION  */}
          <div className="table-navigation mb-5 grid grid-cols-[max-content_2fr_1fr] overflow-hidden bg-transparent">
            {/* LOGO SECTION  */}
            <div className="table-logo flex justify-center flex-col">
              <h2 className="text-3xl text-[#1D1C2B] font-bold">User</h2>
              <p className="text-base text-[#002147] font-normal tracking-wider">
                {"home > user > it-nagar"}
              </p>
            </div>
            {/* SEARCH BAR SECTION  */}
            <div className="search flex items-center justify-center">
              <div className="input-container relative flex items-center justify-center">
                <FilterInputField />
              </div>
            </div>
            {/* BUTTON SECTION  */}
            <div className="add-button-container flex items-center justify-end">
              <div className="button-set">
                <button className="bg-[#002147] flex items-center py-3 px-5 capitalize font-medium text-sm gap-2 rounded-xl text-white">
                  <Image src={AddIcon} alt={"add-icons"} />
                  <span>add new user</span>
                </button>
              </div>
            </div>
          </div>
          {/* actual table  */}
          <div className="table-container w-full bg-transparent">
            <UserList<User> tableColumns={UserColumns} tableData={Users} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
