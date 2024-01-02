import React from 'react';
import styles from "./Container.module.css";
import { TContainer } from '../types';


const Container: React.FC<TContainer> = ( {isSidebarOpen} ) => {
  
  return (
    <div className={styles.containerBody} style={{left: `${isSidebarOpen? '90px': '300px'}`}}>
             <p style={{height: "900px"}}>FROM DASHBOARD</p>
      <p style={{height: "900px"}}>FROM DASHBOARD</p>
      <p style={{height: "900px"}}>FROM DASHBOARD</p>
      <p style={{height: "900px"}}>FROM DASHBOARD</p>
      <p style={{height: "900px"}}>FROM DASHBOARD</p>
      <p style={{height: "900px"}}>FROM DASHBOARD</p>
      <p style={{height: "900px"}}>FROM DASHBOARD</p>
    </div>
  )
}

export default Container