"use server";

import db from "@/db/db";
import { supabase } from "@/db/supabase";
import { revalidatePath } from "next/cache";

export const createAds = async (formData: FormData) => {
  const content = formData.get("content") as string;
  const imgSrc = formData.get("imgSrc") as File;

  const { data: imgData } = await supabase.storage
    .from("images")
    .upload(`${imgSrc.name}-${new Date()}`, imgSrc, {
      cacheControl: "2592000",
      contentType: "image/png",
    });

  if (!imgData) {
    return null;
  }

  const data = await db.ads.create({
    data: {
      content: content,
      imgSrc: imgData.path,
    },
  });

  revalidatePath("/dashboard/ads");
  revalidatePath("/");
  return data;
};
