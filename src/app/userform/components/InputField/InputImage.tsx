"use client";
import React, { useState } from "react";
import styles from "../userForm.module.css";

const InputImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event: any) => {
    // Do something with the selected file, e.g., store it in state
    console.log(event.target.value);
  };

  return (
    <div
      className={`styles.userformImage w-[274px] h-[220px] ml-20 ${styles.userformImage}`}
    >
      <label htmlFor="fileInput" className="cursor-pointer">
        <div className="flex justify-center items-center">
          <div className="flex justify-center flex-col items-center text-black text-xl font-bold font-['DM Sans'] h-[220px] w-[274px] leading-tight overflow-hidden">
            Upload Profile Photo
            <div className="w-[186px] text-center text-gray-400 text-sm font-normal font-['DM Sans'] leading-[14px]">
              Only JPG or PDF types are acceptable.
            </div>
            <input
              type="file"
              id="fileInput"
              name="fileInput"
              accept=".jpg, .jpeg, .pdf"
              onClick={handleFileChange}
              className="hidden"
            />
          </div>
        </div>
      </label>
    </div>
  );
};

export default InputImage;
