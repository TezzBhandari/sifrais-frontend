"use client";

import React from 'react'
import { ToastContainer } from 'react-toastify';

const ToastifyAlert = () => {
  return (
   <>
   <ToastContainer
   position="bottom-right"
   autoClose={5000}
   hideProgressBar={false}
   newestOnTop={false}
   closeOnClick
   rtl={false}
   />
   </>
  )
}

export default ToastifyAlert