"use server";

import { ostring, z } from "zod";
import { UserSignupSchema } from "./types";
import { axiosInstance } from "../lib/axios/axiosApi";
import axios, { isAxiosError } from "axios";
import postOtp, { PostOtpResponse } from "./otp/utils/postOtp";

// Infering type from zod schema for user register fields;
type UserSignupType = z.infer<typeof UserSignupSchema>;

export type SignupResponseType = {
  status: number;
  uid?: string;
  errors?: any;
  message: string;
};

// URL path of user registration
const registerUrl = "/api/signup/initial";

/**
 * 
 * @param UserSignupType {
    name: string;
    email: string;
    password: string;
    phone_number: string;
 
 * @returns  {success: boolean; error?: any; data?: any;}
 */
export const signUpUser = async (data: UserSignupType) => {
  try {
    const response = await axiosInstance.post<SignupResponseType>(
      registerUrl,
      data,
      {}
    );

    console.log(response.data);

    return { success: true, data: response.data };
  } catch (error) {
    console.log(error);
    if (isAxiosError(error)) {
      console.log("server axios error: ", error);
    } else {
      console.log("other error: ", error);
    }
    return { success: false, error: error };
  }
};

export type VerifyOtpResponse = {
  code: "success" | "error";
  data?: PostOtpResponse;
  error: any;
};

export const VerifyOtp = async (data: {
  otp: string;
  uid: string;
}): Promise<VerifyOtpResponse> => {
  try {
    // const response = await postOtp({
    //   url: "/api/signup/complete",
    //   httpMethod: "post",
    //   body: data,
    // });

    const response = await axios.post<PostOtpResponse>(
      "https://sifaris.ktmserver.com/backend/api/signup/complete",
      data,
      {}
    );

    return { code: "success", data: response.data, error: null };
  } catch (error) {
    console.log(error);
    if (isAxiosError(error)) {
      console.log("server axios error: ", error);
    } else {
      console.log("other error: ", error);
    }
    return {
      code: "error",

      error: error,
    };
  }
};
