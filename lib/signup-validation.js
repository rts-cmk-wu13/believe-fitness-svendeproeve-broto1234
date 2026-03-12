import { z } from "zod";

export const signupSchema = z.object({
  userFirstName: z.string().min(4, "Minimum 4 characters"),
  userLastName: z.string().min(4, "Minimum 4 characters"),
  username: z.string().min(4, "Minimum 4 characters"),
  password: z.string().min(4, "Minimum 4 characters"),
  confirmPassword: z.string().min(4, "Minimum 4 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
   path: ["confirmPassword"],
});