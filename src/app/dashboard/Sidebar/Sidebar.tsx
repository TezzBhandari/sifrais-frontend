// SideBar.tsx

import React, {useState} from 'react';
import { FaBars } from "react-icons/fa6";
import styles from './Sidebar.module.css';
import Image from 'next/image';
import SideSifaris from './Components/SideSifaris';
import { sidebarElements} from './sidebarData'
import ArrowUpDown from './Components/ArrowUpDown';
import SideDashboard from './Components/SideDashboard';
import SideEmployee from './Components/SideEmployee';


type TSidepar = {
    isSidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar: React.FC<TSidepar> = ({ isSidebarOpen, setSidebarOpen }) => {

    const data = [
        {
            id: 1,
            name: 'dashboard',
            component: <SideDashboard />
        },
        {
            id: 2,
            name: 'sifaris',
            component: <SideSifaris />
        },
        {
            id: 3,
            name: 'employee',
            component: <SideEmployee />
        }
    ]

    const [isArrowDown, setArrowDown ] = useState(false);
    const [clickedArrow, setClickedArrow] = useState(0)


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
                    sidebarElements.map((sideelement, idxValue)=> {
                        return (
                            <React.Fragment key={idxValue}>
                            <div className='flex flex-row justify-center'>
                                <div className={styles.elementBox} style={{backgroundColor: `${isArrowDown && sideelement.id == clickedArrow? "rgba(217, 217, 217, 0.08)": ''}`}}>
                                    <Image src={sideelement.icon} width={24} height={24} alt={sideelement.name} className={styles.sidebaricon} />
                                    
                                    {
                                        // Handles all the element of the Sidebar Header.
                                        !isSidebarOpen? 
                                        <>
                                        <div>
                                        <ArrowUpDown sideElementName={sideelement.name} setArrowDown={setArrowDown} setClickedArrow={setClickedArrow} sideElementId={sideelement.id} />
                                        </div>
                                        </>
                                        : ''
                                        
                                    }

                                </div>

                            </div>

                            {
                                        isArrowDown && clickedArrow == sideelement.id && !isSidebarOpen?  
                                        <div className='flex justify-center' >
                                        <div className={`flex justify-center ${styles.sidebox}`}>
                                       {/* If arrow is down in specific Bar, checking which Component to show based on click. */}
                                       {
                                        data[(clickedArrow-1)].component
                                        }
                                        </div>
                                        </div>
                                        :
                                        ''
                            }
                           
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    </nav>
  );
};

export default Sidebar;
