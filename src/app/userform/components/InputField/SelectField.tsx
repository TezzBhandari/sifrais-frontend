import React, { InputHTMLAttributes } from 'react'
import styles from "../userForm.module.css";


interface IInputField extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    onChange?: () => void;
    name: string;
    options: string[];

  }

const SelectField: React.FC<IInputField>= ( {type, label, name, options} ) => {

  return (
    <div className={`flex flex-col m-3 mx-20 ${styles.inputField}`}>
    <label htmlFor={name} style={{ color: "#ACB1C6" , fontSize: "12px"}}>       
    {label.charAt(0).toUpperCase() + label.slice(1)} 
    </label>
    <select id={name} className='w-[295px] h-10 px-4 py-2 bg-white rounded-lg border border-stone-300 justify-between items-center inline-flex'>
        {
            options.map((value)=>{
                return (
                    <option value={value}>{value}</option>
                )
            })
        }
    </select>
    </div>
  )
}

export default SelectField