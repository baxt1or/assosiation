"use server";

import db from "@/db/db";
import { getUserByEmail } from "@/db/queries";
import { signIn } from "@/lib/auth/auth";
import {
  LoginSchema,
  LoginSchemaType,
  RegisterSchema,
  RegisterSchemaType,
} from "@/lib/validation";
// import { signIn } from "@/lib/auth/auth";
import bcrypt from "bcryptjs";
import { error } from "console";
import { AuthError, CredentialsSignin } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const login = async (values: LoginSchemaType) => {
  const validFileds = LoginSchema.safeParse(values);

  if (!validFileds.success) {
    return { error: "Invalid Credentials" };
  }

  const { email, password } = validFileds.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        default: {
          return { error: "Something wrong" };
        }
      }
    }

    throw error;
  }
};

export const register = async (values: RegisterSchemaType) => {
  const validFileds = RegisterSchema.safeParse(values);

  if (!validFileds.success) {
    return { error: "Invalid Credentials" };
  }

  const { username, email, password } = validFileds.data;
  try {
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return { error: "User already exists" };
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await db.user.create({
      data: {
        username: username,
        email: email,
        password: hashPassword,
      },
    });

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  } catch (error) {
    console.error(error);
    return { error: error };
  }
};

export const deleteUser = async (id: string) => {
  const data = await db.user.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/dashboard/user");
  return data;
};

export const updateUser = async (id: string, values: RegisterSchemaType) => {
  const validFileds = RegisterSchema.safeParse(values);

  if (!validFileds.success) {
    return { error: "Invalid Credentials" };
  }

  const { username, email, password } = validFileds.data;

  await db.user.update({
    where: {
      id: id,
    },
    data: {
      username: username,
      email: email,
      password: password,
    },
  });

  revalidatePath("/dashboard/user");
  revalidatePath("/auth/sign-in");
  redirect("/dashboard/user");
};
