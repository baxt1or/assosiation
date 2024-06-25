import { getAboutsData } from "@/db/queries";
import { DataTable } from "@/components/DataTable";
import { AboutDataColums } from "@/components/colums";
import { AboutDataForm } from "@/components/Forms";

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
