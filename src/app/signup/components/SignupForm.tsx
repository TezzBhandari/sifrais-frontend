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
      router.push("/");
      alert("user created successfully");
    }

    if (data.success === false) {
      alert("failed to create user");
    }
  });

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#003878] ">
      <div className="Signup-Container border-[3px] border-red-400 bg-white min-w-full px-20 flex items-center">
        {/* Logo Container - Left Section  */}
        <div className="logo-container flex justify-center items-center border border-red-400 grow">
          <Image src={SignupLogo} alt="signup logo" />
        </div>

        {/* FORM CONTAINER - RIGHT SECTION  */}
        <div className="Form-Container flex flex-col border-[3px] border-emerald-400 grow-[3]">
          {/* FORM HEADING  */}
          <div className="Form-heading-container w-full border border-red-400 text-center">
            <h2 className="text-[#002147] text-lg font-semibold ">
              खाता बनाउनुहोस
            </h2>
          </div>

          {/* SIGNUP FORM  */}
          <form
            // action=""
            onSubmit={formSubmitHandler}
            className="flex flex-col w-full gap-2 border border-pink-500"
          >
            {/* FORM FIELD SECTION  */}
            <div className="Form-Field-Container flex gap-8 w-full">
              {/* FORM-LEFT-INPUT-SECTION  */}
              <div className="Form-Input-Section-Left-Container">
                {/* FULLNAME(EN) FIELD  */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="">
                    प्रयोगकर्ताको पुरा नाम
                    <span className="text-red-600">{"*"}</span>
                  </label>
                  <input
                    className="border border-black"
                    {...register("full_name_np")}
                    type="text"
                  />
                  {/* input: make it a separate custom component */}
                  {/* make a separate error component */}
                  {errors.full_name?.message ? (
                    <p className="bg-red-200 text-red-400 p-1 rounded-lg">
                      {errors.full_name.message}
                    </p>
                  ) : null}
                </div>

                {/* EMAIL FIELD  */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="">
                    प्रयोगकर्ताको ईमेल{" "}
                    <span className="text-red-600">{"*"}</span>
                  </label>
                  <input
                    className="border border-black"
                    {...register("email")}
                    type="text"
                  />
                  {errors.email?.message ? (
                    <p className="bg-red-200 text-red-400 p-1 rounded-lg">
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>

                {/* PASSWORD FIELD  */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="">
                    पासवर्ड <span>{"*"}</span>
                  </label>
                  <input
                    className="border border-black"
                    {...register("password")}
                    type="text"
                  />
                  {errors.password?.message ? (
                    <p className="bg-red-200 text-red-400 p-1 rounded-lg">
                      {errors.password.message}
                    </p>
                  ) : null}
                </div>
              </div>

              {/* FORM-LEFT-INPUT-SECTION  */}
              <div className="Form-Right-Input-Container flex flex-col">
                {/* FULLNAME(en) FIELD  */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="">
                    प्रयोगकर्ताको पुरा नाम <span>{"(English)"}</span>
                    <span className="text-red-600">{"*"}</span>
                  </label>
                  <input
                    className="border border-black"
                    {...register("full_name")}
                    type="text"
                  />
                  {/* input: make it a separate custom component */}
                  {/* make a separate error component */}
                  {errors.full_name_np?.message ? (
                    <p className="bg-red-200 text-red-400 p-1 rounded-lg">
                      {errors.full_name_np.message}
                    </p>
                  ) : null}
                </div>

                {/* MOBILE FIELD  */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="">
                    प्रयोगकर्ताको मोबाइल नम्बर{" "}
                    <span className="text-red-600">{"*"}</span>
                  </label>
                  <input
                    className="border border-black"
                    {...register("mobile")}
                    type="text"
                  />
                  {errors.mobile?.message ? (
                    <p className="bg-red-200 text-red-400 p-1 rounded-lg">
                      {errors.mobile.message}
                    </p>
                  ) : null}
                </div>

                {/* CONFIRM PASSWORD FIELD  */}
                {/* <div className="flex flex-col gap-1">
                  <label htmlFor="">
                    पासवर्ड अनुरुप गर्नुहोस
                    <span className="text-red-600">{"*"}</span>
                  </label>
                  <input
                    className="border border-black"
                    {...register("password")}
                    type="text"
                  />
                  {errors.password?.message ? (
                    <p className="bg-red-200 text-red-400 p-1 rounded-lg">
                      {errors.password.message}
                    </p>
                  ) : null}
                </div> */}
              </div>
            </div>
            <div className="Form-Button-Section flex items-center space-x-2 border border-red-400 justify-end">
              <Button className="bg-[#003878] text-white rounded-md">
                होम पेज
              </Button>
              <Button
                type="submit"
                className="bg-[#003878] text-white rounded-md"
              >
                <span>साइन अप गर्नुहोस्</span>
              </Button>
            </div>
            <div className="SignIn-Link-Section flex items-center justify-end text-sm border border-red-500 text-[#002147]">
              <p>पहिले नै खाता छ ? साइन इन</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
