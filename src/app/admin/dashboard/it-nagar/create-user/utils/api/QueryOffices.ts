import authHttpClient from "@/lib/utils/HttpClient/axiosPrivate";
import { useQuery } from "@tanstack/react-query";
import { OfficeType } from "./QueryOfficeType";
import { Province } from "./QueryProvinces";

interface Office {
  id: 1;
  office_name: string;
  office_address: string;
  office_phone: string;
  office_email: string;
  latitude: string;
  longitude: string;
  is_active: number;
  office_type: OfficeType;
  province: Province;
  district: {
    id: number;
    did: number;
    district_en: string;
    district_np: string;
  };
  locallevel: {
    id: number;
    lgid: number;
    lgname_en: string;
    lgname_np: string;
  };
}

export type OfficeSuccessResponse = {
  status: number;
  data: Array<Office>;
};

const QueryOffices = () => {
  const fetch = async (): Promise<OfficeSuccessResponse["data"]> => {
    const response = await authHttpClient.get<OfficeSuccessResponse>(
      "/api/offices"
    );
    return response.data.data;
  };

  return useQuery({
    queryKey: ["fetch", "offices"],
    queryFn: fetch,
  });
};

export type { Office };

export default QueryOffices;
