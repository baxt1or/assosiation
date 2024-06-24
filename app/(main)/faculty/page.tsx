import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Сотрудники",
};

const persons = [
  {
    name: "Амир Султанов",
    photo: "/director.jpg",
    position: "Менеджер по развитию",
    company: "Новотек",
  },
  {
    name: "Азиз Мирджураев",
    photo: "/ispol.jpg",
    position: "директор",
  },
  {
    name: "Асалят Ризаева",
    photo: "/ispol.jpg",
    position: "фин директор",
    company: "Abbot Labaratories",
  },
  {
    name: "Фазлыева Светлана Каримовн",
    photo: "/ispol.jpg",
    position: "финансовый менеджер по региону Центральная Азия",
    company: "ПРО.МЕД.ЦС Прага",
  },
];

const StuffGroupPage = () => {
  return (
    <section className="max-w-7xl mx-auto mt-28 mb-12 px-12">
      <h1 className="text-4xl font-bold text-black">Сотрудники</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 ">
        {persons.map((person) => (
          <div className="group" key={person.name}>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4  w-full h-full rounded-lg border p-2 transform duration-500 transition-all group-hover:scale-105">
              <div className="flex flex-col gap-y-8 items-center justify-center">
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-lg text-black font-bold text-center">
                    {person.name}
                  </h1>
                  <p className="text-xl text-[#001561] font-semibold text-center flex flex-col gap-y-1">
                    <span className="text-sm font-bold ">
                      {person.position}{" "}
                    </span>
                    <p className="text-sm text-muted-foreground mt-2">
                      {person.company}
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StuffGroupPage;
