"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { login } from "@/actions/user";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginSchemaType } from "@/lib/validation";
import { Loader2Icon } from "lucide-react";
import { useState, useTransition } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [isPending, setIsPending] = useTransition();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginSchemaType) {
    console.log("Login Values:", values);
    setIsPending(async () => {
      await login(values).then((data) => {
        form.reset();
        router.push("/dashboard");
      });
    });
  }

  return (
    <div className="max-w-[450px] mx-auto h-screen flex flex-col items-center justify-center ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full border border-gray-200 p-4 rounded-3xl py-6"
        >
          <h1 className="text-5xl text-center text-black font-bold">
            ВХОД В ПАНЕЛЬ
          </h1>

          <FormField
            disabled={isPending}
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Пользователь"
                    {...field}
                    className="text-2xl placeholder:text-xl p-8"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            disabled={isPending}
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Пароль"
                    {...field}
                    className="text-2xl placeholder:text-xl p-8"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full p-4" disabled={isPending}>
            {isPending ? (
              <Loader2Icon className="h-4 w-4 animate-spin" />
            ) : (
              <p className="text-lg uppercase">Вход в систему</p>
            )}
          </Button>
        </form>
      </Form>

      <p className="text-center md:text-left text-lg mt-4">
        &copy; {new Date().getFullYear()} Все права защищены
      </p>
    </div>
  );
};

export default LoginForm;
