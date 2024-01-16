"use client";
import React, { InputHTMLAttributes } from "react";
import nepalify from "nepalify";
import styles from "../userForm.module.css";


interface TInputNepali extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  label: string;
  placeholder: string;
}

const InputFieldNep: React.FC<TInputNepali> = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  type,
}) => {
  return (
    <div className={`flex flex-col m-3 mx-5 ${styles.inputField}`}>
      <label style={{ color: "#ACB1C6", fontSize: "12px" }}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={nepalify.format(value)}
        className="w-[400px] h-10 px-4 py-2 bg-white rounded-lg border border-stone-300 justify-between items-center inline-flex"
      ></input>
    </div>
  );
};

export default InputFieldNep;
