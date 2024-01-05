"use client";
import Image from "next/image";
import SearchIcon from "../../../../../../public/assets/logo/SearchIcon.svg";
import { RxCross2 } from "react-icons/rx";

import { useTableFilterInputStore } from "@/store/tableFilterInputStore";

const FilterInputField = () => {
  const { filtering, setFiltering, resetFilter } = useTableFilterInputStore();
  return (
    <>
      <input
        className=" min-w-[380px] focus:border-[#002147] placeholder:tracking-wide placeholder:font-light placeholder:text-[#ACB1C6] px-3 py-1.5 border-[1.5px] border-[#ACB1C6] rounded-full text-base placeholder:text-base focus:outline text-[#ACB1C6] focus:outline-[#ACB1C6] bg-transparent bg-slate-300"
        type="text"
        autoComplete="off"
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
        placeholder="Search by name, address or phone number"
      />
      {filtering !== "" ? (
        <div
          className="clear-input-container absolute right-11 w-5 h-5 p-0 cursor-pointer transition-all text-[#002147]"
          onClick={(e) => resetFilter()}
        >
          <RxCross2 className="w-full h-full" />
        </div>
      ) : null}
      <button className="bg-[#002147] p-[9px] absolute right-0 rounded-full">
        {/* <Image
          className="bg-transparent"
          src={SearchLogo}
          alt={"search icon"}
        /> */}
        <Image src={SearchIcon} alt={"Search Icon"} />
      </button>
    </>
  );
};

export default FilterInputField;
