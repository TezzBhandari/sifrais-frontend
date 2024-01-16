import { z } from "zod";

const UserColumnSchema = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  phone_number: z.string(),
  status: z.string(),
});

interface UserRoles {
  id: number;
  role: string;
  pivot: {
    user_id: number;
    role_id: number;
  };
}

interface Office {
  id: number;
  office_name: string;
  office_address: string;
  office_phone: string;
  office_email: string;
  latitude: number;
  longitude: number;
  is_active: 0 | 1;
}

interface Designation {
  id: number;
  designation: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: null | string;
  address: string;
  phone_number: string;
  active_status: 0 | 1;
  updated_by: number;
  otp_status: 0 | 1;
  roles: UserRoles[];
  office: Office;
  designation: Designation;
}

export { UserColumnSchema };

export type { User, Designation, Office, UserRoles };

export type UserColumn = z.infer<typeof UserColumnSchema>;
