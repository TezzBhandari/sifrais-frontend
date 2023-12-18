"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { UserSignup } from "../types";
import { z } from "zod";

type UserSignupType = z.infer<typeof UserSignup>;

const SignupForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm<UserSignupType>();
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form action="" className="flex flex-col gap-2 max-w-lg">
        <div className="flex flex-col gap-1">
          <label htmlFor="">Username</label>
          <input
            className="border border-red-400"
            {...register("username")}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Email</label>
          <input
            className="border border-red-400"
            {...register("email")}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Password</label>
          <input
            className="border border-red-400"
            {...register("password")}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">matchPassword</label>
          <input
            className="border border-red-400"
            {...register("matchPassword")}
            type="text"
          />
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
