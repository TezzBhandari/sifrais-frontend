"use server";

import { z } from "zod";
import { UserSignupSchema } from "./types";
import { axiosInstance } from "../lib/axios/axiosApi";
import { isAxiosError } from "axios";

type UserSignupType = z.infer<typeof UserSignupSchema>;

const registerUrl = "/api/otp/register";

export const SignUpUser = async (data: UserSignupType) => {
  try {
    const response = await axiosInstance.post(registerUrl, data, {});
    console.log("server response for user signup endpoint: ", response);
    console.log(
      "server response data for user signup endpoint: ",
      response.data
    );
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("server axios error: ", error);
    } else {
      console.log("other error: ", error);
    }
  }
};
