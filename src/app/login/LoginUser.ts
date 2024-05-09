import { PublicQuery } from "@/lib/utils/query";

export type LoginUserSuccessResponse = {
  token_type: string;
  expires_in: string;
  access_token: string;
  refresh_token: string;
  status: number;
  message: string;
};

export interface LoginUserErrorResponse {
  status: number;
  message: string;
}

export type LoginUserBody = {
  username: string;
  password: string;
};
const verifyOtp = PublicQuery<
  LoginUserSuccessResponse,
  LoginUserErrorResponse,
  LoginUserBody
>();

export default verifyOtp;
