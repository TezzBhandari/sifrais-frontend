import React, {InputHTMLAttributes} from 'react'
import styles from '../UserField/formInputComponent.module.css'


interface TInputEnglish extends InputHTMLAttributes<HTMLInputElement> {
    name: string;    
    value: string;
}

const InputField: React.FC<TInputEnglish> = ( {name, type, onChange, value} ) => {
  return (
    <div className={styles.formInputComponent}>
    <input type={type} name={name} onChange={onChange}  value={value} id="print-input" ></input>
    </div>
  )
}

export default InputField