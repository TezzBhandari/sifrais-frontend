
//This componenet implements the Image Logo and title in the Login box.

import React, {useEffect, useState} from 'react'
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './FormBanner.module.css';
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { userLoginStore, userEmailCheck } from '../authFile/loginAuth';


const FormBanner: React.FC = () => {

  //Hook to check whether email has been received or not from the page.tsx.
  const [emailReceived, setEmailReceived] = useState<boolean>(false)
  const router = useRouter();
  const { email, emailCheck } = userEmailCheck();
  
  useEffect(()=>{
    if(email){
      setEmailReceived(true)
    }
  },[email])

  const returnToLogin = () => {
    setEmailReceived(false)
    emailCheck({"email" : ""})
  
  }

  return (
    <div className={`flex flex-col items-center ${styles.formBanner}`}>
            <Image src="/assets/logo/mainlogo.svg" alt="mainLogo" height={115} width={190} />
            <h2 style={{fontSize: "22px", marginTop: "10px"}} className='red-title font-semibold'>ई - सिफरिस प्रणाली</h2>
            <p className='blue-title' style={{fontSize: "14px"}}>बेनी नगरपालिक, नगर कार्यपालिकको कार्यालय</p>
            <p className="sublocation-text" style={{fontSize: "14px"}}>बेनी बजार, म्यग्दी </p>

            {
              ! emailReceived ?
              <>
              <p className='font-semibold font-sign' style={{fontSize: "18px" , marginTop: "10px"}}>सदस्य साइन इन</p>
              </>
              :
              <>
              <p className='font-semibold font-sign' style={{fontSize: "18px", marginTop: "10px"}}>स्वागत छ</p>
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