"use client";
import React, { ChangeEvent, useState } from 'react'
import stylesInput from "./formInputComponent.module.css"
import styles from '../FormComponent.module.css';
import InputFieldNep from '../InputField/InputFieldNep';

 const Personalinfo = () => {

    const DummyData = [
        {
          userid: "1234982930498932",
          firstname: "Venture",
          lastname: "Technology",
          dob: "2070-09-28",
          gender: "Robot",
          address: "Lalitpur",
          number: "980000000",
          token: "X039294829FHDSF3324"
        },
      ];
      
  const userInfo = {
    firstname: "",
    lastname: "",
    address: "",
    dob: "",
    gender: "",
    number: ""
  
  }

  const [NepUserInfo, setNepUserInfo ] = useState(userInfo);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target;
      setNepUserInfo(
        {
          ...NepUserInfo, 
          [name] : value
        }
      )
  }

  const handlePrint = () => {
    window.print();
  }

  return (
    <>
    <div className="flex justify-between mt-10 mx-5">
    <div className={stylesInput.textField}>
      <div className="flex flex-row">
        <p>Date:</p>............................
      </div>
      <div className="flex flex-row">
        <p>Type Of Sifaris:</p>............................
      </div>
    </div>
  </div>
  <div className={styles.personalInfo}>
    <h1 className="underline" id={styles.ctitle}>Personal Info: </h1>
    {DummyData.map((user) => {
      return (
        <div className="flex flex-row justify-between">
          <div className={styles.englishInfo}>
            <div className="flex flex-row">
              <h2>User ID:</h2>
              <p>{user.userid}</p>
            </div>

            <div className="flex flex-row">
              <h2>First Name:</h2>
              <p>{user.firstname}</p>
            </div>

            <div className="flex flex-row">
              <h2>Last Name:</h2>
              <p>{user.lastname}</p>
            </div>

            <div className="flex flex-row">
              <h2>Address:</h2>
              <p>{user.address}</p>
            </div>

            <div className="flex flex-row">
              <h2>Date of Birth:</h2>
              <p>{user.dob}</p>
            </div>

            <div className="flex flex-row">
              <h2>Gender:</h2>
              <p>{user.gender}</p>
            </div>

            <div className="flex flex-row">
              <h2 className={stylesInput.textField}>Number:</h2>
              <p>{user.number}</p>
            </div>
          </div>

          <div className={styles.nepaliInfo}>
            <div className="flex flex-row">
              <h2>Token ID:</h2>
              <p>{user.token}</p>
            </div>

            <div className="flex flex-row">
              <h2>नाम:</h2>
              <InputFieldNep type="text" value={NepUserInfo.firstname} onChange={handleInput} name="firstname" />
            </div>

            <div className="flex flex-row">
              <h2>थर:</h2>
              <InputFieldNep type="text" value={NepUserInfo.lastname} onChange={handleInput} name="lastname" />
            </div>

            <div className="flex flex-row">
              <h2>ठेगाना:</h2>
              <InputFieldNep type="text" value={NepUserInfo.address} onChange={handleInput} name="address" />
            </div>

            <div className="flex flex-row">
              <h2>जन्म मिति:</h2>
              <InputFieldNep type="text" value={NepUserInfo.dob} onChange={handleInput} name="dob" />
            </div>

            <div className="flex flex-row">
              <h2>लिङ्ग:</h2>
              <select id="print-select">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="flex flex-row">
              <h2 className={stylesInput.textField}>फोन नम्बर:</h2>
              <InputFieldNep value={NepUserInfo.number} onChange={handleInput} name="number" type="text" />
            </div>
          </div>
        </div>
      );
    })}
  </div>
  <button onClick={handlePrint} style={{margin: "10px"}}  id={styles.printButton} className="w-60 , bg-red-300, printbutton">Print</button>
  </>
  )
}

export default Personalinfo ;
