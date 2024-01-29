import { Province } from "../../it-nagar/create-user/utils/api/QueryProvinces";
import { OfficeType } from "../office-type/types";

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
  offices: Array<Office>;
}

interface OfficeDeleteModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  office: Office;
}

export type {
  Office,
  OfficeDeleteModalProps,
  //   DeleteOfficeErrorResponse,
  DeleteOfficeSuccessResponse,
  OfficeTableRowActionsProps,
  QueryOfficeSuccessResponse,
  QueryOfficeErrorResponse,
};
