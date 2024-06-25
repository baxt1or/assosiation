import { Faculty } from "@prisma/client";

type Props = {
  data: Faculty[];
};

export const WorkersCard = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 ">
      {data.map((person) => (
        <div className="group" key={person.name}>
          <div className="grid grid-cols-1 gap-4  rounded-lg border p-2 transform duration-500 transition-all group-hover:scale-105">
            <div className="flex flex-col gap-y-2 items-center justify-center">
              <h1 className="text-lg text-black font-bold text-center">
                {person.name}
              </h1>

              <div>
                <h2 className="text-md font-bold text-[#001561] ">
                  {person.position}
                </h2>
                <p className="text-sm text-muted-foreground mt-1 text-center">
                  {person.companyName}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
