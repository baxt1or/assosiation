import { getDocument } from "@/lib/queries";
import { redirect } from "next/navigation";
import parse from "html-react-parser";

const DocumentIdPage = async ({
  params,
}: {
  params: { documentId: string };
}) => {
  const data = await getDocument(params.documentId);
  if (!data) {
    return redirect("/legislation");
  }
  return (
    <section className="w-full pb-6 h-screen min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col gap-y-8 p-2">
        <h1 className="text-3xl font-semibold text-black mt-12 text-center">
          {data.title}
        </h1>

        <div className="max-w-5xl mx-auto">{parse(data.content)}</div>
      </div>
    </section>
  );
};

export default DocumentIdPage;
