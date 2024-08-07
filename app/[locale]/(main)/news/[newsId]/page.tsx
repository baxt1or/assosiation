import Image from "next/image";
import { redirect } from "next/navigation";
import parse from "html-react-parser";
import { getSingleNews } from "@/db/queries";

const NewsIdPage = async ({ params }: { params: { newsId: string } }) => {
  const news = await getSingleNews(params.newsId);
  if (!news) {
    redirect("/");
  }
  return (
    <div className="w-full h-auto bg-gray-50 pt-28">
      <div className="max-w-7xl mx-auto ">
        <div className="relative flex flex-col gap-y-8 p-4">
          <p className="text-4xl text-black font-extrabold text-center">
            {news.title}
          </p>

          <div className="w-full h-[400px] relative ">
            <Image
              src={`https://dogovrrhdhdtxaylejbb.supabase.co/storage/v1/object/public/images/${news.imgSrc}`}
              alt="image"
              fill
              className="w-full h-full object-cover rounded-sm"
            />
          </div>

          <p className="text-sm font-normal text-black text-center">
            {parse(news.content)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsIdPage;
