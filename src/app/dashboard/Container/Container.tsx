import React from 'react';
import styles from "./Container.module.css";

type TContainer = {
  isSidebarOpen: boolean;
}

const Container: React.FC<TContainer> = ( {isSidebarOpen} ) => {
  
  return (
    <div className={styles.containerBody} style={{left: `${isSidebarOpen? '90px': '300px'}`}}>
        <p>Helloworld</p>
    </div>
  )
}

export default Container