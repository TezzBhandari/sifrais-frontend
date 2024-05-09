"use client";
import React from "react";
import Image from "next/image";

import AddIcon from "@/../public/assets/Add_Icon.svg";

import DynamicRouteHeader from "@/components/DynamicRouteHeader";
import ProvinceFilter from "../it-nagar/components/ProvinceFilter";
import FilterInputField from "../it-nagar/components/FilterInputField";
import UserList from "../it-nagar/components/UserList";
import { User } from "../it-nagar/types";
import UserColumns from "../it-nagar/components/UserColumn";
import { useUsersQuery } from "../it-nagar/utils/api/Users/queries";
import Link from "next/link";
import DataTableSkeleton from "@/components/Table/DataTableSkeleton";

const ItNagar = () => {


  // using tanstack query
  const { data: users, error, isError, isLoading, isPending } = useUsersQuery();

  // handling errors
  if (isError) {
    // console.log("status code from server: ", userList.statusCode);
    return (
      <div>
        error from the server. we will handle it later after we fix it on the
        server
        {JSON.stringify(error)}
      </div>
    );
  }
  if (isLoading) {
    return <><DataTableSkeleton /></>;
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* TABLE-CONTAINER  */}
        <div className="table-container px-6 py-4 rounded-lg bg-white">
          {/* TABLE NAVIGATION SECTION  */}
          <div className="table-navigation mb-5 grid grid-cols-[max-content_2fr_1fr] overflow-hidden bg-transparent">
            {/* LOGO SECTION  */}

            <DynamicRouteHeader pageHeader={"User"} delimeter={">"} />
            {/* SEARCH BAR SECTION  */}
            <div className="search flex items-center justify-center">
              <div className="input-container relative flex items-center justify-center">
                <FilterInputField />
              </div>
            </div>
            {/* BUTTON SECTION  */}
            <div className="add-button-container flex items-center justify-end">
              <div className="button-set">
                <Link
                  href={"/dashboard/admin/dashboard/it-nagar/create-user"}
                  className="bg-[#002147] flex items-center py-3 px-5 capitalize font-medium text-sm gap-2 rounded-xl text-white"
                >
                  <Image src={AddIcon} alt={"add-icons"} />
                  <span>add new user</span>
                </Link>
              </div>
            </div>
          </div>
          {/* Acutal User Table  */}
          <div className="table-container w-full bg-transparent">
            {users === undefined || users.length === 0 ? (
              <div>No Users Data</div>
            ) : (
              <UserList<User> tableColumns={UserColumns} tableData={users} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItNagar;
