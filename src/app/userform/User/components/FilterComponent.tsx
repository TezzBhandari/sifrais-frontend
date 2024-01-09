import React from 'react';
import styles from "./UserComponent.module.css";
import SelectField from '../../components/InputField/SelectField';
import { GrPowerReset } from "react-icons/gr";

const FilterComponent = () => {
  return (
    <div className={styles.filterComponent}>
    <SelectField label="Province" name="Province" options={["Lumbini", "Bagmati"]} customStylesInput={{width: "140px"}}/>     
    <SelectField label="District" name="District" options={["Kapilvastu", "Rupandehi"]} customStylesInput={{width: "140px"}} />  
    <SelectField label="Ward" name="Ward" options={["2", "3"]} customStylesInput={{width: "140px"}}/>  
    <SelectField label="Ward" name="Ward" options={["1", "3"]} customStylesInput={{width: "140px"}}/>  
    <div className={`h-10 ${styles.filterBox}`}>
    <GrPowerReset />
    </div>
    <div className={`mx-5 ${styles.filterBox}`} style={{backgroundColor: "#002147", color: "white"}}>
            <button className='p-5'>Apply Filter</button>
    </div>
    </div>
  )
}

export default FilterComponent