import axios from "axios";
import { User } from "../../../types";
import authHttpClient from "@/lib/utils/HttpClient/axiosPrivate";
import { useQuery } from "@tanstack/react-query";

export type UserSuccessResponse = {
  status: number;
  data: Array<User>;
};
const fetchUser = async (): Promise<UserSuccessResponse["data"]> => {
  console.log("face");
  const response = await authHttpClient.get<UserSuccessResponse>("/api/users");
  console.log(response);
  return response.data.data;
};
const useUsersQuery = () => {
  console.log("user");
  return useQuery({
    queryKey: ["fetch", "users"],
    queryFn: fetchUser,
  });
};

export { useUsersQuery };
