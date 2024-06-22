"use server";

import db from "@/db/db";
import { supabase } from "@/db/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createNews = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const imgSrc = formData.get("imgSrc") as File;
  const fileSrc = formData.get("fileSrc") as File;

  const { data: imgData } = await supabase.storage
    .from("images")
    .upload(`${imgSrc.name}-${new Date()}`, imgSrc, {
      cacheControl: "2592000",
      contentType: "image/png",
    });

  // const { data: fileData } = await supabase.storage.from("images").upload(`${fileSrc.name}-${new Date}`, fileSrc, {
  //     cacheControl: "2592000",
  //     contentType: "image/png"
  // })

  const data = await db.news.create({
    data: {
      title: title,
      content: content,
      imgSrc: imgData?.path,
    },
  });

  revalidatePath("/dashboard/news");
  revalidatePath("/");
  revalidatePath("/news");
  return data;
};

export const deleteNews = async (id: string) => {
  const data = await db.news.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/dashboard/news");
  revalidatePath("/");
  revalidatePath("/news");
  return data;
};

export const updateNews = async (id: string, formData: FormData) => {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await db.news.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      content: content,
    },
  });

  revalidatePath("/dashboard/news");
  revalidatePath("/");
  revalidatePath("/news");
  redirect("/dashboard/news");
};
