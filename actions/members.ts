"use server";

import db from "@/db/db";
import { supabase } from "@/db/supabase";
import { time } from "console";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createMember = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const phone = formData.get("phone") as string;
  const webLink = formData.get("webLink") as string;
  const email = formData.get("email") as string;
  const address = formData.get("address") as string;

  const imgSrc = formData.get("imgSrc") as File;

  const { data: imgData } = await supabase.storage
    .from("images")
    .upload(`${imgSrc.name}-${new Date()}`, imgSrc, {
      cacheControl: "2592000",
      contentType: "image/png",
    });

  if (!imgData) {
    throw new Error("No image found while uploading ");
  }

  const data = await db.member.create({
    data: {
      title: title,
      phone: phone,
      webLink: webLink,
      email: email,
      address: address,
      imgSrc: imgData.path,
    },
  });

  revalidatePath("/dashboard/members");
  revalidatePath("/");
  revalidatePath("/members");

  return data;
};

export const deleteMember = async (id: string) => {
  const data = await db.member.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/dashboard/members");
  revalidatePath("/");
  revalidatePath("/members");
  return data;
};

export const updateMember = async (id: string, formData: FormData) => {
  const title = formData.get("title") as string;
  const phone = formData.get("phone") as string;
  const webLink = formData.get("webLink") as string;
  const email = formData.get("email") as string;
  const address = formData.get("address") as string;

  await db.member.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      phone: phone,
      webLink: webLink,
      email: email,
      address: address,
    },
  });

  revalidatePath("/dashboard/members");
  revalidatePath("/");
  revalidatePath("/members");
  redirect("/dashboard/members");
};
