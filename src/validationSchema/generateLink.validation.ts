// signUpSchema.ts
import { z } from "zod";

export const generateLinkSchema = z.object({
  url: z.string().url({ message: "Invalid link" }),
});
export type IGenerateLink = z.infer<typeof generateLinkSchema>;
