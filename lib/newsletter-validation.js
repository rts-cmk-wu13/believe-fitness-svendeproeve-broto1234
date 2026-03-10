import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.email("Write a valid email address"),
});
