import { z } from "zod";

export const documentSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  category: z.string().min(1, "Category is required"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type documentShemaType = z.infer<typeof documentSchema>;

export const RegisterSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

export const LoginSchema = z.object({
  email: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
