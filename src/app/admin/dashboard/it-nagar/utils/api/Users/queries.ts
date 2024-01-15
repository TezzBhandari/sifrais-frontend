import { User } from "../../../types";
import authHttpClient from "@/lib/utils/HttpClient/axiosPrivate";
import { useQuery } from "@tanstack/react-query";

export type UserSuccessResponse = {
  status: number;
  data: Array<User>;
};
const fetchUser = async (): Promise<UserSuccessResponse["data"]> => {
  const response = await authHttpClient.get<UserSuccessResponse>("/api/users");
  return response.data.data;
};
const useUsersQuery = () => {
  return useQuery({
    queryKey: ["fetch", "users"],
    queryFn: fetchUser,
  });
};

export { useUsersQuery };
