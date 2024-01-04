import React, { InputHTMLAttributes } from 'react';
import nepalify from 'nepalify';
import styles from '../UserField/formInputComponent.module.css'
import { Tourney } from 'next/font/google';

interface TInputNepali extends InputHTMLAttributes<HTMLInputElement> {
    name: string;    
    value: string;
}

const InputFieldNep: React.FC<TInputNepali> = ({name,value, onChange, type}) => {
  return (
    <div className={styles.formInputComponent}>
    <input type={type} name={name} onChange={onChange} value={nepalify.format(value)} id="print-input" ></input>
    </div>
  )
}

export default InputFieldNep