"use client";
import { Modal } from "@/components/Modal";
import React, { useState } from "react";

const ModalTest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={(e) => onOpen()}>Open MODEL</button>
      <Modal isOpen={isOpen} className="max-w-md" onClose={() => onClose()}>
        <div>hello world</div>
        <button
          onClick={() => {
            console.log("button clicked");
            onClose();
          }}
          className="px-2 py-2 bg-red-400 rounded-md shadow-xl cursor-pointer"
        >
          X
        </button>
      </Modal>
    </div>
  );
};

export default ModalTest;
