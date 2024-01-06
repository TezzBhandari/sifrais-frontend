"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSignupSchema } from "../types";
import { signUpUser } from "../actions";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

import Link from "next/link";
import ErrorMessage from "./ErrorMessage";
import { useSignUpUserIdStore } from "@/store/signUpUserIdStore";
import { toast } from "react-toastify";
import { SignUpInput } from "./SignUpInput";

// User Signup Field Type. Infered using zod library
type UserSignupInputType = z.infer<typeof UserSignupSchema>;

/**
 * React Client Component for user Signup Form
 * @returns React.JSX.Element
 */
const SignupForm = () => {
  const { uid, setUserId } = useSignUpUserIdStore();

  const [isSubmitting, setSubmitting] = useState(false);

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
      // full_name_np: "",
      name: "",
      email: "",
      password: "",
      phone_number: "",
    },
  });

  // FORM SUBMIT  HANDLER
  const formSubmitHandler = handleSubmit(async (formData) => {
    const response = await signUpUser(formData);
    if (response.code === "success" && response.statusCode === 201) {
      // reset();

      alert(JSON.stringify(response.data.uid));

      // save user id in memory
      // so that you can use it while verifying otp
      setUserId(response.data.uid);
      toast.success("User Account Created. Redirecting To OTP Verification", {
        position: toast.POSITION.TOP_CENTER,
      });

      router.push("/signup/otp");
    } else {
      if (response.code === "erorr") {
        if (response.statusCode === 422) {
          toast.error(response.error.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.error(response.error.message);
        }
      }
    }
  });

  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col w-full gap-2">
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
            <SignUpInput
              className=" border-[1.5px] text-sm font-normal border-black rounded-sm py-3 px-4 focus:outline-1 bg-transparent focus:outline-[#0062D1]"
              // {...register("full_name_np")}
              type="text"
            />
            {/* CUSTOM ERROR MESSAGE COMPONENT  */}
            {errors.name?.message ? (
              <ErrorMessage message={errors.name.message} />
            ) : (
              <ErrorMessage message="" />
            )}
          </div>

          {/* EMAIL FIELD  */}
          <div className="flex flex-col ">
            <label className="text-sm text-[#2D3748]" htmlFor="">
              प्रयोगकर्ताको ईमेल <span className="text-red-600">{"*"}</span>
            </label>
            <SignUpInput
              className=" bg-transparent border-[1.5px] text-sm font-normal border-black rounded-sm py-3 px-4 focus:outline-1 focus:outline-[#0062D1]"
              {...register("email")}
              type="email"
            />
            {/* CUSTOM ERROR MESSAGE COMPONENT  */}
            {errors.email?.message ? (
              <ErrorMessage message={errors.email.message} />
            ) : (
              <ErrorMessage message="" />
            )}
          </div>

          {/* PASSWORD FIELD  */}
          <div className="flex flex-col ">
            <label className="text-sm text-[#2D3748]" htmlFor="">
              पासवर्ड <span className="text-red-600">{"*"}</span>
            </label>
            <SignUpInput
              className=" bg-transparent border-[1.5px] text-sm font-normal border-black rounded-sm py-3 px-4 focus:outline-1 focus:outline-[#0062D1]"
              {...register("password")}
              type="password"
            />
            {/* CUSTOM ERROR MESSAGE COMPONENT  */}
            {errors.password?.message ? (
              <ErrorMessage message={errors.password.message} />
            ) : (
              <ErrorMessage message="" />
            )}
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
            <SignUpInput
              className=" bg-transparent border-[1.5px] text-sm font-normal border-black rounded-sm py-3 px-4 focus:outline-1 focus:outline-[#0062D1]"
              {...register("name")}
              type="text"
            />

            {/* CUSTOM ERROR MESSAGE COMPONENT  */}
            {errors.name?.message ? (
              <ErrorMessage message={errors.name.message} />
            ) : (
              <ErrorMessage message="" />
            )}
          </div>

          {/* MOBILE FIELD  */}
          <div className="flex flex-col ">
            <label className="text-sm text-[#2D3748]" htmlFor="">
              प्रयोगकर्ताको मोबाइल नम्बर{" "}
              <span className="text-red-600">{"*"}</span>
            </label>
            <SignUpInput
              className=" bg-transparent border-[1.5px] text-sm font-normal border-black rounded-sm py-3 px-4 focus:outline-1 focus:outline-[#0062D1]"
              {...register("phone_number")}
              type="text"
            />
            {/* CUSTOM ERROR MESSAGE COMPONENT  */}
            {errors.phone_number?.message ? (
              <ErrorMessage message={errors.phone_number.message} />
            ) : (
              <ErrorMessage message="" />
            )}
          </div>

          {/* CONFIRM PASSWORD FIELD  */}
          <div className="flex flex-col ">
            <label className="text-sm text-[#2D3748]" htmlFor="">
              पासवर्ड अनुरुप गर्नुहोस
              <span className="text-red-600">{"*"}</span>
            </label>
            {/*<SignUpInput
                      className=" bg-transparent border-[1.5px] text-sm font-normal bg-transparent border-black rounded-sm py-3 px-4 focus:outline-1 focus:outline-[#0062D1]"
                      // {...register("password")}
                      type="password"
                    /> */}
            <SignUpInput className="border-[1.5px] text-sm  font-normal border-black rounded-sm py-3 px-4 focus:outline-1 bg-transparent focus:outline-[#0062D1]" />
            {/* CUSTOM ERROR MESSAGE COMPONENT  */}
            {errors.password?.message ? (
              <ErrorMessage message={errors.password.message} />
            ) : (
              <ErrorMessage message="" />
            )}
          </div>
        </div>
      </div>

      {/* FORM BUTTON SECION  */}
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
          aria-disabled={isSubmitting ? true : false}
        >
          {isSubmitting ? (
            <span>submitting...</span>
          ) : (
            <span>साइन अप गर्नुहोस्</span>
          )}
        </Button>
      </div>
      <div className="SignIn-Link-Section flex items-center justify-end text-sm  text-[#002147] mb-4">
        <p className="text-sm">
          पहिले नै खाता छ ?{" "}
          <Link href={"/signin"}>
            <span className="text-[#002147] font-semibold">साइन इन</span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
