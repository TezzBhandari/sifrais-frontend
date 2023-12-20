"use server";

import { z } from "zod";
import { UserSignupSchema } from "./types";
import { axiosInstance } from "../lib/axios/axiosApi";
import { isAxiosError } from "axios";

// Infering type from zod schema for user register fields;
type UserSignupType = z.infer<typeof UserSignupSchema>;

// URL path of user registration
const registerUrl = "/api/otp/register";

/**
 * 
 * @param UserSignupType {
    full_name: string;
    full_name_np: string;
    email: string;
    password: string;
    mobile: string;
 
 * @returns  {success: boolean; error?: any; data?: any;}
 */
export const signUpUser = async (data: UserSignupType) => {
  try {
    const response = await axiosInstance.post(registerUrl, data, {});
    console.log("server response for user signup endpoint: ", response);
    console.log(
      "server response data for user signup endpoint: ",
      response.data
    );
    return { success: true, data: response.data };
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("server axios error: ", error);
    } else {
      console.log("other error: ", error);
    }
    return { success: false, error: error };
  }
};
