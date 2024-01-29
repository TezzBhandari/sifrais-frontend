"use client";
import { Modal } from "@/components/Modal";
import React, { useState } from "react";

const UserDeleteConfirmationModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Modal isOpen onClose={() => setIsOpen(false)}>
      <h1>hello modal</h1>
    </Modal>
  );
};

export default UserDeleteConfirmationModal;
