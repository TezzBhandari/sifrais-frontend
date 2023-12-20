"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSignupSchema } from "../types";
import { signUpUser } from "../actions";
import { useRouter } from "next/navigation";

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
    console.log("about to submit user info");
    const data = await signUpUser(formData);
    console.log("client code");
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
    <div className="min-h-screen flex justify-center items-center gap-4">
      <form
        action=""
        onSubmit={formSubmitHandler}
        className="flex flex-col gap-2 max-w-lg"
      >
        {/* full name in english field  */}
        <div className="flex flex-col gap-1">
          <label htmlFor="">Fullname {"(En)"}</label>
          <input
            className="border border-black"
            {...register("full_name")}
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
        <div className="flex flex-col gap-1">
          <label htmlFor="">Fullname {"(Np)"}</label>
          <input
            className="border border-black"
            {...register("full_name_np")}
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
        {/* email field  */}
        <div className="flex flex-col gap-1">
          <label htmlFor="">Email</label>
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
        {/*  password field  */}
        <div className="flex flex-col gap-1">
          <label htmlFor="">Password</label>
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
        {/* phone number field  */}
        <div className="flex flex-col gap-1">
          <label htmlFor="">phone number</label>
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
        <div>
          <button
            type="submit"
            className="border-none px-2 py-3 bg-indigo-400 rounded-xl text-white font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
