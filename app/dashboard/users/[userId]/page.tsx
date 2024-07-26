import { getUserById } from "@/db/queries";
import React from "react";

const UserPage = async ({ params }: { params: { userId: string } }) => {
  const user = await getUserById(params.userId);
  return <div className="mt-24">{JSON.stringify(user)}</div>;
};

export default UserPage;
