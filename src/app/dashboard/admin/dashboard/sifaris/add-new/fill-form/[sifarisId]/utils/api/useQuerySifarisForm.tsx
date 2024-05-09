import authHttpClient from "@/lib/utils/HttpClient/axiosPrivate";
import { useQuery } from "@tanstack/react-query";
import { QuerySifarisFormSuccessResponse } from "../../types";

//fetches documents
const fetchSifarisTypeWithForm = async ({ sifarisId }: { sifarisId: string }) => {
    const response = await authHttpClient.get<QuerySifarisFormSuccessResponse>(
        `/api/sifaristypes/${sifarisId}`
    );
    return response.data.data;
};

const useQuerySifarisForm = ({ sifarisId }: { sifarisId: string }) => {
    return useQuery({
        queryKey: ["fetch", "sifarisForm"],
        queryFn: () => fetchSifarisTypeWithForm({ sifarisId }),
    });
};

export default useQuerySifarisForm;
