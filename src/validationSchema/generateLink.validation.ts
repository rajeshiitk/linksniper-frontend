// signUpSchema.ts
import { z } from "zod";

export const generateLinkSchema = z.object({
  originalUrl: z.string().url({ message: "Invalid link" }),
});
export type IGenerateLink = z.infer<typeof generateLinkSchema>;
