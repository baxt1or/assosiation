import { z } from "zod";

export const Schema = z.object({
  fullName: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  position: z.string().min(2, {
    message: "",
  }),
  email: z.string().min(2, { message: "" }),
  companyName: z.string().min(2, { message: "" }),
  phoneNumber: z.string().min(2, { message: "" }),
});

export type formSchema = z.infer<typeof Schema>;

export const Schema2 = z.object({
  title: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  content: z.string().min(2, {
    message: "",
  }),
});

export type formSchema2 = z.infer<typeof Schema2>;
