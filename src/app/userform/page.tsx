"use client";
import React, {useState} from 'react'
import FamilyProfile from './components/AllDetails/FamilyProfile'
import FamilyMemberDocument from './components/AllDetails/FamilyMemberDocument'
import { formLists } from './components/TrackForm/CrumbsData';
import TrackForm from './components/TrackForm/TrackForm';
import FamilyDocument from './components/AllDetails/FamilyDocument';
import FamilyMember from './components/AllDetails/FamilyMember';
import FamilyRelationship from './components/AllDetails/FamilyRelationship';
import styles from "./components/userForm.module.css";

const page = () => {

  const [selectedID, setSelectedID] = useState<number>(1);
  
  let trackComponent;
  switch(selectedID){
    case 1: 
      trackComponent = <FamilyProfile />
      break;
    case 2: 
      trackComponent = <FamilyDocument />
      break;
    case 3:
      trackComponent = <FamilyMember />
      break;
    case 4: 
      trackComponent = <FamilyMemberDocument />
      break;
    case 5: 
      trackComponent = <FamilyRelationship />
      break;
    default:
      trackComponent = <FamilyProfile />
      break;
  }

  return (
        <>
        <TrackForm selectedID={selectedID} setSelectedID={setSelectedID}/>
        {/* <FamilyProfile />
        <FamilyMemberDocument /> */
        }

        { trackComponent }
        <div className='flex justify-end'>
        <button onClick={()=>setSelectedID((prev) => prev + 1 )} className={styles.userformButton}>Next</button>
        </div>
        </>
  )
}

export default page