import { redirect } from "next/navigation";
import parse from "html-react-parser";
import { Download } from "lucide-react";
import { getDocum } from "@/db/queries";
import Link from "next/link";

const DocumentIdPage = async ({
  params,
}: {
  params: { documentId: string };
}) => {
  const data = await getDocum(params.documentId);
  if (!data) {
    return redirect("/legislation");
  }
  return (
    <section className="w-full pb-6 h-screen min-h-screen mt-24">
      <div className="flex flex-col gap-y-6 px-4">
        <h1 className="text-2xl font-semibold text-black mt-12 text-center">
          {data.title}
        </h1>
        <div className="max-w-6xl mx-auto text-center">
          {parse(data.content)}
        </div>

        <Link
          href={`https://dogovrrhdhdtxaylejbb.supabase.co/storage/v1/object/public/files/${data.file}`}
          className="flex justify-center"
        >
          <Download className="w-6 h-6 text-gray-500 hover:underline hover:text-gray-900" />
        </Link>
      </div>
    </section>
  );
};

export default DocumentIdPage;
