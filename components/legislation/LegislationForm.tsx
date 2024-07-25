"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { createDocum } from "@/actions/document";
import { useState } from "react";
import { Textarea } from "../ui/textarea";

export const LegislationForm = () => {
  const [content, setContent] = useState<string>("");

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("content", content);
    await createDocum(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center gap-y-4"
    >
      <h1 className="text-center text-3xl font-bold text-black mb-4">
        Добавить
      </h1>
      <Input
        type="text"
        name="title"
        placeholder="Title"
        className="p-4 rounded-2xl"
      />

      <Textarea rows={12} name="content" placeholder="Content" />

      <Input type="file" name="file" placeholder="Upload file" />

      <Button type="submit" className="w-full font-bold text-lg">
        Сохранять
      </Button>
    </form>
  );
};
