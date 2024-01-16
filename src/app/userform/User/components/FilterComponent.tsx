import React from 'react';
import styles from "./UserComponent.module.css";
import SelectField from '../../components/InputField/SelectField';
import { GrPowerReset } from "react-icons/gr";
import Select from 'react-select';

const FilterComponent = () => {
  return (
    <div className={styles.filterComponent}>
    <Select options={[{value: "Hello", label: "Hsdffsello"}, {value: "ello", label: "ello"}]} placeholder="Province"  className={styles.customSelect} />
    <Select options={[{value: "Hello", label: "Hsdffsello"}, {value: "ello", label: "ello"}]} placeholder="Province"  className={styles.customSelect} />
    <Select options={[{value: "Hello", label: "Hsdffsello"}, {value: "ello", label: "ello"}]} placeholder="Ward"  className={styles.customSelect} />
    <Select options={[{value: "Hello", label: "Hsdffsello"}, {value: "ello", label: "ello"}]} placeholder="Ward"  className={styles.customSelect} />
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