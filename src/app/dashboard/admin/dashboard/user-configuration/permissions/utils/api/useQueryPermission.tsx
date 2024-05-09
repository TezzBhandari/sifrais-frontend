import authHttpClient from "@/lib/utils/HttpClient/axiosPrivate";
import { useQuery } from "@tanstack/react-query";
import type { QueryPermissionSuccessResponse } from "../../types";

//fetches permissions
const fetchPermissions = async () => {


    const response = await authHttpClient.get<QueryPermissionSuccessResponse>(
        "/api/permissions"
    );
    return response.data.data;
};

const useQueryPermission = () => {
    return useQuery({
        queryKey: ["fetch", "permissions"],
        queryFn: fetchPermissions,
    });
};

export default useQueryPermission;
