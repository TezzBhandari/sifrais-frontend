import { PublicQuery } from "@/lib/utils/query";
import { Province } from "./QueryProvinces";

interface District {
  id: number;
  did: number;
  district_en: string;
  district_np: string;
  province: Province;
}

export type DistrictSuccessResponse = {
  status: number;
  message: string;
  data: Array<District>;
};

interface DistrictErrorResponse {
  status: number;
  message: string;
}

const FetchDistrict = PublicQuery<
  DistrictSuccessResponse,
  DistrictErrorResponse
>();

export type { District };

export default FetchDistrict;
