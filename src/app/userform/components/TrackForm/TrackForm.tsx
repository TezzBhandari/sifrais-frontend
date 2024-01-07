"use client";
import React, { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import styles from "../userForm.module.css";
import { formLists } from './CrumbsData';

interface ITrackForm extends InputHTMLAttributes<HTMLInputElement>{
    selectedID: number;
    setSelectedID: (id: number) => void;
}

const TrackForm: React.FC<ITrackForm> = ( { selectedID, setSelectedID} ) => {

  return (
    <div className='flex flex-row'>
        {
            formLists.map((element)=> {
                return (
                    <div onClick={() => setSelectedID(element.id)} className={styles.titleBox} style={{backgroundColor: `${ selectedID == element.id  ? "#002147" : "#FFFF"}`, color: `${ selectedID == element.id  ? "#FFFF" : "#002147"}`, border: `${ selectedID == element.id  ? "1px solid rgba(123, 97, 255, 0.6)" : "none"}`   }}>
                    <p>{element.name}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TrackForm