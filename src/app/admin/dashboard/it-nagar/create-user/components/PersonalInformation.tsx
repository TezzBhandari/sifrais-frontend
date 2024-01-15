"use client";
import React from "react";
import {
  Control,
  Controller,
  UseFormRegister,
  useFormContext,
} from "react-hook-form";

import { InputField } from "@/components/InputField";
import { InputLabel } from "@/components/InputLabel";
import ListBox from "@/components/ListBox";
import { AdminUserMutationType } from "../types";
import { Gender } from "../utils/api/QueryGenders";

interface PersonalInformationProps {
  gender: Array<Gender>;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({
  gender,
}) => {
  const { register, control } = useFormContext();
  return (
    <>
      <div className="personal-Information-Input-Section px-7 py-10">
        <div className="form-sub-heading-section">
          <h2 className="text-xl font-bold leading-5 capitalize text-[#1D1C2B]">
            Personal Information
          </h2>
        </div>
        <div className="flex gap-10 mt-7">
          <div className="Personal-Info-Left-Section flex flex-col gap-3 flex-1">
            {/* fullname in english  */}
            <div>
              <InputLabel htmlFor="" labelName={"Fullname (En)"} />
              <InputField
                {...register("personalInformation.fullnameEnglish")}
                className="h-11"
              />
            </div>
            {/* EMAIL  */}
            <div>
              <InputLabel htmlFor="" labelName={"Email"} />
              <InputField
                {...register("personalInformation.email")}
                className="h-11"
              />
            </div>
            {/* GROUP/CASTE  */}
            <div>
              <InputLabel htmlFor="" labelName={"Group / Caste"} />
              <InputField
                {...register("personalInformation.casteGroup")}
                className="h-11"
              />
            </div>
          </div>
          <div className="Personal-Info-Right-Section flex flex-col gap-3 flex-1">
            {/* FULLNAME in NEPALI  */}
            <div>
              <InputLabel htmlFor="" labelName={"Fullname (Np)"} />
              <InputField
                {...register("personalInformation.fullnameNepali")}
                className="h-11"
              />
            </div>
            {/* MOBILE NUMBER */}
            <div>
              <InputLabel htmlFor="" labelName={"Moblie Number"} />

              <InputField
                {...register("personalInformation.phoneNumber")}
                className="h-11"
              />
            </div>
            {/* GENDER */}

            <div>
              <InputLabel htmlFor="" labelName={"Gender"} />
              <Controller
                control={control}
                render={({ field: { name, value, onBlur, onChange } }) => {
                  return (
                    <>
                      <ListBox<Gender>
                        options={gender}
                        className="h-11 shadow-none"
                        valueExtractor={(item) => item.id.toString()}
                        labelExtractor={(item) => item.gender_np}
                        value={value}
                        labelExtractorByValue={(value, options) =>
                          options.find(
                            (option) => option.id.toString() === value
                          )?.gender_np || "select a gender"
                        }
                        onChange={onChange}
                      />
                    </>
                  );
                }}
                name={"personalInformation.gender"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
