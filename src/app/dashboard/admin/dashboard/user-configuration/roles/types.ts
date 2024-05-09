import { z } from "zod";

interface Permission {
  id: number;
  parent_id: number;
  permission_name: string;
  guard_name: string;
  pivot: {
    role_id: number;
    permission_id: number;
  };
}

interface Roles {
  id: number;
  role: string;
  permissions: Array<Permission>;
}

// fetch office response type
interface QueryRolesSuccessResponse {
  status: number;
  data: Array<Roles>;
  message: string;
}

interface QueryRolesErrorResponse {
  status: number;
  message: string;
}

// delete office response type
interface DeleteRolesSuccessResponse {
  status: number;
  message: string;
}

// post role response type
interface PostRoleSuccessResponse {
  status: number;
  message: string;
}

interface PostRoleErrorResponse {}

// interface DeleteOfficeErrorResponse {
//   status: number;
//   message: string;
// }

// components props
interface RolesTableRowActionsProps {
  role: Roles;
}

interface RolesDeleteModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  role: Roles;
}

// office form schema
const RolesFormSchema = z.object({
  role: z.string().min(1, { message: "role name is required" }),
  permissions: z.object({ id: z.number() }).array(),
});

type RoleFormType = z.infer<typeof RolesFormSchema>;

export type {
  Roles,
  RolesDeleteModalProps,
  RoleFormType,
  //   DeleteOfficeErrorResponse,
  DeleteRolesSuccessResponse,
  RolesTableRowActionsProps,
  QueryRolesSuccessResponse,
  QueryRolesErrorResponse,
  PostRoleSuccessResponse,
  PostRoleErrorResponse,
};

// schemas
export { RolesFormSchema };
