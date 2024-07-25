import { getAds } from "@/db/queries";
import React from "react";
import { Reklama } from "./Reklama";

export const ReklamaList = async () => {
  const adsData = getAds();
  const [data] = await Promise.all([adsData]);
  return (
    <div className="grid grid-cols-1W md:grid-cols-1 gap-4 mt-6">
      {data.slice(0, 2).map((item) => (
        <Reklama key={item.id} content={item.content} imgSrc={item.imgSrc} />
      ))}
    </div>
  );
};
