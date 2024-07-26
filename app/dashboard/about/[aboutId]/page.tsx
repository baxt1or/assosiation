import { getAboutDataById } from "@/db/queries";
import React from "react";

const AboutDataPage = async ({ params }: { params: { aboutId: string } }) => {
  const data = await getAboutDataById(params.aboutId);
  return <div>AboutDataPage</div>;
};

export default AboutDataPage;
