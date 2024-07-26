import { getDocum } from "@/db/queries";
import React from "react";

const DocumentPage = async ({ params }: { params: { documentId: string } }) => {
  const data = await getDocum(params.documentId);
  return <div>DocumentPage</div>;
};

export default DocumentPage;
