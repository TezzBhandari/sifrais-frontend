import authHttpClient from "@/lib/utils/HttpClient/axiosPrivate";
import { useQuery } from "@tanstack/react-query";

interface OfficeType {
  id: number;
  office_type: string;
}

export type OfficeTypeSuccessResponse = {
  status: number;
  data: Array<OfficeType>;
};

const QueryOfficeType = () => {
  const fetch = async (): Promise<OfficeTypeSuccessResponse["data"]> => {
    const response = await authHttpClient.get<OfficeTypeSuccessResponse>(
      "/api/officetypes"
    );
    return response.data.data;
  };

  return useQuery({
    queryKey: ["fetch", "officeType"],
    queryFn: fetch,
  });
};

export type { OfficeType };

export default QueryOfficeType;
