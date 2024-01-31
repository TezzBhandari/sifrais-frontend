import { z } from "zod";

interface Designation {
  id: number;
  designation: string;
}

// fetch Designations response type
interface QueryDesignationsSuccessResponse {
  status: number;
  data: Array<Designation>;
  message: string;
}

interface QueryDesignationsErrorResponse {
  status: number;
  message: string;
}

// delete Designations response type
interface DeleteDesignationSuccessResponse {
  status: number;
  message: string;
}

// interface DeleteDesignationsErrorResponse {
//   status: number;
//   message: string;
// }

// components props
interface DesignationTableRowActionsProps {
  designation: Designation;
}

interface DesignationDeleteModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  designation: Designation;
}

// Designations form schema
const DesignationFormSchema = z.object({
  designation: z.string().min(1, { message: "designation is required" }),
});

type DesignationFormType = z.infer<typeof DesignationFormSchema>;

export type {
  Designation,
  DesignationDeleteModalProps,
  DesignationFormType,
  //   DeleteDesignationsErrorResponse,
  DeleteDesignationSuccessResponse,
  DesignationTableRowActionsProps,
  QueryDesignationsSuccessResponse,
  QueryDesignationsErrorResponse,
};

// schemas
export { DesignationFormSchema };
