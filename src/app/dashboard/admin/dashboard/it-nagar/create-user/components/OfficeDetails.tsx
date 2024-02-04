"use client";

import { InputLabel } from "@/components/InputLabel";
import ListBox from "@/components/ListBox";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { type Gender } from "../utils/api/QueryGenders";
import OfficeTypeInput from "./OfficeTypeInput";
import OfficeInput from "./OfficeNameInput";
import DesignationInput from "./DesignationInput";
import { InputField } from "@/components/InputField";
import { ActiveStatus } from "../types";

interface OfficeDetailsProps {
  genders: Array<Gender>;
}

const activeSatus: Array<ActiveStatus> = [
  {
    label: "active", value: true
  }
  , {
    label: "inactive", value: false
  }
]

const OfficeDetails: React.FC<OfficeDetailsProps> = ({ genders }) => {
  const { register, control } = useFormContext();
  return (
    <>
      <div className="Office-Detail-Input-Section px-7 py-10">
        <div className="form-sub-heading-section">
          <h2 className="text-xl font-bold leading-5 capitalize text-[#1D1C2B]">
            Office Details
          </h2>
        </div>
        <div className="flex gap-10 mt-7">
          <div className="Office-Detail-Left-Section flex flex-col gap-3 flex-1">
            {/* Active status  */}
            <div>
              <InputLabel htmlFor="" labelName="status" />
              <Controller
                control={control}
                render={({ field: { name, onChange, value } }) => (
                  <ListBox<ActiveStatus, boolean>
                    className="shadow-none h-11"
                    labelExtractor={(item) => item.label}
                    valueExtractor={(item) => item.value}
                    labelExtractorByValue={(value, options) =>
                      options.find((option) => option.value === value)
                        ?.label || "select status"
                    }
                    options={activeSatus}
                    value={value}
                    onChange={onChange}
                    name={name}
                  />
                )}
                name={"officeDetails.active_status"}
              />
            </div>




            {/* OFFICE TYPE  */}
            <OfficeTypeInput />
          </div>
          <div className="Office-Detail-Right-Section flex flex-col gap-3 flex-1">
            {/* OFFICE NAME */}
            <OfficeInput />
            {/* DESIGNATION */}
            <DesignationInput />

          </div>
        </div>
      </div>
    </>
  );
};

export default OfficeDetails;
