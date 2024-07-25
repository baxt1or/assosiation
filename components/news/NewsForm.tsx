"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { createNews } from "@/actions/news";
import { useState } from "react";
import Editor from "../shared/Editor";

export const NewsForm = () => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [content, setContent] = useState<string>("");

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

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("content", content);
    await createNews(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center gap-y-6"
    >
      <h1 className="text-center font-bold text-3xl mb-2">Добавить</h1>

      <Input
        type="text"
        name="title"
        placeholder="Названия"
        className="p-4 w-full rounded-3xl"
      />

      <Editor value={content} onChange={handleContentChange} />

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
            width={200}
            height={200}
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
  );
};
