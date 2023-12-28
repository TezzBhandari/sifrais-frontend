import query from "@/utils/fetch";
import { AxiosError } from "axios";

export type PostOtpResponse = {
  token_type: string;
  expires_in: string;
  access_token: string;
  refresh_token: string;
  status: number;
  message: string;
};

export type PostOtpBody = {
  uid: string;
  otp: string;
};
const postOtp = query<PostOtpResponse, AxiosError, PostOtpBody>();

export default postOtp;
