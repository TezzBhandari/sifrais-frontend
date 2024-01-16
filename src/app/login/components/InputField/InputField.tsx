import React, { InputHTMLAttributes } from 'react'
import { useFormContext, FieldValues } from 'react-hook-form';

interface IInputField extends InputHTMLAttributes<HTMLInputElement> {
}

const InputField: React.FC<IInputField> = ({type, id, className, name, placeholder, onChange, value}) => {
  return (
    <>
        <input type={type} id={id} className={className} value={value} name={name} placeholder={placeholder} onChange={onChange} />
    </>
  )
}

export default InputField