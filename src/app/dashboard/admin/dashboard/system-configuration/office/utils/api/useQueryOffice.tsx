import authHttpClient from "@/lib/utils/HttpClient/axiosPrivate";
import { useQuery } from "@tanstack/react-query";
import type { QueryOfficeSuccessResponse, QueryOfficeErrorResponse } from "../../types";

//fetches offices
const fetchOffices = async () => {


    const response = await authHttpClient.get<QueryOfficeSuccessResponse>(
        "/api/offices"
    );
    return response.data.data;
};

const useQueryOffice = () => {
    return useQuery({
        queryKey: ["fetch", "offices"],
        queryFn: fetchOffices,
    });
};

export default useQueryOffice;
