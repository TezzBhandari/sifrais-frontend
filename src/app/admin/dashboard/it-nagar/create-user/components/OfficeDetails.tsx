"use client";

import { InputLabel } from "@/components/InputLabel";
import ListBox from "@/components/ListBox";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { type Gender } from "../utils/api/QueryGenders";
import OfficeTypeInput from "./OfficeTypeInput";
import OfficeInput from "./OfficeNameInput";

interface OfficeDetailsProps {
  genders: Array<Gender>;
}

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
            {/* STAFF CATEGORY  */}
            <div>
              <InputLabel htmlFor="" labelName="staff category" />
              <Controller
                control={control}
                render={({ field: { name, onChange, value } }) => (
                  <ListBox<Gender>
                    className="shadow-none h-11"
                    labelExtractor={(item) => item.gender_en}
                    valueExtractor={(item) => item.id.toString()}
                    labelExtractorByValue={(value, options) =>
                      options.find((option) => option.id.toString() === value)
                        ?.gender_en || "select staff category"
                    }
                    options={genders}
                    value={value}
                    onChange={onChange}
                    name={name}
                  />
                )}
                name={"officeDetails.staffCateogry"}
              />
            </div>
            {/* OFFICE TYPE  */}
            <OfficeTypeInput />
          </div>
          <div className="Office-Detail-Right-Section flex flex-col gap-3 flex-1">
            {/* OFFICE NAME */}
            <OfficeInput />
            {/* DESIGNATION */}
            <div>
              <InputLabel htmlFor="" labelName="designation" />
              <Controller
                control={control}
                render={({ field: { name, onChange, value } }) => (
                  <ListBox<(typeof genders)[0]>
                    className="shadow-none h-11"
                    labelExtractor={(item) => item.gender_en}
                    valueExtractor={(item) => item.id.toString()}
                    labelExtractorByValue={(value, options) =>
                      options.find((option) => option.id.toString() === value)
                        ?.gender_en || "select designation"
                    }
                    options={genders}
                    value={value}
                    onChange={onChange}
                    name={name}
                  />
                )}
                name={"officeDetails.designation"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfficeDetails;
