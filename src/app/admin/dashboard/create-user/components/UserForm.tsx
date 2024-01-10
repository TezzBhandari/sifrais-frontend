"use client";

import { InputField } from "@/components/InputField";
import { InputLabel } from "@/components/InputLabel";
import React from "react";

const UserForm = () => {
  return (
    <>
      <form>
        {/* PERSONAL INFORMATION FORM SECTION  */}
        <div className="personal-information-section px-7 py-10">
          <div className="form-sub-heading-section">
            <h2 className="text-xl font-bold leading-5 capitalize text-[#1D1C2B]">
              Personal Information
            </h2>
          </div>
          <div className="flex gap-10 mt-7">
            <div className="personal-info-input-left-section flex flex-col gap-3 flex-1">
              {/* fullname in english  */}
              <div>
                <InputLabel htmlFor="" labelName={"Fullname (En)"} />
                <InputField className="h-11" placeholder="fullname" />
              </div>
              {/* email  */}
              <div>
                <InputLabel htmlFor="" labelName={"Email"} />

                <InputField className="h-11" placeholder="Email" />
              </div>
              {/* Group/Caste  */}
              <div>
                <InputLabel htmlFor="" labelName={"Group / Caste"} />

                <InputField className="h-11" placeholder="Email" />
              </div>
            </div>
            <div className="personal-info-input-right-section flex flex-col gap-3 flex-1">
              {/* fullname in nepali  */}
              <div>
                <InputLabel htmlFor="" labelName={"Fullname (En)"} />

                <InputField className="h-11" placeholder="Email" />
              </div>
              {/* mobile number  */}
              <div>
                <InputLabel htmlFor="" labelName={"Fullname (En)"} />

                <InputField className="h-11" placeholder="Email" />
              </div>
              {/* gender */}
              <div>
                <InputLabel htmlFor="" labelName={"Fullname (En)"} />

                <InputField className="h-11" placeholder="Email" />
              </div>
            </div>
          </div>
        </div>
        {/* PERMANENT DETAIL FORM SECTION  */}
        <div className="personal-information-section px-7 py-10">
          <div className="form-sub-heading-section">
            <h2 className="text-xl font-bold leading-5 capitalize text-[#1D1C2B]">
              Permanent Details
            </h2>
          </div>
          <div className="flex gap-10 mt-7">
            <div className="personal-info-input-left-section flex flex-col gap-3 flex-1">
              {/* province  */}
              <div>
                <InputLabel htmlFor="" labelName={"Province"} />
                <InputField className="h-11" />
              </div>
              {/* district   */}
              <div>
                <InputLabel htmlFor="" labelName={"district"} />

                <InputField className="h-11" />
              </div>
              {/* Group/Caste  */}
              <div>
                <InputLabel htmlFor="" labelName={"local level"} />

                <InputField className="h-11" />
              </div>
            </div>
            <div className="personal-info-input-right-section flex flex-col gap-3 flex-1">
              {/* fullname in nepali  */}
              <div>
                <InputLabel htmlFor="" labelName={"Fullname (En)"} />

                <InputField className="h-11" placeholder="Email" />
              </div>
              {/* mobile number  */}
              <div>
                <InputLabel htmlFor="" labelName={"Fullname (En)"} />

                <InputField className="h-11" placeholder="Email" />
              </div>
            </div>
          </div>
        </div>
        {/* OFFICE DETAILS FORM SECTION  */}
        <div className="personal-information-section px-7 py-10">
          <div className="form-sub-heading-section">
            <h2 className="text-xl font-bold leading-5 capitalize text-[#1D1C2B]">
              Personal Information
            </h2>
          </div>
          <div className="flex gap-10 mt-7">
            <div className="personal-info-input-left-section flex flex-col gap-3 flex-1">
              {/* fullname in english  */}
              <div>
                <InputLabel htmlFor="" labelName={"Fullname (En)"} />
                <InputField className="h-11" placeholder="Email" />
              </div>
              {/* email  */}
              <div>
                <InputLabel htmlFor="" labelName={"Fullname (En)"} />

                <InputField className="h-11" placeholder="Email" />
              </div>
            </div>
            <div className="personal-info-input-right-section flex flex-col gap-3 flex-1">
              {/* fullname in nepali  */}
              <div>
                <InputLabel htmlFor="" labelName={"Fullname (En)"} />

                <InputField className="h-11" placeholder="Email" />
              </div>
              {/* mobile number  */}
              <div>
                <InputLabel htmlFor="" labelName={"Fullname (En)"} />

                <InputField className="h-11" placeholder="Email" />
              </div>
            </div>
          </div>
        </div>
        {/* PERSONAL INFORMATION FORM SECTION  */}
        <div className="personal-information-section px-7 py-10">
          <div className="form-sub-heading-section">
            <h2 className="text-xl font-bold leading-5 capitalize text-[#1D1C2B]">
              Personal Information
            </h2>
          </div>
          <div className="flex gap-10 mt-7">
            <div className="personal-info-input-left-section flex flex-col gap-3 flex-1">
              {/* fullname in english  */}
              <div>
                <InputLabel htmlFor="" labelName={"Fullname (En)"} />
                <InputField className="h-11" placeholder="Email" />
              </div>
              {/* email  */}
              <div>
                <InputLabel htmlFor="" labelName={"Fullname (En)"} />

                <InputField className="h-11" placeholder="Email" />
              </div>
            </div>
            <div className="personal-info-input-right-section flex flex-col gap-3 flex-1">
              {/* fullname in nepali  */}
              <div>
                <InputLabel htmlFor="" labelName={"Fullname (En)"} />

                <InputField className="h-11" placeholder="Email" />
              </div>
              {/* mobile number  */}
              <div>
                <InputLabel htmlFor="" labelName={"Fullname (En)"} />

                <InputField className="h-11" placeholder="Email" />
              </div>
            </div>
          </div>
        </div>
        {/* SUBMIT AND CANCEL BUTTON SECTION  */}
        <div className="Form-Button-Section flex items-center space-x-3 mb-6 justify-end">
          <button className="bg-transparent text-[#002147] rounded-md border border-[#002147] hover:border-blue-300 hover:bg-blue-300 px-8 py-3">
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#002147] text-white rounded-md border border-slate-300 hover:border-blue-300 hover:bg-blue-300 px-8 py-3"
            // aria-disabled={isSubmitting ? true : false}
          >
            Save and Next
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
