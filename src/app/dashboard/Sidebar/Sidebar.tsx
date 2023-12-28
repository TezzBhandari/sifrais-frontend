// SideBar.tsx

import React, {useState} from 'react';
import { FaBars } from "react-icons/fa6";
import styles from './Sidebar.module.css';


const sidebarElements = [
    {
        id: 1,
        name: "Smith",
        icon: <FaBars />
    },
    {
        id: 2,
        name: "Ram",
        icon: <FaBars />
    },
    {
        id: 3,
        name: "Hari",
        icon: <FaBars />
    },
]


const Sidebar = () => {

    const [ isSidebarOpen, setSidebarOpen] = useState(true);
    const handleBurger = () => {
        setSidebarOpen(!isSidebarOpen)
    }

  return (
    <nav
      className={`text-white min-h-screen ${styles.sidebarMain}`} style={{width: `${ isSidebarOpen? '60px' : '300px'  }`}}>
      <div className="p-4">
        <div className='flex justify-end'>
           <button onClick={handleBurger}> <FaBars size={20} /> </button>
           </div>
           <div className='sidebarelements' style={{listStyle: 'none', marginTop: "20px"}}>
                {
                    sidebarElements.map((sideelement)=> {
                        return (
                            <div className='flex flex-row justify-center'>
                                <div className={styles.elementBox}>
                                    <li className={styles.icon}>{sideelement.icon}</li>
                                    {
                                        !isSidebarOpen? 
                                        <li className={styles.elementname} ><p>{sideelement.name}</p></li> :
                                        ''
                                    }
                                </div>
                            </div>
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
