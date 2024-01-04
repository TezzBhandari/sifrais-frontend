"use client";
import React, { ChangeEvent, useState } from "react";
import styles from "../FormComponent.module.css";
import stylesinput from './formInputComponent.module.css';
import InputField from "../InputField/InputField";
import InputFieldNep from "../InputField/InputFieldNep";

const Citizenshipinfo = () => {
  const DummyData = [
    {
      citizenshipNumber: "7482-434-34",
      issuedDistrict: "Kathmandu",
      issuedDate: "2074-08-06",
      type: "Generational",
      dob: "2070-09-28",
      address: [
        {
          temproray: {
            province: "Bagmati",
            district: "Lalitpur",
            metropolitan: "Lalitpur",
            ward: "07",
            tole: "Chakupat",
          },
          permanent: {
            province: "Bagmati",
            district: "Kathmandu",
            metropolitan: "Chandragiri",
            ward: "12",
            tole: "Satungal",
          },
        },
      ],
    },
  ];
  const citInfo = {
    citizenshipNumber: "",
    issuedDistrict: "",
  }
  const [CitInfo, setCitInfo] = useState(citInfo)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target;
      setCitInfo(
        {
          ...CitInfo, 
          [name] : value
        }
      )
  }

  const handleInput = () => {
    console.log(CitInfo)
  }

  return (
    <>
      <div className={`${styles.citizenshipInfo} ${stylesinput.formInputComponent}`} >
        <h1 className="underline" id={styles.ctitle}>Citizenship Info: </h1>
        {DummyData.map((cit) => {
          return (
            <>
            <div className="flex flex-row justify-between">
              <div>
                <div className={styles.englishInfo}>
                  <div className="flex flex-row">
                    <h2>Citizenship Number:</h2>
                    <InputField type="text" name="citizenshipNumber" value={CitInfo.citizenshipNumber} onChange={handleChange}/>
                  </div>

                  <div className="flex flex-row">
                    <h2>Issued Distrct:</h2>
                    <InputField type="text" name="issuedDistrict" value={CitInfo.issuedDistrict}  onChange={handleChange}/>
                  </div>
                  <button onClick={handleInput}>CLICKME</button>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex flex-row">
                    <h2>Issued Date:</h2>
                    <p>{cit.issuedDate}</p>
                  </div>

                  <div className="flex flex-row">
                    <h2>Citizenship Type:</h2>
                    <p>{cit.type}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Here starts citizen Address details*/}
            <div className="flex flex-row gap-5 justify-between mt-2">
            <h1 className="underline" style={{marginRight: "25px"}}>Address</h1>
            <h1 className="underline">Province</h1>
            <h1 className="underline">District</h1>
            <h1 className="underline">Metro/Sub</h1>
            <h1 className="underline">Ward No</h1>
            <h1 className="underline">Tole</h1>
            </div>
            <div className="flex flex-row justify-between">
            <h1>Temprorary: </h1>
            {cit.address.map((value)=> <p>{value.temproray.province}</p>)}
            {cit.address.map((value)=> <p>{value.temproray.district}</p>)}
            {cit.address.map((value)=> <p>{value.temproray.metropolitan}</p>)}
            {cit.address.map((value)=> <p>{value.temproray.ward}</p>)}
            {cit.address.map((value)=> <p>{value.temproray.tole}</p>)}
            </div>
            <div className="flex flex-row justify-between">
            <h1>Permanent: </h1>
            {cit.address.map((value)=> <p>{value.permanent.province}</p>)}
            {cit.address.map((value)=> <p>{value.permanent.district}</p>)}
            {cit.address.map((value)=> <p>{value.permanent.metropolitan}</p>)}
            {cit.address.map((value)=> <p>{value.permanent.ward}</p>)}
            {cit.address.map((value)=> <p>{value.permanent.tole}</p>)}
            </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Citizenshipinfo;
