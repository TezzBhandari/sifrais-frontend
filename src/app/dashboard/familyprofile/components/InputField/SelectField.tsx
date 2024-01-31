import React, { InputHTMLAttributes } from 'react'
import styles from "../userForm.module.css";


interface IInputField extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    onChange?: () => void;
    name: string;
    options: string[];
    customStyles?: React.CSSProperties;
    customStylesInput?: React.CSSProperties;
  }

const SelectField: React.FC<IInputField>= ( { label, name, options, customStyles, customStylesInput} ) => {

  return (
    <div className={`flex flex-col mx-5 ${styles.inputField}`} style={customStyles}>
    <label htmlFor={name} style={{ color: "#ACB1C6" , fontSize: "12px"}}>       
    {label.charAt(0).toUpperCase() + label.slice(1)} 
    </label>
    <select style={customStylesInput} id={name} className='w-[400px] h-10 px-4 py-2 bg-white rounded-lg border border-stone-300 justify-between items-center inline-flex'>
       <option value={label} disabled >{label}</option>
        {
            options.map((value, vauleIndex)=>{
                return (
                    <option key={vauleIndex} value={value}>{value}</option>
                )
            })
        }
    </select>
    </div>
  )
}

export default SelectField