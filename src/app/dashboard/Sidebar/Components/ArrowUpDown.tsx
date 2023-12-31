import React, {InputHTMLAttributes, useState} from 'react'
import Image from 'next/image';


type TArrow = {
    setArrowDown: React.Dispatch<React.SetStateAction<boolean>>
}

const ArrowUpDown: React.FC<TArrow> = ( { setArrowDown } ) => {

    const [ isArrowbarOpen, setArrowbarOpen ] = useState(false)
    
    const arrowBurger = () => {   
        setArrowbarOpen(!isArrowbarOpen);
        setArrowDown(!isArrowbarOpen) 
    }

    console.log("arrow bar rerender: ", isArrowbarOpen)

  return (
    <button onClick={arrowBurger}>

    <Image src={ `/assets/icons/sidebar/${isArrowbarOpen ? 'arrowdown' : 'arrowup'}.svg`}  width={12} height={12} alt='arrow' />

    </button>
  )
}

export default ArrowUpDown