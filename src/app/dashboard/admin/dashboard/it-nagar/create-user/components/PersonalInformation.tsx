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
  const { register, control, formState: { errors } } = useFormContext<AdminUserMutationType>();
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
              <div>
                <InputField
                  {...register("personalInformation.fullnameEnglish")}
                  className="h-11"
                />
                <span className="text-red-500 text-xs tracking-wide">
                  {errors.personalInformation?.fullnameEnglish !== undefined
                    ? errors.personalInformation.fullnameEnglish.message
                    : null}
                </span>
              </div>
            </div>
            {/* EMAIL  */}
            <div>
              <InputLabel htmlFor="" labelName={"Email"} />
              <div>
                <InputField
                  {...register("personalInformation.email")}
                  className="h-11"
                />
                <span className="text-red-500 text-xs tracking-wide">
                  {errors.personalInformation?.email !== undefined
                    ? errors.personalInformation.email.message
                    : null}
                </span>
              </div>
            </div>
            {/* PASSWORD  */}
            <div>
              <InputLabel fieldRequired={true} htmlFor="" labelName={"password"} />
              <div>
                <InputField
                  type="password"
                  {...register("personalInformation.password")}
                  className="h-11"
                />
                <span className="text-red-500 text-xs tracking-wide">
                  {errors.personalInformation?.password !== undefined
                    ? errors.personalInformation.password.message
                    : null}
                </span>
              </div>
            </div>
            {/* RIGHT SECTION  */}
          </div>
          <div className="Personal-Info-Right-Section flex flex-col gap-3 flex-1">
            {/* FULLNAME in NEPALI  */}
            <div>
              <InputLabel htmlFor="" labelName={"Fullname (Np)"} />
              <div>
                <InputField
                  {...register("personalInformation.fullnameNepali")}
                  className="h-11"
                />
                <span className="text-red-500 text-xs tracking-wide">
                  {errors.personalInformation?.fullnameNepali !== undefined
                    ? errors.personalInformation.fullnameNepali.message
                    : null}
                </span>
              </div>
            </div>
            {/* MOBILE NUMBER */}
            <div>
              <InputLabel htmlFor="" labelName={"Moblie Number"} />
              <div>
                <InputField
                  {...register("personalInformation.phoneNumber")}
                  className="h-11"
                /><span className="text-red-500 text-xs tracking-wide">
                  {errors.personalInformation?.phoneNumber !== undefined
                    ? errors.personalInformation.phoneNumber.message
                    : null}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
