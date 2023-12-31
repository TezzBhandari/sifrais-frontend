import React, { InputHTMLAttributes, forwardRef } from "react";
import { RefCallBack } from "react-hook-form";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: RefCallBack;
}

/**
 * Reusable Custom Input field with base css style
 * @param InputFieldProps {name: string; refer?: RefCallBack}
 * @returns React.JSX.Element
 */
const InputField: React.FC<InputFieldProps> = ({ inputRef, ...rest }) => {
  return (
    <input
      className="border-[1.5px] text-sm font-normal border-black rounded-sm py-3 px-4 focus:outline-1 focus:outline-[#0062D1]"
      ref={inputRef}
      {...rest}
    />
  );
};

export default InputField;
