"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <label className="text-white rounded-3xl hover:opacity-50">
      <p className="sr-only">change language</p>
      <select
        defaultValue={localActive}
        className="bg-transparent py-2 focus:outline-none focus:border-none"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en" className="text-black">
          ENG
        </option>
        <option value="ru" className="text-black">
          RU
        </option>
      </select>
    </label>
  );
}
