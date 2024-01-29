"use client";
import { Popover } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

function ProvinceFilter() {
  return (
    <Popover className="relative">
      <Popover.Button className="flex text-[0.875rem] font-normal text-[#ACB1C6]  focus:outline-none border focus:text-[#002147] border-[#DDE4EE] bg-[#FEFDFE] px-2 rounded-md py-1 space-x-24 items-center">
        <span>Province</span>
        <span>
          <IoIosArrowDown />
        </span>
      </Popover.Button>

      <Popover.Panel className=" top-10 absolute z-10">
        <div className="grid bg-white p-4 rounded-lg shadow-[0px_20px_32px_0px_rgba(96,97,112,0.24),_0px_2px_8px_0px_rgba(40,41,61,0.08);]">
          <p>Analytics</p>
          <p>Engagement</p>
          <p>Security</p>
          <p>Integrations</p>
        </div>

        {/* <img src="/solutions.jpg" alt="" /> */}
      </Popover.Panel>
    </Popover>
  );
}

export default ProvinceFilter;
