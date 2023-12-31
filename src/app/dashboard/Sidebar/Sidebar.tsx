// SideBar.tsx

import React, {useState} from 'react';
import { FaBars } from "react-icons/fa6";
import styles from './Sidebar.module.css';
import Image from 'next/image';
import Sifaris from './Components/Sifaris';
import { sidebarElements, sidebarSifaris } from './sidebarData'
import ArrowUpDown from './Components/ArrowUpDown';


const Sidebar = () => {

    const [ isSidebarOpen, setSidebarOpen] = useState(true);
  

 
 
    const handleBurger = () => {
        setSidebarOpen(!isSidebarOpen)
    }


  return (
    <nav
      className={`text-white min-h-screen ${styles.sidebarMain}`} style={{width: `${ isSidebarOpen? '90px' : '300px'  }`}}>
      <div className="p-4">
        <div className='flex justify-end'>
           <button onClick={handleBurger}> <Image src={`/assets/icons/sidebar/${isSidebarOpen? 'arrowright' : 'arrowleft'}.svg`} width={12} height={12} alt='Arrow' className={styles.sidebararrow} /> </button>
           </div>
           <div className='sidebarelements' style={{ marginTop: "10px"}}>
                {
                    sidebarElements.map((sideelement)=> {
                        return (
                            <>
                            <div className='flex flex-row justify-center'>
                                <div className={styles.elementBox}>
                                    <Image src={sideelement.icon} width={24} height={24} alt={sideelement.name} className={styles.sidebaricon} />
                                    
                                    {
                                        !isSidebarOpen? 
                                        <>
                                        <li className={styles.elementname} ><p>{sideelement.name}</p></li> 
                                        <ArrowUpDown  />
                                        </>
                                        : ''
                                        
                                    }
                                </div>

                            </div>
                           
                            </>
                        )
                    })
                }
            </div>
      
      </div>
      {/* Add your sidebar navigation links here */}
    </nav>
  );
};

export default Sidebar;
