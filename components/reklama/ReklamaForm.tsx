"use client";

import { createAds } from "@/actions/ads";
import { Button } from "../ui/button";
import { DialogForm } from "../shared/Dialog";

export const ReklamaForm = () => {
  return (
    <DialogForm label="Добавить">
      <form
        action={createAds}
        className="w-full flex flex-col items-center gap-y-6"
      >
        <h1 className="text-center font-bold text-3xl mb-2">Добавить</h1>

        <input type="file" name="imgSrc" />

        <Button type="submit" className="w-full font-bold text-lg">
          Сохранять
        </Button>
      </form>
    </DialogForm>
  );
};
