import authHttpClient from "@/lib/utils/HttpClient/axiosPrivate";
import { useQuery } from "@tanstack/react-query";
import { QueryDesignationsSuccessResponse } from "../../types";

//fetches Designation
const fetchDesignations = async () => {
    const response = await authHttpClient.get<QueryDesignationsSuccessResponse>(
        "/api/designations"
    );
    return response.data.data;
};

const useQueryDesignations = () => {
    return useQuery({
        queryKey: ["fetch", "designations"],
        queryFn: fetchDesignations,
    });
};

export default useQueryDesignations;
