"use server";

import db from "@/db/db";
import { revalidatePath } from "next/cache";

export const createStaffMember = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const position = formData.get("position") as string;
  const companyName = formData.get("companyName") as string;

  const data = await db.faculty.create({
    data: {
      name: name,
      position: position,
      companyName: companyName,
    },
  });

  revalidatePath("/dashboard/staff");
  revalidatePath("/");
  revalidatePath("/faculty");

  return data;
};

export const deleteStaffMember = async (id: string) => {
  const data = await db.faculty.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/dashboard/staff");
  revalidatePath("/");
  revalidatePath("/faculty");
  return data;
};
