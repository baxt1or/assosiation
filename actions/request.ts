"use server";

import db from "@/db/db";
import { formSchema, Schema } from "@/lib/schema";
import { revalidatePath } from "next/cache";

export const createRequest = async (values: formSchema) => {
  const result = Schema.safeParse(values);

  if (!result.success) {
    return { error: "jj" };
  }

  const { fullName, position, email, phoneNumber, companyName } = result.data;

  const data = await db.request.create({
    data: {
      fullName: fullName,
      position: position,
      email: email,
      comanyName: companyName,
      phoneNumber: phoneNumber,
    },
  });

  revalidatePath("/dashboard/requests");
  revalidatePath("/");
  return data;
};

export const deleteRequest = async (id: number) => {
  const data = await db.request.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/dashboard/request");
  revalidatePath("/");
  return data;
};
