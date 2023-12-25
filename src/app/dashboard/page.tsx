"use client"
import React, { useEffect, useState } from 'react'
import { userLoginStore, userEmailCheck } from '../login/components/authFile/loginAuth'
import { useRouter } from "next/navigation"; 

const page = () => {

    const [access_token, setaccess_token] = useState<string| null>(localStorage.getItem("access_token"));
    const {expires_in} = userLoginStore();
    const { emailCheck } = userEmailCheck();

    const router = useRouter();

    const remove_token = () => 
    {
      localStorage.removeItem("access_token");
      setaccess_token(null)
      emailCheck({"email": ""})
      router.push("/login")

    }
    useEffect(()=>{
      console.log("Printingfromthis")
    },[access_token])

  return (
    <div>
        { 
            access_token ? 
            <>
            <h1>Welcome Dashboard</h1>
            <p>Your access_token is {access_token}</p>
            <p>Your expired Token time is : {expires_in}</p>
            <button className='btn' onClick={remove_token}>Logout</button>
            </>
            :
            <h1>User is not authorized.</h1>
        }
    </div>
  )
}

export default page;