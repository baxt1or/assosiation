import { LegislationPaginationController } from "@/components/legislation/LegislationPagination";

import { getDocuments } from "@/lib/queries";

const LegistaionPage = async () => {
  const documents = getDocuments();
  const [data] = await Promise.all([documents]);
  return (
    <section className="w-full pb-6 h-screen min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col gap-y-8 p-2">
        <h1 className="text-4xl font-semibold text-black mt-12 pl-32">
          Законодательство Республики Узбекистан
        </h1>

        <LegislationPaginationController data={data} />
      </div>
    </section>
  );
};

export default LegistaionPage;
