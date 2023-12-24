"use client"
import React, { useEffect, useState } from 'react'
import { userLoginStore } from '../login/components/authFile/loginAuth'

const page = () => {

    const [access_token, setaccess_token] = useState<string| null>(localStorage.getItem("access_token"));
    const remove_token = () => 
    {
      localStorage.removeItem("access_token");
      setaccess_token(null)
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
            <button className='btn' onClick={remove_token}>Logout</button>
            </>
            :
            <h1>User is not authorized.</h1>
        }
    </div>
  )
}

export default page;