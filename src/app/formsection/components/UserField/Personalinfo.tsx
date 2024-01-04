import React from 'react'
import styles from "../FormComponent.module.css"

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

  return (
    <>
    <div className="flex justify-between mt-10 mx-5">
    <div className={styles.textField}>
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
              <h2 className={styles.textField}>Number:</h2>
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
              <p>भेन्चर</p>
            </div>

            <div className="flex flex-row">
              <h2>थर:</h2>
              <p>टेक्नोलजी</p>
            </div>

            <div className="flex flex-row">
              <h2>ठेगाना:</h2>
              <p>ललितपुर</p>
            </div>

            <div className="flex flex-row">
              <h2>जन्म मिति:</h2>
              <p>२०७०-०९-२८</p>
            </div>

            <div className="flex flex-row">
              <h2>लिङ्ग:</h2>
              <p>रोबट</p>
            </div>

            <div className="flex flex-row">
              <h2 className={styles.textField}>फोन नम्बर:</h2>
              <p>९८००००००००</p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
  </>
  )
}

export default Personalinfo ;
