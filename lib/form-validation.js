import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Write a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});