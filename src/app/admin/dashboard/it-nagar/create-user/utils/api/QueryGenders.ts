import { PublicQuery } from "@/lib/utils/query";

interface Gender {
  id: number;
  gender_en: string;
  gender_np: string;
}

export type GenderSuccessResponse = {
  status: number;
  message: string;
  data: Array<Gender>;
};

interface GenderErrorResponse {
  status: number;
  message: string;
}

const FetchGender = PublicQuery<GenderSuccessResponse, GenderErrorResponse>();

export type { Gender };

export default FetchGender;
