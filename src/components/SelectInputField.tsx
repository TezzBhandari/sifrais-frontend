"use client";
// import { cn } from "@/lib/utils/classnames";
// import Image from "next/image";
// import React, { InputHTMLAttributes } from "react";
// import DownArrow from "../../public/assets/logo/DownArrow.svg";

// // Option Type
// interface Option {
//   value: string;
//   label: string;
// }

// interface SelectInputFieldProps extends InputHTMLAttributes<HTMLSelectElement> {
//   options: Option[];
//   selectChange: (selectedValue: Option["value"]) => void;
// }

// const SelectInputField: React.FC<SelectInputFieldProps> = ({
//   id,
//   options,
//   selectChange,
//   className,
// }) => {
//   return (
//     <div className="select-container border border-[#ACB1C6] relative max-w-md w-full rounded-md bg-transparent">
//       <select
//         className={cn(
//           "w-full rounded-md px-3 py-2 h-10 bg-transparent appearance-none",
//           className
//         )}
//         id={id}
//         onChange={(e) => selectChange(e.target.value)}
//       >
//         <div className="min-h-11">
//           {options.map((option) => {
//             return (
//               <option value={option.value} key={option.value}>
//                 {option.label}
//               </option>
//             );
//           })}
//         </div>
//       </select>

//       <span className="absolute top-1/2 -translate-y-1/2 right-2 text-[#002147]">
//         <Image src={DownArrow} alt={"Down Arrow Icon"} />
//       </span>
//     </div>
//   );
// };

// SelectInputField.displayName = "SelectInputField";

// export type { Option };

// export default SelectInputField;

//  REACT SELECT: DEPENDCY HEADLESS UI AND REACT HOOK FORM

// menu is open, the list of items receives focus and is automatically navigable via the keyboard.

import { useState } from "react";
import { Combobox, Listbox } from "@headlessui/react";

interface SelectIputFieldProps {
  options: Array<string>;
  value: string;
  onChange: (...event: any[]) => void;
  // labelExtractor: (item: TData) => string;
  // valueExtractor: (item: TData) => string;
  // onValueChange: (value: string, item: TData) => void;
}

function SelectInputField({
  options,
  // labelExtractor,
  // valueExtractor,
  value,
  onChange,
}: // onValueChange,
SelectIputFieldProps) {
  // const [selectedPerson, setSelectedPerson] = useState<TData>(options[0]);
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) => {
          return option.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={value} onChange={onChange}>
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
      <Combobox.Options>
        {filteredOptions.map((option, index) => (
          <Combobox.Option key={option + index} value={option}>
            {option}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
}

export default SelectInputField;
