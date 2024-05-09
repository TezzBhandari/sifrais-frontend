"use server";
import {
  ErrorResponse,
  HttpMethod,
  SuccessResponse,
} from "@/lib/utils/requestHandler";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import LoginUser, {
  LoginUserErrorResponse,
  LoginUserSuccessResponse,
} from "./LoginUser";

export const Login = async (data: { username: string; password: string }) => {
  try {
    const response = await LoginUser({
      url: "/api/login",
      httpMethod: HttpMethod.POST,
      body: data,
    });

    if (response.code === "success" && response.statusCode === 200) {
      console.log(jwt.decode(response.data.access_token, { complete: true }));
      console.log("jwt token");
      cookies().set("token", response.data.access_token, {
        httpOnly: true,
        maxAge: 86400,
        sameSite: "strict",
      });
      cookies().set("isAuthenticated", "true", {
        httpOnly: true,
        maxAge: 86400,
        expires: 86400,
        sameSite: "strict",
      });
    }
    return response as SuccessResponse<LoginUserSuccessResponse>;
  } catch (error) {
    return error as ErrorResponse<LoginUserErrorResponse>;
  }
};
