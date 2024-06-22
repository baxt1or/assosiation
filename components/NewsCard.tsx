import Image from "next/image";
import Link from "next/link";

import { cn, formatDate } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

type Props = {
  id: string;
  title: string;
  imgSrc: string;
  createdAt: Date;
};

export const NewsCard = ({ id, title, imgSrc, createdAt }: Props) => {
  return (
    <div className="flex flex-col gap-y-4 shadow-sm border border-gray-500/30 rounded-3xl bg-white px-2 pb-4 pt-2">
      <Image
        src={`https://dogovrrhdhdtxaylejbb.supabase.co/storage/v1/object/public/images/${imgSrc}`}
        alt="image"
        width={300}
        height={200}
        className="w-[500px] h-[200px] object-cover rounded-lg transform duration-200 transition-all group-hover:scale-105"
      />
      <div className="space-y-2 px-4">
        <h1 className="text-md text-center font-semibold text-[#001561] ">
          {title}
        </h1>

        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            {formatDate(createdAt)}
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
  );
};
