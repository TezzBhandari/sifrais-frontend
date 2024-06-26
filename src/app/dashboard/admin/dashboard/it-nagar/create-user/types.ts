import validator from "validator";
import { z } from "zod";

interface ActiveStatus {
  label: string;
  value: boolean;
}

// const AdminUserMutationSchema = z.object({
//   personalInformation: z.object({
//     fullnameEnglish: z
//       .string()
//       .min(1, { message: "name in english is required" }),
//     fullnameNepali: z
//       .string()
//       .min(1, { message: "nepali in nepali is required" }),
//     email: z
//       .string()
//       .min(1, { message: "email is required" })
//       .email("Enter a valid email"),
//     phoneNumber: z
//       .string()
//       .refine(validator.isMobilePhone, { message: "invalid phone number" }),
//     // casteGroup: z.string().min(1, { message: "caste/group is required" }),
//     password: z.string().min(8, { message: "password is required" }),
//     // gender: z
//     //   .string()
//     //   .min(1, { message: "gender field is requred. select a gender" }),
//   }),
//   permanentDetails: z.object({
//     province: z.string().min(1, { message: "province field is required" }),
//     district: z.string().min(1, { message: "district field is required" }),
//     localLevel: z.string().min(1, { message: "local level field is required" }),
//     // wardNumber: z.string().min(1, { message: "ward field is required" }),
//     tole: z.string().min(1, { message: "tole field is required" }),
//   }),
//   officeDetails: z.object({
//     officeName: z.string().min(1, { message: "office name is required" }),
//     officeType: z.number().min(1, { message: "office type is required" }),
//     designation: z.number().min(1, { message: "designation is required" }),
//     active_status: z.boolean().default(false),
//   }),
// });

const AdminUserMutationSchema = z.object({
  name: z.string().min(1, { message: "name field is required" }),
  email: z.string().email({ message: "invalid email" }),
  password: z
    .string()
    .min(8, { message: "passoword should contain at least 8 character" }),
  office_id: z.number(),
  designation_id: z.number(),
  address: z.string().min(1, { message: "address field is required" }),
  active_status: z.boolean(),
  // opt_status: z.boolean(),
  roles: z
    .object({
      id: z.number(),
    })
    .array(),
  // province: z.string().min(1, { message: "province field is required" }),
  // district: z.string().min(1, { message: "district field is required" }),
  // localLevel: z.string().min(1, { message: "local level field is required" }),
  phoneNumber: z
    .string()
    .refine(validator.isMobilePhone, { message: "invalid phone number" }),
});

//
interface CreateUserSuccessResponse {
  status: number;
  message: string;
}

export { AdminUserMutationSchema };
export type AdminUserMutationType = z.infer<typeof AdminUserMutationSchema>;
export type { ActiveStatus, CreateUserSuccessResponse };
