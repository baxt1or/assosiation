"use client";

import React, { useTransition } from "react";
import { DialogForm } from "../../shared/Dialog";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { login, register, updateUser } from "@/actions/user";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../ui/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, RegisterSchemaType } from "@/lib/validation";
import { Loader2Icon } from "lucide-react";

const UpdateUserForm = ({ userId }: { userId: string }) => {
  const router = useRouter();
  const [isPending, setIsPending] = useTransition();

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: RegisterSchemaType) {
    setIsPending(async () => {
      await updateUser(userId, values).then((data) => {
        form.reset();
        router.refresh();
      });
    });
  }

  return (
    <DialogForm label="Добавить">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full"
        >
          <h1 className="text-4xl text-center  text-black font-bold">
            Update User
          </h1>

          <FormField
            disabled={isPending}
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
              "Register"
            )}
          </Button>
        </form>
      </Form>
    </DialogForm>
  );
};

export default UpdateUserForm;
