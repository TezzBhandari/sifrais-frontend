import useAuthFetch from "@/hooks/useAuthFetch";
import { User } from "../../../types";
import { useQuery } from "@tanstack/react-query";

export type UserSuccessResponse = {
  status: number;
  data: Array<User>;
};

const useUsersQuery = () => {
  const authHttpClient = useAuthFetch();
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
