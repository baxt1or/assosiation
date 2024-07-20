import { z } from "zod";

export const documentSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  category: z.string().min(1, "Category is required"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type documentShemaType = z.infer<typeof documentSchema>;
