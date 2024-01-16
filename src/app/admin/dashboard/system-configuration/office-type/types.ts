import { z } from "zod";

const OfficeTypeSchema = z.object({
  id: z.number(),
  office_type: z.string(),
});

export type OfficeType = z.infer<typeof OfficeTypeSchema>;

export { OfficeTypeSchema };
