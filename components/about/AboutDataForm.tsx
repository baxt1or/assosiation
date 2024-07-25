"use client";

import { createAboutData } from "@/actions/about";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { DialogForm } from "../shared/Dialog";

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
