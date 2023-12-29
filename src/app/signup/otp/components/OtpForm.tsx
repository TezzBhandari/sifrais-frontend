"use client";
import React from "react";
import OtpInput from "react-otp-input";
import { VerifyOtp } from "../../actions";
import { useRouter } from "next/navigation";
import { useSignUpUserIdStore } from "@/store/signUpUserIdStore";
import { useAccessTokenStore } from "@/store/accessTokenStore";

import Image from "next/image";

import GovLogo from "../../../../../public/assets/Gov_Logo.svg";
import { toast } from "react-toastify";
import { totalmem } from "os";

const OtpForm = () => {
  const [
    {
      otp,
      numInputs,
      skipDefaultStyles,
      minLength,
      maxLength,
      placeholder,
      inputType,
    },
    setConfig,
  ] = React.useState({
    otp: "",
    numInputs: 6,
    minLength: 0,
    maxLength: 40,
    placeholder: "",
    inputType: "text" as const,
    skipDefaultStyles: true,
  });

  const handleOTPChange = (otp: string) => {
    setConfig((prevConfig) => ({ ...prevConfig, otp }));
  };

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setConfig((prevConfig) => ({ ...prevConfig, [name]: value }));
  };

  const handleNumInputsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let numInputs = event.target.valueAsNumber;

    if (numInputs < minLength || numInputs > maxLength) {
      numInputs = 6;

      console.error(
        `Please enter a value between ${minLength} and ${maxLength}`
      );
    }

    setConfig((prevConfig) => ({ ...prevConfig, numInputs }));
  };

  const router = useRouter();

  const { uid } = useSignUpUserIdStore();
  const { setAccessToken } = useAccessTokenStore();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (uid === "") {
      toast.error("User Id Doesn't exists. Signup User", {
        position: toast.POSITION.TOP_CENTER,
      });

      router.push("/signup");
      return;
    }

    const response = await VerifyOtp({ otp: otp, uid: uid });
    alert(JSON.stringify(response));

    if (response.code === "success" && response.statusCode === 200) {
      setAccessToken(response.data.access_token);
      const jsonData = JSON.stringify(response.data.refresh_token);
      localStorage.setItem("refresh_token", jsonData);
      toast.success("successfull verified. redirecting to dashboard", {
        position: toast.POSITION.TOP_CENTER,
      });
      router.push("/admin/dashboard");

      // alert("otp verified redirecting to dashboard page");
    } else {
      if (response.code === "erorr") {
        toast.error(response.error.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };

  return (
    <div className="h-screen w-full pt-9 bg-[#003878] overflow-hidden">
      <div className="h-full flex items-center justify-center bg-[#FAFAFA]">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col drop-shadow shadow-gray-200 min-w-[406px] min-h-[454px] bg-white border border-white rounded-xl "
        >
          <div className="min-w-[295px] min-h-[378.8px]">
            <div className="flex items-center justify-center mt-8 mb-3">
              <div className="flex w-[97.95px] h-[82px]">
                <Image src={GovLogo} alt={"Goverment Logo"} />
              </div>
            </div>
            <div className="flex flex-col items-center ">
              <h1 className="text-[#E20917] text-[16px] font-semibold">
                ई सिफारिस प्राणाली
              </h1>
              <p className="text-[#002147] text-[14px]">
                बेनी नगरपालिका, नगर कार्यपालिकाको कार्यालय <br />
                <span className="flex justify-center"> बेनी बजार, म्यागदी</span>
              </p>
              <p className="text-[#002147] font-bold text-[30px] mt-3">
                साइन इन
              </p>
              <p className="text-[#003878] text-[14px]">
                हामिले तपाईको फोन नम्बरमा ६ अङ्कको OTP कोड पठाएका छौ
              </p>
              <p className="text-[#003878] font-medium   text-[16px]  mt-2 ml-4">
                OTP कोड
              </p>

              <OtpInput
                skipDefaultStyles={skipDefaultStyles}
                value={otp}
                onChange={handleOTPChange}
                placeholder={placeholder}
                inputType={inputType}
                shouldAutoFocus
                numInputs={6}
                containerStyle="flex gap-2 mt-1"
                inputStyle="w-9 h-9 text-[#003878] font-normal text-center border border-gray-700 rounded-sm border-[#969696] placeholder:border-[#969696] focus:outline focus:border-none focus:outline-[#0062D1]"
                // renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} placeholder="_" />}
              />

              <p className="flex items-center text-[#003878] font-regular text-[14px] mt-2 ">
                सत्र समाप्त भयो? पुन: उत्पन्न
              </p>
              <button className="bg-[#00448C] text-white text-[16px] font-semibold w-[295px] h-[34px] drop-shadow rounded-sm mt-5">
                साइन इन
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpForm;
