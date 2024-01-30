import authHttpClient from "@/lib/utils/HttpClient/axiosPrivate";
import { useQuery } from "@tanstack/react-query";
import { QueryRolesSuccessResponse } from "../../types";

//fetches permissions
const fetchRoles = async () => {


    const response = await authHttpClient.get<QueryRolesSuccessResponse>(
        "/api/roles"
    );
    return response.data.data;
};

const useQueryRoles = () => {
    return useQuery({
        queryKey: ["fetch", "roles"],
        queryFn: fetchRoles,
    });
};

export default useQueryRoles;
