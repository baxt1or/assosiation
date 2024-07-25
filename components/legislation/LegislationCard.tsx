import { Documents } from "@prisma/client";
import parse from "html-react-parser";
import { formatDateOnly } from "@/lib/utils";
import Link from "next/link";

interface Props {
  document: Documents;
}
export const LegislationCard = ({ document }: Props) => {
  if (!document) {
    return <p>No result</p>;
  }
  return (
    <div className="md:max-w-7xl mx-auto p-4">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-sm md:text-xl text-center text-[#001561] font-bold">
          {document.title}
        </h1>

        <div className="text-sm md:text-md text-black font-normal text-center max-h-24 overflow-hidden">
          {document.content}
        </div>

        <div className="flex items-center justify-between gap-y-2 ">
          <p className="text-sm text-muted-foreground font-normal">
            {formatDateOnly(document.createdAt)}
          </p>

          <Link
            href={`/legislation/${document.id}`}
            className="text-sm text-gray-600 hover:text-black hover:underline"
          >
            Читать далее
          </Link>
        </div>
      </div>
    </div>
  );
};
