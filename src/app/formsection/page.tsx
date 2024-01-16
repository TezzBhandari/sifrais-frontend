"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./Formsection.module.css";
import Personalinfo from "./components/UserField/Personalinfo"
import Citizenshipinfo from "./components/UserField/Citizenshipinfo";
import Generalinfo from "./components/UserField/Generalinfo";




const page = () => {


  const handlePrint = () => {
    window.print();
    
  };
  return (
    <>

      <Personalinfo />
      <hr></hr>
      <Citizenshipinfo />
      <hr></hr>
      <Generalinfo />
      <button onClick={handlePrint} style={{margin: "10px"}}  id={styles.printButton} className="w-60 , bg-red-300, printbutton">Print</button>
    </>
  );
};

export default page;
