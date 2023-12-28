// NavBar.tsx

import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import styles from './Navbar.module.css';


const Navbar = () => {
  return (
    <div className={styles.navbarMain}>
        <Image src='/assets/logo/mainlogo.svg' width={100} height={100} alt="mainLogo" />
    </div>
  );
};

export default Navbar;
