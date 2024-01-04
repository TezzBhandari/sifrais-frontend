import React from 'react'
import nepalify from "nepalify;"
import Citizenshipinfo from './components/UserField/Citizenshipinfo'
import Personalinfo from './components/UserField/Personalinfo'

const page = () => {


  return (
    <>
    <Personalinfo />
    <Citizenshipinfo />
    </>
  )
}

export default page