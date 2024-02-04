import { AxiosError } from "axios";
import { z } from "zod";
import "@tanstack/react-query";

// sifaris type
const SifarisSchema = z.object({
  id: z.number(),
  name: z.string(),
  route: z.string(),
  method: z.string(),
  sifaristables: z.string().array().optional(),
  sifarisforms: z.string().array().optional(),
  sifarisdocuments: z
    .object({
      id: z.number(),
      doc_name: z.string(),
      pivot: z.object({ sifaris_type_id: z.number(), document_id: z.number() }),
    })
    .array(),
});

interface SifarisFormTemplateSuccessResponse {
  status: number;
  message: string;
}

interface SifarisFormTemplateErrorResponse {
  status: number;
  message: string;
}

interface SifarisSuccessResponse {
  status: number;
  data: Array<z.infer<typeof SifarisSchema>>;
  message: string;
}

interface SifarisErrorResponse {
  status: number;
  message: string;
}

interface ErrorResponse extends SifarisErrorResponse {}

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError<ErrorResponse>;
  }
}

// row action component props
interface SifarisTableRowActionsProps {
  sifaris: Sifaris;
}

export { SifarisSchema };

export type {
  SifarisSuccessResponse,
  SifarisErrorResponse,
  SifarisTableRowActionsProps,
  SifarisFormTemplateErrorResponse,
  SifarisFormTemplateSuccessResponse,
};

export type Sifaris = z.infer<typeof SifarisSchema>;
