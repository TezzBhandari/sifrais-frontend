import React, { InputHTMLAttributes, forwardRef } from "react";
import { RefCallBack } from "react-hook-form";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  refer?: RefCallBack;
}

const InputField: React.FC<InputFieldProps> = ({ refer, ...rest }) => {
  return (
    <input ref={refer} {...rest}>
      InputField
    </input>
  );
};

export default InputField;
