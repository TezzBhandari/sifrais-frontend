import React from 'react'
import { sidebarDashboard } from '../sidebarData'
import styles from "./Subheading.module.css"

const SideDashboard = () => {
  return (
    <div>
            {
                sidebarDashboard.map((i) => {
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

export default SideDashboard