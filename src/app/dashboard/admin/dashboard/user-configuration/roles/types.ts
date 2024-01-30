import { z } from "zod";
// import { Province } from "../../it-nagar/create-user/utils/api/QueryProvinces";
// import { OfficeType } from "../office-type/types";
// import validator from "validator";

interface Permission {
  id: number,
  parent_id: number,
  permission_name: string,
  guard_name: string,
  pivot: {
    role_id: number,
    permission_id: number
  }
}

interface Roles {
  id: number;
  role: string;
  permissions: Array<Permission>
  
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
};

// schemas
export { RolesFormSchema };
