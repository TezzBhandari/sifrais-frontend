import React, { ChangeEvent, InputHTMLAttributes } from "react";
import styles from "../userForm.module.css";

interface IInputField extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
  onChange?: () => void;
  name: string;
}

const InputField: React.FC<IInputField> = ({
  type,
  label,
  name,
  onChange,
  placeholder,
}) =>

{

  return (
    <div className={`flex flex-col m-3 mx-5 ${styles.inputField}`}>
      
      <label style={{ color: "#ACB1C6" , fontSize: "12px"}}>
        
        {label.charAt(0).toUpperCase() + label.slice(1)}
      
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-[400px] h-10 px-4 py-2 bg-white rounded-lg border border-stone-300 justify-between items-center inline-flex"
      ></input>
   
    </div>
  );
};

export default InputField;
