import { PrivateQuery } from "@/lib/utils/query";
import { User } from "../../../types";

export type UserSuccessResponse = {
  status: number;
  data: User[];
};

interface UserErrorResponse {
  status: number;
  message: string;
}

const GetUser = PrivateQuery<UserSuccessResponse, UserErrorResponse>();

export default GetUser;
