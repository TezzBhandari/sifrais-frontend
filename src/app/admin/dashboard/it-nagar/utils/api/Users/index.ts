import { User } from "../../../types";

export type UserSuccessResponse = {
  status: number;
  data: User[];
};

interface UserErrorResponse {
  status: number;
  message: string;
}
