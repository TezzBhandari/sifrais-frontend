import { FC, ReactNode, useState } from 'react';
import "./style.css";

interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, closeModal, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="flex justify-between mb-5">
                    <h1 className='font-semibold text-3xl'>Header</h1>
                    <div>
                        <button onClick={closeModal} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'>X
                        </button>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
