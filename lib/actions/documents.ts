"use server";

import db from "@/db/db";
import { documentShemaType } from "../validation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createDocument = async (values: documentShemaType) => {
  await db.documents.create({
    data: {
      title: values.title,
      category: values.category,
      content: values.content,
    },
  });

  revalidatePath("/legislation");
  revalidatePath("/dashboard/legislation");
  redirect("/dashboard/legislation");
};
