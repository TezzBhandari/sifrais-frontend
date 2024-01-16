import React from 'react';
import Image  from 'next/image';
import styles from './FormComponent.module.css';

export const Formnav = () => {
  return (
    <div className={styles.formNav}>
       <div>
        <Image src="/assets/logo/mainlogo.svg" width={70} height={70} alt='Govlogo' />
        </div>
        <div>
          <h1 style={{textAlign: "center"}}>Lalitpur</h1>
          <h1 className='text-xl'>Public User Profile.</h1>
        </div>
        <div>
   
        </div>
    </div>
  )
}
