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
    <div className="max-w-5xl mx-auto p-2">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-lg  text-[#001561] font-bold">{document.title}</h1>
        <div className="text-md text-black font-normal truncate h-24">
          {parse(document.content)}
        </div>
        <div className="flex items-center justify-between">
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
