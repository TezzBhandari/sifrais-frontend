"use server";

import { z } from "zod";
import { UserSignupSchema } from "./types";
import { axiosInstance } from "../lib/axios/axiosApi";
import axios, { isAxiosError } from "axios";
import verifyOtp, { VerifyOtpErrorResponse } from "./otp/utils/verifyOtp";
import { HttpMethod } from "@/lib/utils/requestHandler";
import { cookies } from "next/headers";

import jwt from "jsonwebtoken";

// Infering type from zod schema for user register fields;
type UserSignupType = z.infer<typeof UserSignupSchema>;

// SINGUP RESPONSE ERROR

interface UserSignupErrorType {
  email?: Array<string>;
  password?: Array<string>;
  phone_number?: Array<string>;
  name?: Array<string>;
}

interface UserSignUpError {
  message: string;
  errors: UserSignupErrorType;
}

interface SignUpUserSuccessResponse {
  code: "success";
  statusCode: number;
  data: {
    status: number;
    uid: string;
    message: string;
  };
}

interface SignUpUserErrorResponse {
  code: "erorr";
  statusCode: number;
  errorType: string;
  error: UserSignUpError;
}

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
export const signUpUser = async (
  data: UserSignupType
): Promise<SignUpUserSuccessResponse | SignUpUserErrorResponse> => {
  try {
    const response = await axiosInstance.post<{
      status: number;
      uid: string;
      message: string;
    }>(registerUrl, data, {});

    return {
      code: "success",
      data: response.data,
      statusCode: response.status,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("\n\n error", error);
      if (error.response) {
        return {
          code: "erorr",
          errorType: error.name,
          statusCode: error.response.status,
          error: error.response.data,
        };
      }
      if (error.request) {
        return {
          code: "erorr",
          statusCode: 0,
          errorType: error.name,
          error: {
            message: error.message,
            errors: {},
          },
        };
      }
      return {
        code: "erorr",
        statusCode: 0,
        errorType: "Request Configuration Error",
        error: {
          message: "something went wrong. Try again!",
          errors: {},
        },
      };
    } else {
      console.log("other error: ", error);
      return {
        code: "erorr",
        statusCode: 0,
        errorType: "Unknown Error",
        error: {
          message: "something went wrong. Try again!",
          errors: {},
        },
      };
    }
  }
};

/// OTP VERIFICATION

// interface OtpVerificationSuccessResponse {
//   code: "success";
//   statusCode: number;
//   data: {
//     token_type: string;
//     expires_in: string;
//     access_token: string;
//     refresh_token: string;
//     status: number;
//     message: string;
//   };
// }

// interface OtpVerificationErrorResponse {
//   code: "erorr";
//   statusCode: number;
//   errorType: string;
//   error: {
//     status: number;
//     message: string;
//   };
// }

// export const VerifyOtp = async (data: {
//   otp: string;
//   uid: string;
// }): Promise<OtpVerificationSuccessResponse | OtpVerificationErrorResponse> => {
//   try {
//     const response = await axios.post<{
//       token_type: string;
//       expires_in: string;
//       access_token: string;
//       refresh_token: string;
//       status: number;
//       message: string;
//     }>("https://sifaris.ktmserver.com/backend/api/signup/complete", data, {});

//     return {
//       code: "success",
//       data: response.data,
//       statusCode: response.status,
//     };
//   } catch (error) {
//     console.log(error);
//     if (isAxiosError(error)) {
//       if (error.response) {
//         return {
//           code: "erorr",
//           errorType: error.name,
//           statusCode: error.response.status,
//           error: error.response.data,
//         };
//       }

//       if (error.request) {
//         return {
//           code: "erorr",
//           statusCode: 401,
//           errorType: error.name,
//           error: {
//             message: error.message,
//             status: 401,
//           },
//         };
//       }
//       return {
//         code: "erorr",
//         statusCode: 0,
//         errorType: "Request Configuration Error",
//         error: {
//           message: "something went wrong. Try again!",
//           status: 401,
//         },
//       };
//     } else {
//       console.log("other error: ", error);
//       return {
//         code: "erorr",
//         statusCode: 0,
//         errorType: "Unknown Error",
//         error: {
//           message: "something went wrong. Try again!",
//           status: 401,
//         },
//       };
//     }
//   }
// };

export const OtpVerification = async (data: { otp: string; uid: string }) => {
  try {
    const response = await verifyOtp({
      url: "/api/signup/complete",
      httpMethod: HttpMethod.POST,
      body: data,
    });

    if (response.code === "success" && response.statusCode === 200) {
      console.log(jwt.decode(response.data.access_token, { complete: true }));
      console.log("jwt token");
      cookies().set("name", response.data.access_token, {
        httpOnly: true,
        maxAge: 86400,
        sameSite: "strict",
      });
    }
    return response;
  } catch (error) {
    return error as VerifyOtpErrorResponse;
  }
  return await verifyOtp({
    url: "/api/signup/complete",
    httpMethod: HttpMethod.POST,
    body: data,
  });
};
