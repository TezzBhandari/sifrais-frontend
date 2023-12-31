import { z } from "zod";
import validator from "validator";

export const UserSignupSchema = z.object({
  name: z.string().min(1, { message: "english username is required" }),
  // full_name_np: z.string().min(1, { message: "nepali username is required" }),
  email: z
    .string({ required_error: "invalid email address" })
    .min(1, { message: "email is required" })
    .email("Enter a valid email"),
  password: z
    .string()
    .min(8, { message: "password should at least be 8 characters" }),
  phone_number: z
    .string()
    .refine(validator.isMobilePhone, { message: "invalid phone number" }),
  // password: z
  //   .string()
  //   .min(8, { message: "password must contain at least 8 characters" }),
  // matchPassword: z.string(),
});
