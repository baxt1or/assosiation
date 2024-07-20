"use client";
import { useState } from "react";
import { Documents } from "@prisma/client";
import { Hook } from "../Pagination";
import { redirect } from "next/navigation";
import { LegislationCard } from "./LegislationCard";

export const LegislationPaginationController = ({
  data,
}: {
  data: Documents[];
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  if (!data) {
    return redirect("/");
  }

  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 mb-12">
        {currentPosts.map((post) => (
          <LegislationCard key={post.id} document={post} />
        ))}
      </div>

      <Hook
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
