import { getAboutsData } from "@/db/queries";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export const AboutData = async () => {
  const data = await getAboutsData();
  return (
    <div className="space-y-8">
      {data.map((item) => (
        <div key={item.id} className="flex flex-col gap-y-4">
          <p className="flex items-center gap-2 text-sm" key={item.id}>
            <Phone className="h-4 w-4" aria-label="Phone icon" />
            {item.phoneOne}
          </p>
          <p className="flex items-center gap-2 text-sm" key={item.id}>
            <Phone className="h-4 w-4" aria-label="Phone icon" />
            {item.phoneTwo}
          </p>
          <h1 className="flex items-center gap-2 text-sm font-semibold ">
            <Mail className="w-4 h-4" aria-label="Mail icon" />
            {item.email}
          </h1>
          <h1 className="flex items-center gap-2 text-sm font-semibold ">
            <MapPin className="w-5 h-5" aria-label="Map pin icon" />
            {item.address}
          </h1>
        </div>
      ))}
    </div>
  );
};
