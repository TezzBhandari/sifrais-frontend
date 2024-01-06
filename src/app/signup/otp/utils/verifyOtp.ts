import { PublicQuery } from "@/lib/utils/query";

export type VerifyOtpSuccessResponse = {
  token_type: string;
  expires_in: string;
  access_token: string;
  refresh_token: string;
  status: number;
  message: string;
};

interface VerifyOtpErrorResponse {
  status: number;
  message: string;
}

export type VerifyOtpBody = {
  uid: string;
  otp: string;
};
const verifyOtp = PublicQuery<
  VerifyOtpSuccessResponse,
  VerifyOtpErrorResponse,
  VerifyOtpBody
>();

export default verifyOtp;
