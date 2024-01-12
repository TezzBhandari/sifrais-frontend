"use client";
import Image from "next/image";
import SearchIcon from "../../../public/assets/logo/SearchIcon.svg";
import { RxCross2 } from "react-icons/rx";
import Add from "../../../public/assets/icons/Add.svg"
import { useTableFilterInputStore } from "@/store/tableFilterInputStore";
import Button from "../Button"

// export FilterInputField
interface IFilterInputField {
    title: string;
    buttonName: string;
    btnFunction: () => void;
}


const FilterInputField: React.FC<IFilterInputField> = ({title, buttonName, btnFunction}) => {

  const { filtering, setFiltering, resetFilter } = useTableFilterInputStore();
  return (
    <div className="flex flex-row justify-between items-center my-5">
      <div>
        <h1 className="text-xl font-bold" >{title}</h1>
      </div>
    <div className="flex items-center" >
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
          className="clear-input-container ml-[-15] w-5 h-5 p-0 cursor-pointer transition-all text-[#002147]"
          onClick={(e) => resetFilter()} style={{marginLeft: "-58px"}}
        >
          <RxCross2 className="w-full h-full" />
        </div>
      ) : null}
        <button className="bg-[#002147] p-[9px] rounded-full" style={{marginRight: "40px"}}>
        {/* <Image
          className="bg-transparent"
          src={SearchLogo}
          alt={"search icon"}
        /> */}
        <Image src={SearchIcon} alt={"Search Icon"}  />
      </button>
      </div>
      <div>
        <Button ButtonColor="primary" onClick={btnFunction} style={{color: "white", backgroundColor: "#002147"}} className="flex flex-row gap-2 items-center rounded-lg"><Image src={Add} alt="" />{buttonName}</Button>
      </div>
    </div>
  );
};

export default FilterInputField;
