// NavBar.tsx
"use client";
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import styles from './Navbar.module.css';
import Searchbar from './Components/Searchbar';
import NavProfile from './Components/NavProfile';
import { userEmailCheck }  from '../../login/components/authFile/loginAuth'


const Navbar = () => {

  const { email  } = userEmailCheck();

  return (
    <div className={styles.navbarMain}>
      <div className='flex flex-row items-center'>
        <Image src='/assets/logo/mainlogo.svg' width={100} height={100} alt="mainLogo" className={styles.navbarmainlogo} />
        <div style={{margin: "10px"}}>
        <h1 className={styles.navbartitle} >ई- सिफरारिस प्रणाली</h1>
        <h2 className={styles.navbarsubtitle}>बेनी नगरपालिका, नगर कार्यपालिकाको कार्यल</h2>
        <h2 className={styles.navbarsubtitle}>बेनी बजार, म्याग्दी</h2>
        </div>
        </div>

        <div className="navsearchbar">
        <Searchbar />
        </div>

        <div className="navuserprofile">
        <NavProfile email={email} />
        </div>
    </div>
  );
};

export default Navbar;
