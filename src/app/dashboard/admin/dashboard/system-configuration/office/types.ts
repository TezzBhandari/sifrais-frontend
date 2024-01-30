import { z } from "zod";
import { Province } from "../../it-nagar/create-user/utils/api/QueryProvinces";
import { OfficeType } from "../office-type/types";
import validator from "validator";

interface Office {
  id: number;
  office_name: string;
  office_address: string;
  office_phone: string;
  office_email: string;
  latitude: string;
  longitude: string;
  is_active: number;
  office_type: OfficeType;
  province: Province;
  district: {
    id: number;
    did: number;
    district_en: string;
    district_np: string;
  };
  locallevel: {
    id: number;
    lgid: number;
    lgname_en: string;
    lgname_np: string;
  };
}

// fetch office response type
interface QueryOfficeSuccessResponse {
  status: number;
  data: Array<Office>;
  message: string;
}

interface QueryOfficeErrorResponse {
  status: number;
  message: string;
}

// delete office response type
interface DeleteOfficeSuccessResponse {
  status: number;
  message: string;
}

// interface DeleteOfficeErrorResponse {
//   status: number;
//   message: string;
// }

// components props
interface OfficeTableRowActionsProps {
  office: Office;
}

interface OfficeDeleteModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  office: Office;
}

// office form schema
const OfficeFormSchema = z.object({
  office_type_id: z.number(),
  province_id: z.number(),
  district_id: z.number(),
  lg_id: z.number(),
  office_name: z.string().min(1, { message: "office name required" }),
  office_address: z.string(),
  office_phone: z
    .string()
    .refine(validator.isMobilePhone, { message: "invalid phone number" }),
  office_email: z.string().email({ message: "invalid email" }),
  latitude: z.string(),
  longitude: z.string(),
  is_active: z.boolean(),
});

type OfficeFormType = z.infer<typeof OfficeFormSchema>;

export type {
  Office,
  OfficeDeleteModalProps,
  OfficeFormType,
  //   DeleteOfficeErrorResponse,
  DeleteOfficeSuccessResponse,
  OfficeTableRowActionsProps,
  QueryOfficeSuccessResponse,
  QueryOfficeErrorResponse,
};

// schemas
export { OfficeFormSchema };
