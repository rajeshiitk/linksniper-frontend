// signUpSchema.ts
import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});
export type IForgotPassword = z.infer<typeof forgotPasswordSchema>;
