"use client";
import React, {useState} from 'react'
import FamilyProfile from './components/AllDetails/FamilyProfile'
import FamilyMemberDocument from './components/AllDetails/FamilyMemberDocument'
import TrackForm from './components/TrackForm/TrackForm';
import FamilyDocument from './components/AllDetails/FamilyDocument';
import FamilyMember from './components/AllDetails/FamilyMember';
import FamilyRelationship from './components/AllDetails/FamilyRelationship';
import styles from "./components/userForm.module.css";

const page = () => {

  const [selectedID, setSelectedID] = useState<number>(1);


  const handlePreviousClick = () => {
    setSelectedID((prev) => (prev > 1 ? prev - 1 : prev));
  };
  
  const handleNextClick = () => {
    setSelectedID((prev) => (prev < 5 ? prev + 1 : prev));
  };


  
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
        <div className='flex justify-end mt-10'>
        <button onClick={handlePreviousClick} style={{display: `${selectedID == 1 ? "none" : ""}`}} className={styles.userformButton}>Previous</button>
        <button onClick={handleNextClick} style={{display: `${selectedID == 5 ? "none" : ""}`}} className={styles.userformButton}>Next</button>
        </div>
        </>
  )
}

export default page