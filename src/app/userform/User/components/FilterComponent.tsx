import React , {useEffect, useState}from 'react';
import styles from "./UserComponent.module.css";
import SelectField from '../../components/InputField/SelectField';
import { GrPowerReset } from "react-icons/gr";
import Select from 'react-select';


type TProvinces = {
  id: number,
  province_en: string,
  province_np: string
}

type TSelectOptions = {
  value: number,
  label: string
}

const FilterComponent = () => {

  const [provincesList, setProvinces] = useState<TProvinces[]>([]);
  const [selectOptions, setSelectOptions] = useState<TSelectOptions[]>([]);

  useEffect(() => {

      const getProvinces = async () => {
        const response = await fetch("https://sifaris.ktmserver.com/backend/api/provinces");
        const result = await response.json();
        const formattedOptions = result.data.map((items)=> ({
          value: items.id,
          label: `${items.province_en} / ${items.province_np}` 
        }))
        setSelectOptions(formattedOptions);
      }

      getProvinces();
  },[])


  return (
    <div className={styles.filterComponent}>
    {
      selectOptions.length < 1 ?
      <Select options={[{value: "Loading...", label: "Loading..."}]} placeholder="LOL"  className={styles.customSelect} />:
      <Select options={selectOptions} placeholder="LOL"  className={styles.customSelect} />
    }
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