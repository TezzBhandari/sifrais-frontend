import { z } from "zod";

interface OfficeType {
  id: number;
  office_type: string;
}
const OfficeTypeFormSchema = z.object({
  office_type: z.string().min(1, { message: "office type is required" }),
});

interface PostOfficeTypeSuccessResponse {
  status: number;
  message: string;
}

type OfficeTypeForm = z.infer<typeof OfficeTypeFormSchema>;

export type { PostOfficeTypeSuccessResponse, OfficeType, OfficeTypeForm };

export { OfficeTypeFormSchema };
