import React, { InputHTMLAttributes, forwardRef } from "react";
import { RefCallBack } from "react-hook-form";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  refer?: RefCallBack;
}

const InputField: React.FC<InputFieldProps> = ({ refer, ...rest }) => {
  return (
    <input className="px-2 py-2 " ref={refer} {...rest}>
      InputField
    </input>
  );
};

export default InputField;
