"use client";
import React from "react";
import {
  useFormContext,
} from "react-hook-form";

import { InputField } from "@/components/InputField";
import { InputLabel } from "@/components/InputLabel";
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
              <InputLabel htmlFor="" fieldRequired={true} labelName={"Fullname (En)"} />
              <div>
                <InputField
                  {...register("name")}
                  className="h-11"
                />
                <span className="text-red-500 text-xs tracking-wide">
                  {errors.name !== undefined
                    ? errors.name.message
                    : null}
                </span>
              </div>
            </div>
            {/* EMAIL  */}
            <div>
              <InputLabel htmlFor="" fieldRequired={true} labelName={"Email"} />
              <div>
                <InputField
                  {...register("email")}
                  className="h-11"
                />
                <span className="text-red-500 text-xs tracking-wide">
                  {errors.email !== undefined
                    ? errors.email.message
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
                  {...register("password")}
                  className="h-11"
                />
                <span className="text-red-500 text-xs tracking-wide">
                  {errors.password !== undefined
                    ? errors.password.message
                    : null}
                </span>
              </div>
            </div>
            {/* RIGHT SECTION  */}
          </div>
          <div className="Personal-Info-Right-Section flex flex-col gap-3 flex-1">
            {/* FULLNAME in NEPALI  */}
            <div>
              <InputLabel htmlFor="" fieldRequired={true} labelName={"Fullname (Np)"} />
              <div>
                <InputField
                  // {...register("personalInformation.fullnameNepali")}
                  className="h-11"
                />
                {/* <span className="text-red-500 text-xs tracking-wide">
                  {errors.personalInformation?.fullnameNepali !== undefined
                    ? errors.personalInformation.fullnameNepali.message
                    : null}
                </span> */}
              </div>
            </div>
            {/* MOBILE NUMBER */}
            <div>
              <InputLabel htmlFor="" fieldRequired={true} labelName={"MobiLe Number"} />
              <div>
                <InputField
                  {...register("phoneNumber")}
                  className="h-11"
                /><span className="text-red-500 text-xs tracking-wide">
                  {errors.phoneNumber !== undefined
                    ? errors.phoneNumber.message
                    : null}
                </span>
              </div>
            </div>

            {/* ADDRESS FIELD  */}
            <div>
              <InputLabel htmlFor="" fieldRequired={true} labelName={"Address"} />
              <div>
                <InputField
                  {...register("address")}
                  className="h-11"
                /><span className="text-red-500 text-xs tracking-wide">
                  {errors.address !== undefined
                    ? errors.address.message
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
