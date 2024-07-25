import { getAboutsData } from "@/db/queries";

import { AboutDataForm } from "@/components/about/AboutDataForm";
import { DataTable } from "@/components/data-table/DataTable";
import { AboutDataColums } from "@/components/data-table/columns";

const AboutDataPage = async () => {
  const aboutData = getAboutsData();
  const [data] = await Promise.all([aboutData]);

  return (
    <div className="mt-24 max-w-5xl mx-auto">
      <h1 className="text-4xl text-black font-extrabold">О нас</h1>
      <DataTable data={data} columns={AboutDataColums}>
        <AboutDataForm />
      </DataTable>
    </div>
  );
};

export default AboutDataPage;
