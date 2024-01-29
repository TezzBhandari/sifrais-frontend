import { PublicQuery } from "@/lib/utils/query";

interface Province {
  id: number;
  province_en: string;
  province_np: string;
}

export type ProvinceSuccessResponse = {
  status: number;
  message: string;
  data: Array<Province>;
};

interface ProvinceErrorResponse {
  status: number;
  message: string;
}

const FetchProvince = PublicQuery<
  ProvinceSuccessResponse,
  ProvinceErrorResponse
>();

export type { Province };

export default FetchProvince;
