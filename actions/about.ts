"use server";

import db from "@/db/db";
import { revalidatePath } from "next/cache";

export const createAboutData = async (formData: FormData) => {
  const phoneOne = formData.get("phoneOne") as string;
  const phoneTwo = formData.get("phoneTwo") as string;
  const email = formData.get("email") as string;
  const address = formData.get("address") as string;

  const data = await db.about.create({
    data: {
      phoneOne: phoneOne,
      phoneTwo: phoneTwo,
      email: email,
      address: address,
    },
  });

  revalidatePath("/dashboard/about");
  revalidatePath("/contacts");
  return data;
};

export const deleteAboutData = async (id: string) => {
  const data = await db.about.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/dashboard/about");
  revalidatePath("/contacts");
  return data;
};
