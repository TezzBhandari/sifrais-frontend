import { PublicQuery } from "@/lib/utils/query";
import { Province } from "./QueryProvinces";

interface LocalLevel {
  id: number;
  lgid: number;
  lgname_en: string;
  lgname_np: string;
  province: Province;
  district: {
    id: number;
    did: number;
    district_en: string;
    district_np: string;
  };
}

export type LocalLevelSuccessResponse = {
  status: number;
  message: string;
  data: Array<LocalLevel>;
};

interface LocalLevelErrorResponse {
  status: number;
  message: string;
}

const FetchLocalLevel = PublicQuery<
  LocalLevelSuccessResponse,
  LocalLevelErrorResponse
>();

export type { LocalLevel };

export default FetchLocalLevel;
