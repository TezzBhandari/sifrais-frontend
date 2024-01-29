import validator from "validator";
import { z } from "zod";

const AdminUserMutationSchema = z.object({
  personalInformation: z.object({
    fullnameEnglish: z
      .string()
      .min(1, { message: "name in english is required" }),
    fullnameNepali: z
      .string()
      .min(1, { message: "nepali in nepali is required" }),
    email: z
      .string()
      .min(1, { message: "email is required" })
      .email("Enter a valid email"),
    phoneNumber: z
      .string()
      .refine(validator.isMobilePhone, { message: "invalid phone number" }),
    casteGroup: z.string().min(1, { message: "caste/group is required" }),
    gender: z
      .string()
      .min(1, { message: "gender field is requred. select a gender" }),
  }),
  permanentDetails: z.object({
    province: z.string().min(1, { message: "province field is required" }),
    district: z.string().min(1, { message: "district field is required" }),
    localLevel: z.string().min(1, { message: "local level field is required" }),
    wardNumber: z.string().min(1, { message: "ward field is required" }),
    tole: z.string().min(1, { message: "tole field is required" }),
  }),
  officeDetails: z.object({
    officeName: z.string().min(1, { message: "office name is required" }),
    officeType: z.string().min(1, { message: "office type is required" }),
    designation: z.string().min(1, { message: "designation is required" }),
    staffCateogry: z.string().min(1, { message: "staff category is required" }),
  }),
});

export { AdminUserMutationSchema };
export type AdminUserMutationType = z.infer<typeof AdminUserMutationSchema>;
