import { WorkersCard } from "@/components/WorkersCard";
import { getStaffMembers } from "@/db/queries";

export const metadata = {
  title: "Рабочая Группа",
};

const StuffGroupPage = async () => {
  const workersData = getStaffMembers();
  const [data] = await Promise.all([workersData]);
  return (
    <section className="max-w-7xl mx-auto mt-28 mb-12 px-12">
      <h1 className="text-4xl font-bold text-[#001561] ">Рабочая Группа</h1>
      <WorkersCard data={data} />
    </section>
  );
};

export default StuffGroupPage;
