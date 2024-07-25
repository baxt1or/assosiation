import { LegislationPaginationController } from "@/components/legislation/LegislationPagination";
import { getDocums } from "@/db/queries";

const LegistaionPage = async () => {
  const data = await getDocums();

  return (
    <section className="h-screen min-h-screen mt-24 p-2">
      <div className=" flex flex-col gap-y-8">
        <h1 className="text-2xl text-center md:text-4xl font-semibold text-black mt-12 ">
          Законодательство Республики Узбекистан
        </h1>
        <LegislationPaginationController data={data} />
      </div>
    </section>
  );
};

export default LegistaionPage;
