import React from 'react'
import InputField from '../InputField/InputField'
import styles from "../userForm.module.css"
import SelectField from '../InputField/SelectField'
import { province } from '../../Data' 

const FamilyProfile = () => {
  return (
    <div>
    {/* Basic Information */}
    <div>
        <div style={{backgroundColor: "white"}}>
        <h1 id={styles.ititle}>Basic Information</h1>
        <br></br>
        </div>
        <div className="flex  justify-between flex-row flex-wrap">
        <InputField label="Email" type="text" name="firstname" placeholder="Email"/>
        <InputField label="Mobile Number" type="text" name="phonenumber" placeholder="Phone number"/>
        <InputField label="Landline Number" type="text" name="landlinenumber" placeholder="Landline number"/>
        <InputField label="Tax Payer Number" type="text" name="taxpayernumber" placeholder="Tax Payer number"/>
        </div>
    </div>
    {/* Permanent Address */}
    <div>
    <div>
        <h1 id={styles.ititle}>Permanent Address</h1>
        <br></br>
        </div>
        <div className="flex  justify-between flex-row flex-wrap">
        <SelectField label='Province' name='permanentProvince'options={province} />
        <InputField label="district" type="text" name="permanentDistrict" placeholder="District"/>
        <InputField label="Local Level" type="text" name="permanentLocalLevel" placeholder="Local Level"/>
        <InputField label="Ward Number" type="text" name="permanentWard" placeholder="Ward Number"/>
        <InputField label="Tole" type="text" name="permanentTole" placeholder="Tole"/>
        </div>
    </div>
    {/* Temprorary Address */}
    <div>
    <div>
        <h1 id={styles.ititle}>Temporary Address</h1>
        <br></br>
        </div>
        <div className="flex justify-between flex-row flex-wrap">
        <SelectField label='Province' name='temporaryProvince'options={province}/>
        <InputField label="district" type="text" name="temporaryDistrict" placeholder="District"/>
        <InputField label="Local Level" type="text" name="temoraryLocalLevel" placeholder="Local Level"/>
        <InputField label="Ward Number" type="text" name="temproraryWard" placeholder="Ward Number"/>
        <InputField label="Tole" type="text" name="temporaryTole" placeholder="Tole"/>
        </div>

    </div>
    </div>
  )
}

export default FamilyProfile