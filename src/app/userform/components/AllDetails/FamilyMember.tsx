import React, { HtmlHTMLAttributes, useState } from "react";
import styles from "../userForm.module.css";
import InputFieldNep from "../InputField/InputFieldNep";
import InputField from "../InputField/InputField";
import InputImage from "../InputField/InputImage";
import FileInput from "../InputField/FileInput";

const FamilyMember = () => {
  const [nepFullName, setNepFullName] = useState("");

  const handleChange = (e: any) => {
    console.log(e.target.value);
    setNepFullName(e.target.value);
  };

  const handleFileUpload = (file: File) => {
    // Implement your logic for file upload
    console.log("File uploaded:", file);
  };

  return (
    <div>
      {/* Basic Information */}
      <div>
        <h2 id={styles.ititle}>Basic Information</h2>
      </div>
      <div className="flex flex-row flex-wrap justify-between">
        <div>
          <InputFieldNep
            label="Full Name(NP)"
            placeholder="पुरा नाम"
            type="text"
            name="nepalifullname"
            value={nepFullName}
            onChange={handleChange}
          />
          <InputField
            label="Full Name(EN)"
            type="text"
            name="nepalifullname"
            placeholder="Full Name"
          />
          <InputField
            label="Date Of Birth"
            type="date"
            name="dob"
            placeholder="YYYY-MM-DD"
            pattern="\d{4}-\d{2}-\d{2}"
          />
          <InputField
            label="Email"
            type="text"
            name="Email"
            placeholder="Email"
          />
        </div>
        <div>
          <InputImage />
          <InputField
            label="Mobile Number"
            type="text"
            name="mobilenumber"
            placeholder="Phone Number"
          />
        </div>
      </div>
      {/* Identifications */}
      <div>
        <div>
          <h2 id={styles.ititle}>Identifications</h2>
          <div className="flex flex-row flex-wrap justify-between">
            <div>
              <InputField
                label="Citizenship Number"
                type="text"
                placeholder="citizenshipnumber"
                name="citizenshipnumber"
              />
              <InputField
                label="Citizenship Issue District"
                type="text"
                placeholder="Citizenship Issued District"
                name="Citizenship Issued District"
              />
            </div>
            <div>
              <InputField
                label="Citizenship Issued Date"
                type="date"
                placeholder="citizenshipissueddistrict"
                name="citizenshipissueddistrict"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between gap-10 flex-wrap">
            <div>
              <FileInput
                title="Drop Font-Side Citizenship"
                onFileUpload={handleFileUpload}
              />
            </div>
            <div>
              <FileInput
                title="Drop Back-Side Citizenship"
                onFileUpload={handleFileUpload}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyMember;
