"use client";
import Image from "next/image";
import SearchLogo from "../../../../../public/assets/icons/navbar/Search_Icon.svg";
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
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.94997 17.8435L8.05469 12.7425L5.41521 10.103L0.310489 15.2077C-0.108417 15.6267 -0.108417 16.3162 0.310489 16.7351L1.41892 17.8435C1.84153 18.2625 2.53477 18.2625 2.94997 17.8435Z"
            fill="#FEFDFE"
          />
          <path
            d="M6.55571 10.2182L7.93847 11.601L9.514 10.0254C11.6604 11.5157 14.6335 11.3081 16.5464 9.39521C18.6929 7.24878 18.6929 3.76037 16.5464 1.61024C14.4 -0.539901 10.9116 -0.536194 8.76145 1.61024C6.84857 3.52312 6.64097 6.49623 8.13124 8.64266L6.55571 10.2182ZM9.84393 2.67789C11.4009 1.12089 13.9255 1.12089 15.4788 2.67789C17.0358 4.23489 17.0358 6.75944 15.4788 8.31273C13.9218 9.86973 11.3972 9.86972 9.84393 8.31273C8.28694 6.75944 8.28694 4.23488 9.84393 2.67789Z"
            fill="#FEFDFE"
          />
        </svg>
      </button>
    </>
  );
};

export default FilterInputField;
