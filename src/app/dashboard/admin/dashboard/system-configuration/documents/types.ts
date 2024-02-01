import { z } from "zod";

interface Document {
  id: number;
  doc_name: string;
}

// fetch Documents response type
interface QueryDocumentsSuccessResponse {
  status: number;
  data: Array<Document>;
  message: string;
}

interface QueryDocumentsErrorResponse {
  status: number;
  message: string;
}

// delete Documents response type
interface DeleteDocumentSuccessResponse {
  status: number;
  message: string;
}

interface PostDocumentSuccessResponse {
  status: number;
  data: Document;
  message: string;
}

interface PostDocumentErrorResponse {
  //commin soon
}

// interface DeleteDocumentsErrorResponse {
//   status: number;
//   message: string;
// }

// components props
interface DocumentsTableRowActionsProps {
  document: Document;
}

interface DocumentDeleteModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  document: Document;
}

// Documents form schema
const DocumentsFormSchema = z.object({
  doc_name: z.string().min(1, { message: "document name required" }),
});

type DocumentFormType = z.infer<typeof DocumentsFormSchema>;

export type {
  Document,
  DocumentDeleteModalProps,
  DocumentFormType,
  //   DeleteDocumentsErrorResponse,
  PostDocumentErrorResponse,
  PostDocumentSuccessResponse,
  DeleteDocumentSuccessResponse,
  DocumentsTableRowActionsProps,
  QueryDocumentsSuccessResponse,
  QueryDocumentsErrorResponse,
};

// schemas
export { DocumentsFormSchema };
