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
        router.push("/dashboard/users");
      });
    });
  }

  return (
    <div className="max-w-[400px] mx-auto h-screen flex flex-col items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full"
        >
          <h1 className="text-4xl text-center text-black font-bold">
            Welcome Back
          </h1>

          <FormField
            disabled={isPending}
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
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
                  <Input placeholder="*******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? (
              <Loader2Icon className="h-4 w-4 animate-spin" />
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
