import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  phone_number: z.string(),
  status: z.string(),
});

export type User = z.infer<typeof UserSchema>;
