import { User } from "../../../types";
import { useQuery } from "@tanstack/react-query";
import authHttpClient from "@/lib/utils/HttpClient/axiosPrivate";

export type UserSuccessResponse = {
  status: number;
  data: Array<User>;
};

const useUsersQuery = () => {
  const fetchUser = async (): Promise<UserSuccessResponse["data"]> => {
    const response = await authHttpClient.get<UserSuccessResponse>(
      "/api/users"
    );
    return response.data.data;
  };

  return useQuery({
    queryKey: ["fetch", "users"],
    queryFn: fetchUser,
  });
};

export { useUsersQuery };
