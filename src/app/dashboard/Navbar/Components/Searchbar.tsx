import React from 'react'
import styles from "./Navcomponents.module.css"

const Searchbar = () => {
  return (
    <div className={`flex flex-row items-center ${styles.navsearchbox}`}>
        <div className={styles.searchicon}>
        </div>
        <input type='search'></input>
        <p>खोज</p>
    </div>
  )
}

export default Searchbar