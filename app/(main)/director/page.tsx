import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Руководство",
};

const persons = [
  {
    name: "Аскарова Мухаббат Акбаровна",
    photo: "/director.jpg",
    position: "Директор",
  },
  {
    name: "Литвиненко Наталья Генадьевна",
    photo: "/ispol.jpg",
    position: "Исполнительный директор  ",
  },
];

const DirectorsPage = () => {
  return (
    <div className="w-full h-auto bg-gray-50 pt-28">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1">
          {persons.map((person) => (
            <div
              key={person.name}
              className="grid grid-cols-1 md:grid-cols-2 gap-8  w-full h-full py-12 "
            >
              <div className="w-full h-full relative">
                <Image
                  src={person.photo}
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover aspect-square"
                />
              </div>

              <div className="flex flex-col gap-y-8 mt-24 ml-2">
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-2xl text-black font-bold text-center">
                    {person.name}
                  </h1>
                  <p className="text-xl text-[#001561] font-semibold text-center flex flex-col gap-y-1">
                    <span className="text-2xl font-bold ">
                      {person.position}{" "}
                    </span>
                    Ассоциация представительств иностранных фармацевтических
                    компаний и производителей в Республике Узбекистан
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DirectorsPage;
