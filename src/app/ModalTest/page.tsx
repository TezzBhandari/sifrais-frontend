"use client";
import React, {useState} from 'react'
import Modal from '@/components/modal/index'
import ModalFamilyMember from '../userform/components/AllDetails/ModalFamilyMember';

const page = () => {
    const [isOpen, setOpen] = useState(false)
    const handleClick = () => {
            setOpen(!isOpen);
    }


  return (
    <div>
        ModalTest
            <button onClick={handleClick}>Open MODEL</button>
            <Modal isOpen={isOpen} closeModal={handleClick}>
            <ModalFamilyMember />
            </Modal>
    </div>
  )
}

export default page