import React, { useState } from 'react';
import styles from "../userForm.module.css";

interface FileInputProps {
  onFileUpload: (file: File) => void;
  title: string
}

const FileInput: React.FC<FileInputProps> = ({ onFileUpload, title }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);

    const files = event.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    console.log(`File name: ${file.name}, Type: ${file.type}, Size: ${file.size} bytes`);
    // Perform any additional processing or upload logic here
    onFileUpload(file);
  };

  return (
    <div
      className={styles.fileInput}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        border: `2px dashed ${isDragOver ? '#007BFF' : '#ccc'}`,
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        width: "468px",
        backgroundColor: "#ACB1C6"
      }}
    >
      <h1>{title}</h1>
      <label htmlFor="file-input" style={{ display: 'block', cursor: 'pointer' }}>
        <input
          type="file"
          id="file-input"
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept="image/*"
        />
        Click here to select a file
      </label>
    </div>
  );
};

export default FileInput;
