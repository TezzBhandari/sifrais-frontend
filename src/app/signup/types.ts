import { z } from "zod";

export const UserSignup = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
  matchPassword: z.string(),
});
