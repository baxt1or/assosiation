import { PenBox, PlusCircle, Trash } from "lucide-react";
import React from "react";

import { createNews, deleteNews } from "@/actions/news";
import { Button } from "@/components/ui/button";
import { getNews } from "@/db/queries";

import { DataTable } from "@/components/DataTable";

import { Textarea } from "@/components/ui/textarea";
import { NewsColumns } from "@/components/colums";
import { DialogForm } from "@/components/Dialog";

const NewsPage = async () => {
  const newsData = getNews();
  const [data] = await Promise.all([newsData]);
  return (
    <div className="max-w-5xl mx-auto mt-24">
      <h1 className="text-4xl font-bold text-black">Новости</h1>
      <DataTable columns={NewsColumns} data={data}>
        <DialogForm label="Добавить">
          <form action={createNews}>
            <div className="w-full flex flex-col items-center gap-y-12">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="p-4 w-full rounded-3xl"
              />

              <Textarea
                name="content"
                placeholder="Content"
                className="p-4 w-full rounded-3xl"
              />

              <label className="border rounded-2xl border-gray-500 aspect-square w-[200px] h-[200px] ">
                <input type="file" name="imgSrc" />
                <span className="text-black font-medium text-sm text-center p-12">
                  Select a file
                </span>
              </label>

              <Button
                type="submit"
                className="w-full font-bold text-lg bg-[#001561] text-white hover:bg-gray-500"
              >
                Save
              </Button>
            </div>
          </form>
        </DialogForm>
      </DataTable>
    </div>
  );
};

export default NewsPage;
