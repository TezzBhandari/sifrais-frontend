import ItNagar from "../components/ItNagar";
import Image from "next/image";
import ProvinceFilter from "./components/ProvinceFilter";
import ClearIcon from "@/../public/assets/Clear_Logo.svg";

const page = () => {
  return (
    <div className="flex flex-col gap-2">
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
          {/* FILTER CLEAR BUTTON SECTION  */}
          <div className="clear-button">
            <button className="px-4 py-2.5 rounded-xl border-[1.5px] border-[#ACB1C6]">
              <Image src={ClearIcon} alt={"clear button icon"} />
            </button>
          </div>

          {/* APPLY FILTER BUTTON SECTION  */}
          <div className="filter-button ">
            <button className="bg-[#002147] py-3 px-5 capitalize font-medium text-sm gap-2 rounded-xl text-white">
              apply filter
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] rounded-[20px] p-6 container">
        <ItNagar />
      </div>
    </div>
  );
};

export default page;
