"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { formSchema, Schema } from "@/lib/schema";
import { createRequest } from "@/actions/request";
import { useRouter } from "next/navigation";

import { Loader2 } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

export interface RequestFormProps {
  header: string;
  full_name: string;
  occupation: string;
  email: string;
  company_name: string;
  phone_number: string;
  saveButton: string;
}

export const RequestForm = ({
  header,
  full_name,
  occupation,
  email,
  company_name,
  phone_number,
  saveButton,
}: RequestFormProps) => {
  const router = useRouter();

  const form = useForm<formSchema>({
    resolver: zodResolver(Schema),
    defaultValues: {
      fullName: "",
      position: "",
      email: "",
      companyName: "",
      phoneNumber: "",
    },
  });

  function onSubmit(values: formSchema) {
    createRequest(values).then((data) => {
      form.reset();
      router.refresh();
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Label className="text-3xl text-center  text-black font-bold">
          {header}
        </Label>

        <FormField
          disabled={form.formState.isSubmitting}
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder={full_name} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={form.formState.isSubmitting}
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder={occupation} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={form.formState.isSubmitting}
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder={company_name} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={form.formState.isSubmitting}
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder={email} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={form.formState.isSubmitting}
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder={phone_number} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <p>{saveButton}</p>
          )}
        </Button>
      </form>
    </Form>
  );
};
