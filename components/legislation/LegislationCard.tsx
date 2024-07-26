import { formatDateOnly } from "@/lib/utils";
import { Link } from "@/navigation";
import { Document } from "@prisma/client";

interface Props {
  document: Document;
}
export const LegislationCard = ({ document }: Props) => {
  if (!document) {
    return <p>No result</p>;
  }
  return (
    <div className="max-w-5xl mx-auto p-4 mb-12">
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
            href={{
              pathname: "/legislation/[documentId]",
              params: { documentId: document.id },
            }}
            className="text-sm text-gray-600 hover:text-black hover:underline"
          >
            Читать далее
          </Link>
        </div>
      </div>
    </div>
  );
};
