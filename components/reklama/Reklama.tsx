import { cn } from "@/lib/utils";
import Image from "next/image";

export const Reklama = ({ imgSrc }: { content: string; imgSrc: string }) => {
  return (
    <div className="group">
      <div className="flex flex-col gap-y-4 shadow-sm border border-gray-500/30 rounded-3xl bg-white px-2 pb-4 pt-2 transform duration-500 transition-all group-hover:scale-105">
        <div className="group">
          <div className="relative h-[300px]">
            <Image
              src={`https://dogovrrhdhdtxaylejbb.supabase.co/storage/v1/object/public/images/${imgSrc}`}
              alt="image"
              fill
              className={cn("object-cover rounded-lg")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
