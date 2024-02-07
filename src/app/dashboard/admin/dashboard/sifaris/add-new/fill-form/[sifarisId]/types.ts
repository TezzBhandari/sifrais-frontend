import { CreateSifarisForm } from "../../../../system-configuration/sifaris/add/types";

interface SifarisType {
  id: number;
  name: string;
  sifarisforms: { id: number; sifaris_form_template: CreateSifarisForm };
}

interface QuerySifarisFormSuccessResponse {
  status: number;
  data: SifarisType;
  message: string;
}

export type { SifarisType, QuerySifarisFormSuccessResponse };
