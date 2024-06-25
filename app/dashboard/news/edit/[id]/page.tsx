import { updateNews } from "@/actions/news";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getNewsSingle } from "@/db/queries";
import { redirect } from "next/navigation";
import React from "react";

const NewsIdPage = async ({ params }: { params: { id: string } }) => {
  const news = await getNewsSingle(params.id);

  if (!news) {
    redirect("/dashboard/news");
  }

  const onSubmit = updateNews.bind(null, news.id);

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <form action={onSubmit}>
        <div className="w-full flex flex-col items-center gap-y-4">
          <label className="text-center text-4xl font-bold text-black">
            {" "}
            Edit
          </label>
          <input
            defaultValue={news.title}
            type="text"
            name="title"
            placeholder="Title"
            className="p-4 w-full rounded-3xl border-gray-500 border"
          />
          <Textarea
            defaultValue={news.content!}
            name="content"
            placeholder="Content"
            className="p-4 w-full rounded-3xl border-gray-500 border"
          />

          <Button
            type="submit"
            className="w-full font-bold text-lg bg-[#001561] text-white hover:bg-gray-500"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewsIdPage;
