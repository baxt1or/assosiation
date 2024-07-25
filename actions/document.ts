"use server";

import db from "@/db/db";
import { supabase } from "@/db/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Function to sanitize filename
const sanitizeFilename = (filename: string): string => {
  return filename.replace(/[^a-zA-Z0-9._-]/g, "_");
};

export const createDocum = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const fileSrc = formData.get("file") as File;

  if (!fileSrc) {
    return null;
  }

  console.log("File NAme", fileSrc.name);

  const sanitizedFilename = sanitizeFilename(fileSrc.name);
  const uploadPath = `${sanitizedFilename}-${new Date().toISOString()}`;

  const { data: fileData } = await supabase.storage
    .from("files")
    .upload(uploadPath, fileSrc as File);

  if (!fileData) {
    return null;
  }

  await db.document.create({
    data: {
      title: title,
      content: content,
      file: fileData?.path,
    },
  });

  revalidatePath("/dashboard/legislation");
  revalidatePath("/");
  revalidatePath("/legislation");
  redirect("/dashboard/legislation");
};

export const deleteDocument = async (id: string) => {
  await db.document.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/dashboard/legislation");
  revalidatePath("/");
  revalidatePath("/legislation");
  redirect("/dashboard/legislation");
};
