import React from 'react'
import styles from './Subheading.module.css';
import { sidebarSifaris } from '../sidebarData';
import Image from 'next/image';

const Sifaris = () => {
  return (
    <div>
            {
                sidebarSifaris.map((i) => {
                return (
                    <div className={` flex flex-row ${styles.sidebarSubheading}`}>
                    <li>{i.name}</li>
                    </div>
                )
                })
            }
    </div>
  )
}

export default Sifaris