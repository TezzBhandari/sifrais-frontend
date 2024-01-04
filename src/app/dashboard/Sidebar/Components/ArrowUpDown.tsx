import React, { useState} from 'react'
import Image from 'next/image';
import { TArrow } from '../../types';


const ArrowUpDown: React.FC<TArrow> = ( { setArrowDown, setClickedArrow, sideElementId,  sideElementName } ) => {

    const [ isArrowbarOpen, setArrowbarOpen ] = useState(false)
    
    const arrowBurger = () => {   
        setArrowbarOpen(!isArrowbarOpen);
        setArrowDown(!isArrowbarOpen) 
        setClickedArrow(sideElementId)
    }

    console.log("arrow bar rerender: ", isArrowbarOpen)

  return (

    <button onClick={() => arrowBurger()}>
    <div className='flex flex-row'>
    <li ><p>{sideElementName}</p></li> 
    <Image src={ `/assets/icons/sidebar/${isArrowbarOpen ? 'arrowdown' : 'arrowup'}.svg`}  width={12} height={12} alt='arrow' />
    </div>
    </button>
  )
}

export default ArrowUpDown