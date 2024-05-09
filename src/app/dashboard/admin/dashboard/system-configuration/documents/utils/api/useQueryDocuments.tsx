import authHttpClient from "@/lib/utils/HttpClient/axiosPrivate";
import { useQuery } from "@tanstack/react-query";
import { QueryDocumentsSuccessResponse } from "../../types";

//fetches documents
const fetchDocuments = async () => {
    const response = await authHttpClient.get<QueryDocumentsSuccessResponse>(
        "/api/documents"
    );
    return response.data.data;
};

const useQueryDocuments = () => {
    return useQuery({
        queryKey: ["fetch", "documents"],
        queryFn: fetchDocuments,
    });
};

export default useQueryDocuments;
