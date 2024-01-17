import React from "react";
import Image from "next/image";

import { InputField, InputProps } from "../InputField";
import { cn } from "@/lib/utils/classnames";

import SearchIcon from "../../../public/assets/logo/SearchIcon.svg";

const FilterInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div className="max-w-lg w-full relative ">
        <InputField
          autoComplete="off"
          className={cn(
            "w-full focus:border-[#002147] placeholder:tracking-wide placeholder:font-light placeholder:text-[#ACB1C6] px-3 py-1.5 focus:outline-none focus:ring-0 border-[1.5px] border-[#ACB1C6] rounded-full text-base placeholder:text-base focus:outline text-[#ACB1C6] focus:outline-[#ACB1C6] bg-transparent bg-slate-300",
            className
          )}
          {...rest}
          ref={ref}
        />
        <button className="bg-[#002147] p-[10.5px] absolute top-0 right-0  rounded-full">
          <Image
            src={SearchIcon}
            className="bg-transparent"
            alt={"Search Icon"}
          />
        </button>
      </div>
    );
  }
);

FilterInput.displayName = "FilterInput";

export default FilterInput;
