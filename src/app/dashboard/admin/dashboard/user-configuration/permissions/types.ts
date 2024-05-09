import { z } from "zod";
// import { Province } from "../../it-nagar/create-user/utils/api/QueryProvinces";
// import { OfficeType } from "../office-type/types";
import validator from "validator";

interface Permission {
  id: number;
  parent_id: number;
  permission_name: string;
  guard_name: string;
}

// fetch office response type
interface QueryPermissionSuccessResponse {
  status: number;
  data: Array<Permission>;
  message: string;
}

interface QueryPermissionErrorResponse {
  status: number;
  message: string;
}

interface PostPermissionSuccessResponse {
  status: number;
  message: string;
}

interface PostPermissionErrorResponse {
  status: number;
  message: string;
}

// delete office response type
interface DeletePermissionSuccessResponse {
  status: number;
  message: string;
}

// interface DeleteOfficeErrorResponse {
//   status: number;
//   message: string;
// }

// components props
interface PermissionTableRowActionsProps {
  permission: Permission;
}

interface PermissionDeleteModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  permission: Permission;
}

// office form schema
const PermissionFormSchema = z.object({
  parent_id: z.number(),
  permission_name: z
    .string()
    .min(1, { message: "permission name is required" }),
  guard_name: z.string().min(1, { message: "guard name is required" }),
});

type PermissionFormType = z.infer<typeof PermissionFormSchema>;

export type {
  Permission,
  PermissionDeleteModalProps,
  PermissionFormType,
  //   DeleteOfficeErrorResponse,
  DeletePermissionSuccessResponse,
  PermissionTableRowActionsProps,
  QueryPermissionSuccessResponse,
  PostPermissionErrorResponse,
  PostPermissionSuccessResponse,
  QueryPermissionErrorResponse,
};

// schemas
export { PermissionFormSchema };
