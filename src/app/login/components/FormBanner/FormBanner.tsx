
//This componenet implements the Image Logo and title in the Login box.

import React, {useEffect, useState} from 'react'
import Link from "next/link";
import Image from 'next/image';
import styles from './FormBanner.module.css';
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { userLoginStore } from '../authFile/loginAuth';


//Defining the type of Email, Receiving from Page.tsx 
type TData  = {
  email? : string;
}

const FormBanner: React.FC<TData> = ({email}) => {

  //Hook to check whether email has been received or not from the page.tsx.
  const [emailReceived, setEmailReceived] = useState<boolean>(false)
  
  useEffect(() => {
    //If Email is received from the page.tsx, we have to show password options instead of Email.
    //So, setting it to true to show password options in the email field.
    
    if (email !== undefined && email) {
      setEmailReceived(true);
    }
  }, [email]);

  const returnToLogin = () => {
    setEmailReceived(false)
  }

  return (
    <div className={`flex flex-col items-center ${styles.formBanner}`}>
            <Image src="/assets/logo/mainlogo.svg" alt="mainLogo" height={211} width={178} />
            <h2 style={{fontSize: "22px"}} className='red-title font-semibold'>ई - सिफरिस प्रणाली</h2>
            <p className='blue-title' style={{fontSize: "14px"}}>बेनी नगरपालिक, नगर कार्यपालिकको कार्यालय</p>
            <p className="sublocation-text" style={{fontSize: "14px"}}>बेनी बजार, म्यग्दी </p>

            {
              !emailReceived?
              <>
              <p className='font-semibold' style={{fontSize: "18px"}}>सदस्य साइन इन</p>
              </>
              :
              <>
              <p className='font-semibold' style={{fontSize: "18px"}}>स्वागत छ</p>
              <div className='flex flex-row items-center' style={{borderBottom: "1px solid rgba(128, 128, 128, 0.2)", borderTop: "none", borderRadius: "10px" , padding: "2px 8px"}}>
              <h2 style={{fontSize: "12px"}} className='label-text'>{email}</h2>
              <p onClick={returnToLogin} className="link-grey"><IoChevronBackCircleOutline style={{margin: "0px 5px"}} size="14px"/></p>
              </div>
              </>
            }
            
    </div>
  )
}

export default FormBanner