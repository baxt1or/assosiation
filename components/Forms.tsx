"use client";

import { DialogForm } from "./Dialog";
import { createStaffMember } from "@/actions/staff";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { createNews } from "@/actions/news";
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
import { Label } from "./ui/label";
import { createMember } from "@/actions/members";
import { createAboutData } from "@/actions/about";
import { useState } from "react";
import Image from "next/image";
import { createAds } from "@/actions/ads";

export const StaffForm = () => {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");

  const handlePositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setPosition(capitalizedValue);
  };

  const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value;
    const capitalizedCompany = result.charAt(0).toUpperCase() + result.slice(1);
    setCompany(capitalizedCompany);
  };

  return (
    <DialogForm label="Добавить">
      <form
        action={createStaffMember}
        className="w-full flex flex-col items-center gap-y-4 p-2"
      >
        <h1 className="text-center font-bold text-3xl mb-2">Добавить</h1>
        <Input
          type="text"
          name="name"
          placeholder="Ф.И.О"
          className="p-3 w-full rounded-2xl"
        />
        <Input
          name="position"
          placeholder="Должность"
          className="p-3 w-full rounded-2xl"
          value={position}
          onChange={handlePositionChange}
        />
        <Input
          name="companyName"
          placeholder="Компания"
          className="p-3 w-full rounded-2xl"
          value={company}
          onChange={handleCompanyChange}
        />

        <Button type="submit" className="w-full font-bold text-lg">
          Сохранять
        </Button>
      </form>
    </DialogForm>
  );
};

export const MemberForm = () => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <DialogForm label="Добавить">
      <form
        action={createMember}
        className="w-full flex flex-col items-center gap-y-4"
      >
        <h1 className="text-center text-3xl font-bold text-black mb-4">
          Добавить
        </h1>
        <Input
          type="text"
          name="title"
          placeholder="Компания"
          className="p-4 rounded-2xl"
        />
        <Input
          type="text"
          name="webLink"
          placeholder="Website"
          className="p-4 rounded-2xl"
        />
        <Input
          type="text"
          name="email"
          placeholder="Email"
          className="p-4 rounded-2xl"
        />
        <Input
          type="text"
          name="address"
          placeholder="Адрес"
          className="p-4 rounded-2xl"
        />
        <Input
          type="text"
          name="phone"
          placeholder="Номер"
          className="p-4 rounded-2xl"
        />
        <Label className="border rounded-2xl border-gray-500 aspect-square w-[200px] h-[200px] flex items-center justify-center">
          <Input
            type="file"
            name="imgSrc"
            onChange={handleImageChange}
            className="hidden"
          />
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt="Preview"
              className="object-cover w-full h-full rounded-2xl"
            />
          ) : (
            <span className="text-black font-medium text-sm text-center p-12">
              Выберите файл
            </span>
          )}
        </Label>

        <Button type="submit" className="w-full font-bold text-lg">
          Сохранять
        </Button>
      </form>
    </DialogForm>
  );
};

export const NewsForm = () => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <DialogForm label="Добавить">
      <form
        action={createNews}
        className="w-full flex flex-col items-center gap-y-6"
      >
        <h1 className="text-center font-bold text-3xl mb-2">Добавить</h1>
        <Input
          type="text"
          name="title"
          placeholder="Названия"
          className="p-4 w-full rounded-3xl"
        />

        <Textarea
          name="content"
          placeholder="Content"
          className="p-4 w-full rounded-3xl"
        />

        <Label className="border rounded-2xl border-gray-500 aspect-square w-[200px] h-[200px] flex items-center justify-center">
          <Input
            type="file"
            name="imgSrc"
            onChange={handleImageChange}
            className="hidden"
          />
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt="Preview"
              className="object-cover w-full h-full rounded-2xl"
            />
          ) : (
            <span className="text-black font-medium text-sm text-center p-12">
              Выберите файл
            </span>
          )}
        </Label>

        <Button type="submit" className="w-full font-bold text-lg">
          Сохранять
        </Button>
      </form>
    </DialogForm>
  );
};

export const FormRequest = () => {
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
        <Label className="text-3xl text-center text-black font-bold">
          Оставить заявку
        </Label>

        <FormField
          disabled={form.formState.isSubmitting}
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Ф.И.О" {...field} />
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
                <Input placeholder="Должность" {...field} />
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
                <Input placeholder="Компания" {...field} />
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
                <Input placeholder="Email" {...field} />
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
                <Input placeholder="Номер телефона" {...field} />
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
            "Отпрпавить"
          )}
        </Button>
      </form>
    </Form>
  );
};

export const AboutDataForm = () => {
  return (
    <DialogForm label="Добавить">
      <form
        action={createAboutData}
        className="w-full flex flex-col items-center gap-y-4"
      >
        <h1 className="text-center font-bold text-3xl mb-2">Добавить</h1>
        <Input
          type="text"
          name="phoneOne"
          placeholder="Номер 1"
          className="p-4 w-full rounded-3xl"
        />
        <Input
          type="text"
          name="phoneTwo"
          placeholder="Номер 2"
          className="p-4 w-full rounded-3xl"
        />
        <Input
          type="text"
          name="email"
          placeholder="Email"
          className="p-4 w-full rounded-3xl"
        />
        <Input
          type="text"
          name="address"
          placeholder="Адрес"
          className="p-4 w-full rounded-3xl"
        />

        <Button type="submit" className="w-full font-bold text-lg">
          Сохранять
        </Button>
      </form>
    </DialogForm>
  );
};

export const AdsForm = () => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <DialogForm label="Добавить">
      <form
        action={createAds}
        className="w-full flex flex-col items-center gap-y-6"
      >
        <h1 className="text-center font-bold text-3xl mb-2">Добавить</h1>

        <input type="file" name="imgSrc" />
        <Textarea
          name="content"
          placeholder="Content"
          className="p-4 w-full rounded-3xl"
        />

        <Button type="submit" className="w-full font-bold text-lg">
          Сохранять
        </Button>
      </form>
    </DialogForm>
  );
};
