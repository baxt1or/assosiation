"use client";

import { createMember } from "@/actions/members";
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Image from "next/image";
import { Button } from "../ui/button";
import { DialogForm } from "../shared/Dialog";

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
