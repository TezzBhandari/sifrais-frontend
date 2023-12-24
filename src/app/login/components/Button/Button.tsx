import React, {InputHTMLAttributes} from 'react'
import syles from "./Button.module.css";

interface TButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    buttonName: string;
    onClick?: () => void;
}

const Button : React.FC<TButtonProps> = ({buttonName, onClick, className}) => {
  return (
    <div>
        <button className={`${className} btn-sm ${syles.customBtn}`} onClick={onClick}>{buttonName}</button>
    </div>
  )
}

export default Button