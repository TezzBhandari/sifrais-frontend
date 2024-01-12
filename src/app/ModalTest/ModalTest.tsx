import Modal from '@/components/modal/index';
import React, { useState } from 'react'

const ModalTest = () => {
    const [isOpen, setOpen] = useState(false)
    const handleClick = () => {
            setOpen(!isOpen);
    }


  return (
    <div>
        ModalTest
            <button onClick={handleClick}>Open MODEL</button>
            <Modal isOpen={isOpen} closeModal={handleClick} />
    </div>
  )
}

export default ModalTest