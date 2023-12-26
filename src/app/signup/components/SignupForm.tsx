"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSignupSchema } from "../types";
import { signUpUser } from "../actions";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

// Signup Logo Import
import SignupLogo from "../../../../public/assets/Signup_Logo.svg";
import FlagBanner from "../../../../public/assets/Flag_Banner.svg";
import Link from "next/link";
import InputField from "./InputField";
import ErrorMessage from "./ErrorMessage";

// User Signup Field Type. Infered using zod library
type UserSignupInputType = z.infer<typeof UserSignupSchema>;

/**
 * React Client Component for user Signup Form
 * @returns React.JSX.Element
 */
const SignupForm = () => {
  const router = useRouter();
  // functionality provided by external library react-hook-form
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSignupInputType>({
    resolver: zodResolver(UserSignupSchema),

    defaultValues: {
      full_name_np: "",
      full_name: "",
      email: "",
      password: "",
      mobile: "",
    },
  });

  // form submit handler
  const formSubmitHandler = handleSubmit(async (formData) => {
    console.log("about to submit user info: ", formData);
    console.log("signup action start");
    const data = await signUpUser(formData);
    console.log("rerender");
    if (data.success === true) {
      reset();
      router.push("/signup/otp");
      alert("user created successfully");
    }

    if (data.success === false) {
      alert("failed to create user");
    }
  });

  return (
    <div className="min-h-screen flex items-stretch py-20 min-w-[60%] mx-auto w-full bg-[#003878] ">
      <div className="Signup-Container relative bg-white min-w-full gap-32 px-20 flex">
        {/* FLAG BANNER  */}
        <Image
          className="absolute bottom-[10px] left-0"
          src={FlagBanner}
          priority
          width={620}
          height={80}
          alt={"Flag Banner"}
        />
        {/* Logo Container - Left Section  */}
        <div className="logo-container  flex justify-center pt-12 items-start grow">
          <Image
            src={SignupLogo}
            priority
            width={220}
            height={380}
            className="max-w-full"
            alt="signup logo"
          />
        </div>

        {/* FORM CONTAINER - RIGHT SECTION  */}
        <div className="Form-Container flex flex-col pt-24 grow-[3]">
          {/* FORM HEADING  */}
          <div className="Form-heading-container w-full mb-9 text-center">
            <h2 className="text-[#002147] text-3xl font-semibold ">
              खाता बनाउनुहोस
            </h2>
          </div>

          {/* SIGNUP FORM  */}
          <form
            // action=""
            onSubmit={formSubmitHandler}
            className="flex flex-col w-full gap-2"
          >
            {/* FORM FIELD SECTION  */}
            <div className="Form-Field-Container flex items-center px-2 mb-8 space-x-14 w-full">
              {/* FORM-LEFT-INPUT-SECTION  */}
              <div className="Form-Input-Section-Left-Container flex  flex-col space-y-5 flex-1 ">
                {/* FULLNAME(Np) FIELD  */}
                <div className="flex flex-col">
                  <label className="text-sm text-[#2D3748]" htmlFor="">
                    प्रयोगकर्ताको पुरा नाम
                    <span className="text-red-600">{"*"}</span>
                  </label>
                  <input
                    className="border-[1.5px] text-sm font-normal border-black rounded-sm py-3 px-4 focus:outline-1 focus:outline-[#0062D1]"
                    {...register("full_name_np")}
                    type="text"
                  />
                  {/* CUSTOM ERROR MESSAGE COMPONENT  */}
                  {errors.full_name_np?.message ? (
                    <ErrorMessage message={errors.full_name_np.message} />
                  ) : null}
                </div>

                {/* EMAIL FIELD  */}
                <div className="flex flex-col ">
                  <label className="text-sm text-[#2D3748]" htmlFor="">
                    प्रयोगकर्ताको ईमेल{" "}
                    <span className="text-red-600">{"*"}</span>
                  </label>
                  <input
                    className="border-[1.5px] text-sm font-normal border-black rounded-sm py-3 px-4 focus:outline-1 focus:outline-[#0062D1]"
                    {...register("email")}
                    type="email"
                  />
                  {/* CUSTOM ERROR MESSAGE COMPONENT  */}
                  {errors.email?.message ? (
                    <ErrorMessage message={errors.email.message} />
                  ) : null}
                </div>

                {/* PASSWORD FIELD  */}
                <div className="flex flex-col ">
                  <label className="text-sm text-[#2D3748]" htmlFor="">
                    पासवर्ड <span className="text-red-600">{"*"}</span>
                  </label>
                  <input
                    className="border-[1.5px] text-sm font-normal border-black rounded-sm py-3 px-4 focus:outline-1 focus:outline-[#0062D1]"
                    {...register("password")}
                    type="password"
                  />
                  {/* CUSTOM ERROR MESSAGE COMPONENT  */}
                  {errors.password?.message ? (
                    <ErrorMessage message={errors.password.message} />
                  ) : null}
                </div>
              </div>

              {/* FORM-RIGHT-INPUT-SECTION  */}
              <div className="Form-Right-Input-Container flex flex-col space-y-5 flex-1">
                {/* FULLNAME(en) FIELD  */}
                <div className="flex flex-col ">
                  <label className="text-sm text-[#2D3748]" htmlFor="">
                    प्रयोगकर्ताको पुरा नाम <span>{"(English)"}</span>
                    <span className="text-red-600">{"*"}</span>
                  </label>
                  <input
                    className="border-[1.5px] text-sm font-normal border-black rounded-sm py-3 px-4 focus:outline-1 focus:outline-[#0062D1]"
                    {...register("full_name")}
                    type="text"
                  />

                  {/* CUSTOM ERROR MESSAGE COMPONENT  */}
                  {errors.full_name?.message ? (
                    <ErrorMessage message={errors.full_name.message} />
                  ) : null}
                </div>

                {/* MOBILE FIELD  */}
                <div className="flex flex-col ">
                  <label className="text-sm text-[#2D3748]" htmlFor="">
                    प्रयोगकर्ताको मोबाइल नम्बर{" "}
                    <span className="text-red-600">{"*"}</span>
                  </label>
                  <input
                    className="border-[1.5px] text-sm font-normal border-black rounded-sm py-3 px-4 focus:outline-1 focus:outline-[#0062D1]"
                    {...register("mobile")}
                    type="text"
                  />
                  {/* CUSTOM ERROR MESSAGE COMPONENT  */}
                  {errors.mobile?.message ? (
                    <ErrorMessage message={errors.mobile.message} />
                  ) : null}
                </div>

                {/* CONFIRM PASSWORD FIELD  */}
                <div className="flex flex-col ">
                  <label className="text-sm text-[#2D3748]" htmlFor="">
                    पासवर्ड अनुरुप गर्नुहोस
                    <span className="text-red-600">{"*"}</span>
                  </label>
                  <input
                    className="border-[1.5px] text-sm font-normal bg-transparent border-black rounded-sm py-3 px-4 focus:outline-1 focus:outline-[#0062D1]"
                    // {...register("password")}
                    type="password"
                  />
                  {/* CUSTOM ERROR MESSAGE COMPONENT  */}
                  {errors.password?.message ? (
                    <ErrorMessage message={errors.password.message} />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="Form-Button-Section flex items-center space-x-3 mb-6 justify-end">
              <Link
                className="bg-[#003878] text-white rounded-md border border-slate-300 hover:border-blue-300 hover:bg-blue-300 px-8 py-3"
                href={"/"}
              >
                होम पेज
              </Link>
              <Button
                type="submit"
                className="bg-[#003878] text-white rounded-md"
              >
                <span>साइन अप गर्नुहोस्</span>
              </Button>
            </div>
            <div className="SignIn-Link-Section flex items-center justify-end text-sm  text-[#002147]">
              <p className="text-sm">
                पहिले नै खाता छ ?{" "}
                <Link href={"/signin"}>
                  <span className="text-[#002147] font-semibold">साइन इन</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
