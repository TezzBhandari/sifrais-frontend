import React, {InputHTMLAttributes} from 'react'
import syles from "./Button.module.css";
import { TButtonProps } from '../../types'; 


const Button : React.FC<TButtonProps> = ({buttonName, onClick, className}) => {
  return (
    <div>
        <button className={`${className} btn-sm ${syles.customBtn}`} onClick={onClick}>{buttonName}</button>
    </div>
  )
}

export default Button