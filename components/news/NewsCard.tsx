import Image from "next/image";
import Link from "next/link";

import { cn, formatDateOnly } from "@/lib/utils";

import parse from "html-react-parser";
import { buttonVariants } from "../ui/button";

type Props = {
  id: string;
  title: string;
  imgSrc: string;
  createdAt: Date;
  content: string;
};

export const NewsCard = ({ id, title, imgSrc, createdAt, content }: Props) => {
  return (
    <div className="group ">
      <div className="flex flex-col gap-y-4 shadow-sm border border-gray-500/30 rounded-3xl bg-white px-2 pb-4 pt-2 transform duration-500 transition-all group-hover:scale-105 h-[350px]">
        <div className="group">
          <div className="relative h-[200px]">
            <Image
              src={`https://dogovrrhdhdtxaylejbb.supabase.co/storage/v1/object/public/images/${imgSrc}`}
              alt="image"
              fill
              className={cn("object-cover rounded-lg")}
            />
          </div>
        </div>
        <div className="space-y-2 px-4">
          <h1 className="text-md text-center font-semibold text-[#001561] truncate max-w-[300px]">
            {title}
          </h1>

          <div className="text-xs line-clamp-2 text-muted-foreground">
            {parse(content)}
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              {formatDateOnly(createdAt)}
            </p>

            <Link
              href={`/news/${id}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "text-gray-500 text-xs"
              )}
            >
              Читать далее
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
